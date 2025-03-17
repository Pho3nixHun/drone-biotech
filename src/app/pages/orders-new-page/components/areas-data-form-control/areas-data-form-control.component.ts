/* eslint-disable @typescript-eslint/no-empty-function */
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
    AreasDataFormControlVM,
    AreaXData,
    TotalAreaXData,
} from './areas-data-form-control.model';
import {
    AreaData,
    AreaDataDialogVM,
    isAreaDataDialogResultWithAreaData,
} from './components/area-data-dialog/area-data-dialog.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '@services/dialog/dialog.service';
import { AreaDataDialogComponent } from './components/area-data-dialog/area-data-dialog.component';
import { AsyncPipe } from '@angular/common';
import { filter, lastValueFrom, map } from 'rxjs';
import { DistanceService } from '@services/distance/distance.service';
import { getAreaOfPolygon } from 'geolib';
import { TranslocoModule } from '@jsverse/transloco';
import { ReverseGeocodingService } from '@services/reverse-geocoding/reverse-geocoding.service';
import { TranslocoLocaleModule } from '@jsverse/transloco-locale';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { isDeleteDialogResult } from './components/delete-dialog/delete-dialog.model';
import { CardGroupComponent } from '../../../../shared/components/card-group/card-group.component';
import { CardItemComponent } from '../../../../shared/components/card-item/card-item.component';
import { KeyValueComponent } from '../../../../shared/components/key-value/key-value.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-areas-data-form-control',
    standalone: true,
    imports: [
        AsyncPipe,
        TranslocoModule,
        TranslocoLocaleModule,
        CardGroupComponent,
        CardItemComponent,
        KeyValueComponent,
        MatIconModule,
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
    public areaData = signal<AreaData[]>([]);
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

    protected async editAreaData(id: number) {
        const areaData = this.areaData().find((item) => item.id === id);
        if (areaData) {
            const vm: AreaDataDialogVM = {
                ...this.vm().editAreaDataDialogVM,
                areaData,
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
                this.areaData.set(
                    this.areaData().reduce<AreaData[]>(
                        (acc, curr) => [
                            ...acc,
                            curr.id === id ? response : curr,
                        ],
                        []
                    )
                );
            }
        }
    }

    protected async deleteAreaData(id: number) {
        const response = await lastValueFrom(
            this.dialogService
                .create(this.vm().deleteDialogVM, DeleteDialogComponent)
                .result$.pipe(
                    filter((data) => isDeleteDialogResult(data)),
                    map((data) => data.reasonType)
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

    protected xAreaData$ = computed<Promise<AreaXData[]>>(async () => {
        const areaDataPromises: Promise<AreaXData>[] = this.areaData().map(
            async (data) => {
                const targetAreaSize =
                    getAreaOfPolygon(data.targetArea) / 10000;
                return {
                    ...data,
                    targetAreaSize,
                    entryPointAddress:
                        await this.reverseGeocodingService.getAddressByCoordinates(
                            data.entryPoint
                        ),
                    trichogrammaRequirement: targetAreaSize * data.dosePerHq,
                    distanceFromHeadOffice:
                        (await lastValueFrom(
                            this.distanceService.getDistance(data.entryPoint)
                        )) / 1000,
                };
            }
        );
        return await Promise.all(areaDataPromises);
    });

    protected totalAreaXData$ = computed<Promise<TotalAreaXData | null>>(
        async () => {
            const xAreaData = await this.xAreaData$();
            if (xAreaData.length === 0) {
                return null;
            }
            return {
                totalDistanceFromHeadOffice:
                    (await lastValueFrom(
                        this.distanceService.getTotalShortestDistance(
                            xAreaData.map((item) => item.entryPoint)
                        )
                    )) / 1000,
                totalTargetAreaSize: xAreaData.reduce(
                    (acc, curr) => acc + curr.targetAreaSize,
                    0
                ),
                totalTrichogrammaRequirement: xAreaData.reduce(
                    (acc, curr) => acc + curr.trichogrammaRequirement,
                    0
                ),
            };
        }
    );

    private readonly areaDataEffect = effect(() => {
        this.onChange(this.areaData());
    });

    onChange: (value: AreaData[]) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: AreaData[]): void {
        this.areaData.set(value);
    }

    registerOnChange(fn: (value: AreaData[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
