import {
    Component,
    computed,
    forwardRef,
    inject,
    input,
    Signal,
    signal,
} from '@angular/core';
import {
    AreasDataFormControlVM,
    AreaXData,
    TotalAreaXData,
} from './areas-data-form-control.model';
import {
    AreaData,
    AreaDataDialogResponse,
} from './components/area-data-dialog/area-data-dialog.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { combineLatest, forkJoin, map, of, switchMap } from 'rxjs';
import { DistanceService } from '@services/distance/distance.service';
import { getAreaOfPolygon } from 'geolib';
import { TranslocoModule } from '@jsverse/transloco';
import { ReverseGeocodingService } from '@services/reverse-geocoding/reverse-geocoding.service';
import { CardGroupComponent } from '@components/card-group/card-group.component';
import { CardItemComponent } from '@components/card-item/card-item.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { MatIconModule } from '@angular/material/icon';
import {
    METRES_TO_KILOMETERS,
    SQUARE_METRES_TO_HECTARE,
} from '@stores/location/location.model';
import { ButtonComponent } from '@components/button/button.component';
import { AreaDataDialogComponent } from './components/area-data-dialog/area-data-dialog.component';
import { toSignal, rxResource, toObservable } from '@angular/core/rxjs-interop';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DeleteDialogResponse } from './components/delete-dialog/delete-dialog.model';

@Component({
    selector: 'app-areas-data-form-control',
    imports: [
        TranslocoModule,
        CardGroupComponent,
        CardItemComponent,
        KeyValueComponent,
        MatIconModule,
        ButtonComponent,
        AreaDataDialogComponent,
        DeleteDialogComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AreasDataFormControlComponent),
            multi: true,
        },
    ],
    templateUrl: './areas-data-form-control.component.html',
})
export class AreasDataFormControlComponent implements ControlValueAccessor {
    public readonly vm = input.required<AreasDataFormControlVM>();
    public readonly invalid = input<boolean>(false);

    protected readonly disabled = signal<boolean>(false);
    private readonly rgs = inject(ReverseGeocodingService);
    private readonly ds = inject(DistanceService);
    private readonly value = signal<AreaData[] | null>(null);
    private readonly onTouched = signal<(() => void) | null>(null);
    private readonly onChange = signal<
        ((value: AreaData[] | null) => void) | null
    >(null);

    protected markAsTouched() {
        const onTouched = this.onTouched();
        if (onTouched) onTouched();
    }

    protected onAddMissionResponse(response: AreaDataDialogResponse) {
        this.markAsTouched();
        const onChange = this.onChange();
        if (!onChange) return;

        if (response.type === 'submit') {
            const value = this.value() ?? [];
            const updated = response.areaData;

            // Check if the ID already exists
            const index = value.findIndex((v) => v.id === updated.id);

            this.value.set(
                index >= 0
                    ? value.map((v) => (v.id === updated.id ? updated : v))
                    : [...value, updated]
            );
        }

        onChange(this.value());
    }

    protected onDeleteMissionResponse(response: DeleteDialogResponse) {
        this.markAsTouched();

        const onChange = this.onChange();
        const value = this.value();
        if (!onChange || !value) return;

        if (response.type === 'submit')
            this.value.set(value.filter((curr) => curr.id !== response.id));

        onChange(this.value());
    }

    public writeValue(value: AreaData[] | null): void {
        this.value.set(value);
    }

    public registerOnChange(fn: (value: AreaData[] | null) => void): void {
        this.onChange.set(fn);
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched.set(fn);
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }

    protected readonly areaXData: Signal<AreaXData[] | null> = toSignal(
        combineLatest([
            toObservable(this.value),
            of(METRES_TO_KILOMETERS),
            of(SQUARE_METRES_TO_HECTARE),
        ]).pipe(
            switchMap(([areas, metresToKm, sqMetresToHa]) =>
                areas && areas.length > 0
                    ? forkJoin(
                          areas.map((area) =>
                              combineLatest([
                                  this.rgs.getAddressByCoordinates(
                                      area.entryPoint
                                  ),
                                  this.ds
                                      .getDistance(area.entryPoint)
                                      .pipe(
                                          map(
                                              (distance) =>
                                                  distance / metresToKm
                                          )
                                      ),
                                  of(
                                      getAreaOfPolygon(area.targetArea) /
                                          sqMetresToHa
                                  ),
                              ]).pipe(
                                  map(
                                      ([
                                          entryPointAddress,
                                          distanceFromHeadOffice,
                                          targetAreaSize,
                                      ]) => ({
                                          ...area,
                                          entryPointAddress,
                                          targetAreaSize,
                                          distanceFromHeadOffice,
                                          trichogrammaRequirement:
                                              targetAreaSize * area.dosePerHq,
                                      })
                                  )
                              )
                          )
                      )
                    : of(null)
            )
        ),
        { initialValue: null }
    );

    private readonly totalDistanceFromHeadOffice = rxResource({
        params: () => ({
            areas: this.areaXData(),
            metres_to_kilometers: METRES_TO_KILOMETERS,
        }),
        stream: ({ params }) =>
            of(params).pipe(
                switchMap((parameters) =>
                    parameters.areas
                        ? this.ds
                              .getShortestDistanceWithWaypoints(
                                  parameters.areas.map(
                                      (item) => item.entryPoint
                                  )
                              )
                              .pipe(
                                  map(
                                      (distance) =>
                                          distance /
                                          parameters.metres_to_kilometers
                                  )
                              )
                        : of(null)
                )
            ),
    });

    protected readonly totalAreaXData = computed<TotalAreaXData | null>(() => {
        const areaXData = this.areaXData();
        const totalDistanceFromHeadOffice =
            this.totalDistanceFromHeadOffice.value();
        if (!areaXData || !totalDistanceFromHeadOffice) return null;

        return {
            totalDistanceFromHeadOffice,
            totalTargetAreaSize: areaXData.reduce(
                (acc, curr) => acc + curr.targetAreaSize,
                0
            ),
            totalTrichogrammaRequirement: areaXData.reduce(
                (acc, curr) => acc + curr.trichogrammaRequirement,
                0
            ),
        };
    });
}
