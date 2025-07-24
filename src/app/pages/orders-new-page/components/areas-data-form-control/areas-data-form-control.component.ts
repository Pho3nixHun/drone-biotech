import {
    Component,
    computed,
    effect,
    forwardRef,
    inject,
    input,
    signal,
} from '@angular/core';
import {
    combineLatest,
    defaultIfEmpty,
    filter,
    firstValueFrom,
    forkJoin,
    lastValueFrom,
    map,
    noop,
    Observable,
    of,
    switchMap,
} from 'rxjs';
import {
    AreasDataFormControlVM,
    AreaXData,
    TotalAreaXData,
} from './areas-data-form-control.model';
import {
    AreaData,
    AreaDataDialogVM,
    isAreaDataDialogResultWithAreaData,
} from './components/area-data-dialog/area-data-dialog.model';
import {
    METRES_TO_KILOMETERS,
    SQUARE_METRES_TO_HECTARE,
} from '@stores/location/location.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '@services/dialog/dialog.service';
import { AreaDataDialogComponent } from './components/area-data-dialog/area-data-dialog.component';
import { DistanceService } from '@services/distance/distance.service';
import { getAreaOfPolygon } from 'geolib';
import { TranslocoModule } from '@jsverse/transloco';
import { ReverseGeocodingService } from '@services/reverse-geocoding/reverse-geocoding.service';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { isDeleteDialogResult } from './components/delete-dialog/delete-dialog.model';
import { CardGroupComponent } from '@components/card-group/card-group.component';
import { CardItemComponent } from '@components/card-group/components/card-item-list/components/card-item/card-item.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { MatIconModule } from '@angular/material/icon';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CardGroupHeaderComponent } from '@components/card-group/components/card-group-header/card-group-header.component';
import { CardItemListComponent } from '@components/card-group/components/card-item-list/card-item-list.component';
import { SectionHeaderComponent } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/section-header/section-header.component';
import { CardGroupSummaryComponent } from '@components/card-group/components/card-group-summary/card-group-summary.component';
import { CardGroupSummaryHeaderComponent } from '@components/card-group/components/card-group-summary/components/card-group-summary-header/card-group-summary-header.component';
import { CardGroupSummaryContentComponent } from '@components/card-group/components/card-group-summary/components/card-group-summary-content/card-group-summary-content.component';
import { CardItemContentComponent } from '@components/card-group/components/card-item-list/components/card-item/components/card-item-content/card-item-content.component';
import { CardItemActionListComponent } from '@components/card-group/components/card-item-list/components/card-item/components/card-item-action-list/card-item-action-list.component';

@Component({
    selector: 'app-areas-data-form-control',
    imports: [
        TranslocoModule,
        CardGroupComponent,
        CardItemComponent,
        KeyValueComponent,
        MatIconModule,
        CardGroupHeaderComponent,
        CardItemListComponent,
        SectionHeaderComponent,
        CardGroupSummaryComponent,
        CardGroupSummaryHeaderComponent,
        CardGroupSummaryContentComponent,
        CardItemContentComponent,
        CardItemActionListComponent,
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
    public vm = input.required<AreasDataFormControlVM>();
    private readonly areaData = signal<AreaData[]>([]);
    private readonly distanceService = inject(DistanceService);
    private readonly dialogService = inject(DialogService);
    private readonly reverseGeocodingService = inject(ReverseGeocodingService);

    protected async addAreaData() {
        const vm: AreaDataDialogVM = {
            ...this.vm().addAreaDataDialogVM,
            areaData: null,
        };

        const response: AreaData | null = await lastValueFrom(
            this.dialogService
                .create(vm, AreaDataDialogComponent)
                .result$.pipe(
                    map((data: unknown) =>
                        isAreaDataDialogResultWithAreaData(data)
                            ? data.areaData
                            : null
                    )
                )
        );

        if (response) {
            this.areaData.set([...this.areaData(), response]);
        }
    }

    protected async editAreaData(id: string) {
        const areaData = this.areaData().find((item) => item.id === id);
        if (!areaData) return;

        const vm: AreaDataDialogVM = {
            ...this.vm().editAreaDataDialogVM,
            areaData,
        };

        const response = await lastValueFrom(
            this.dialogService
                .create(vm, AreaDataDialogComponent)
                .result$.pipe(
                    map((data: unknown) =>
                        isAreaDataDialogResultWithAreaData(data)
                            ? data.areaData
                            : null
                    )
                )
        );

        if (response) {
            this.areaData.set(
                this.areaData().reduce<AreaData[]>(
                    (acc, curr) => [...acc, curr.id === id ? response : curr],
                    []
                )
            );
        }
    }

    protected async deleteAreaData(id: string) {
        const response = await firstValueFrom(
            this.dialogService
                .create(this.vm().deleteDialogVM, DeleteDialogComponent)
                .result$.pipe(
                    filter((data) => isDeleteDialogResult(data)),
                    map((data) => data.reasonType),
                    defaultIfEmpty(null)
                )
        );
        if (response === 'submit') {
            this.areaData.set(
                this.areaData().reduce<AreaData[]>(
                    (acc, curr) => (curr.id !== id ? [...acc, curr] : [...acc]),
                    []
                )
            );
        }
    }

    protected readonly areaXData$: Observable<AreaXData[] | null> =
        toObservable(this.areaData).pipe(
            switchMap((data) => {
                if (!data || data.length === 0) return of(null);

                return forkJoin(
                    data.map((area) =>
                        combineLatest([
                            this.reverseGeocodingService.getAddressByCoordinates(
                                area.entryPoint
                            ),
                            this.distanceService
                                .getDistance(area.entryPoint)
                                .pipe(
                                    map(
                                        (distance) =>
                                            distance / METRES_TO_KILOMETERS
                                    )
                                ),
                        ]).pipe(
                            map(
                                ([
                                    entryPointAddress,
                                    distanceFromHeadOffice,
                                ]) => {
                                    const targetAreaSize =
                                        getAreaOfPolygon(area.targetArea) /
                                        SQUARE_METRES_TO_HECTARE;
                                    return {
                                        ...area,
                                        entryPointAddress,
                                        targetAreaSize,
                                        distanceFromHeadOffice,
                                        trichogrammaRequirement:
                                            targetAreaSize * area.dosePerHq,
                                    };
                                }
                            )
                        )
                    )
                );
            })
        );

    protected readonly areaXData = toSignal(this.areaXData$);

    private readonly totalDistanceFromHeadOffice = rxResource({
        request: () => this.areaXData(),
        loader: ({ request }) => {
            if (!request) return of(null);

            return this.distanceService
                .getShortestDistanceWithWaypoints(
                    request.map((item) => item.entryPoint)
                )
                .pipe(map((distance) => distance / METRES_TO_KILOMETERS));
        },
    });

    protected readonly totalAreaXData = computed<TotalAreaXData | null>(() => {
        const areaXData = this.areaXData();
        const totalDistanceFromHeadOffice =
            this.totalDistanceFromHeadOffice.value();
        if (
            !areaXData ||
            areaXData.length === 0 ||
            !totalDistanceFromHeadOffice
        )
            return null;

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

    private readonly areaDataEffect = effect(() =>
        this.onChange(this.areaData())
    );

    public onChange: (value: AreaData[]) => void = noop;

    public onTouched: () => void = noop;

    public writeValue(value: AreaData[] | null): void {
        this.areaData.set(value ?? []);
    }

    public registerOnChange(fn: (value: AreaData[]) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
