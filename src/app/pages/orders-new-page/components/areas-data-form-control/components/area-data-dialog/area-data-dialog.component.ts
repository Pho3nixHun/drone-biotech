import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import { BaseDialogComponent } from '@components/base-dialog/base-dialog.component';
import {
    AreaDataDialogResultWithAreaData,
    AreaDataDialogResultWithoutAreaData,
    AreaDataDialogVM,
    Coordinates,
    isAreaDataDialogVM,
} from './area-data-dialog.model';
import { MapFormControlComponent } from './components/map-form-control/map-form-control.component';
import { Store } from '@ngrx/store';
import { selectURL } from 'src/app/stores/router/router.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector: 'app-area-data-dialog',
    imports: [
        NgClass,
        ReactiveFormsModule,
        TranslocoModule,
        BaseDialogComponent,
        MapFormControlComponent,
    ],
    templateUrl: './area-data-dialog.component.html'
})
export class AreaDataDialogComponent {
    private readonly store = inject(Store);
    private readonly router = inject(Router);
    private readonly fb = inject(FormBuilder);
    protected readonly dialogRef = inject(DIALOG_REF);
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));

    protected readonly vm = computed<AreaDataDialogVM | null>(() => {
        const vm = this.unknownVM();
        return isAreaDataDialogVM(vm) ? vm : null;
    });

    private readonly currentUrl = toSignal(this.store.select(selectURL));

    private readonly navigationEndUrl = toSignal(
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .pipe(map((route) => route.url))
    );

    private readonly closeDialogEffect = effect(() => {
        const current = this.currentUrl();
        const next = this.navigationEndUrl();
        if (current == next) {
            const closeData: AreaDataDialogResultWithoutAreaData = {
                reasonType: 'cancel',
            };
            this.dialogRef.close(closeData);
        }
    });

    public areaDataFormGroup = this.fb.group({
        missionName: this.fb.control<string>(
            this.vm()?.areaData?.missionName ?? '',
            [Validators.required, Validators.maxLength(120)]
        ),

        map: this.fb.control<{
            targetArea: Coordinates[] | null;
            entryPoint: Coordinates | null;
        }>(
            {
                targetArea: this.vm()?.areaData?.targetArea ?? null,
                entryPoint: this.vm()?.areaData?.entryPoint ?? null,
            },
            Validators.required
        ),

        dosePerHq: this.fb.control<number | null>(
            this.vm()?.areaData?.dosePerHq ?? null,
            [Validators.min(1), Validators.required]
        ),
        applicationDate: this.fb.control<Date | null>(
            this.vm()?.areaData?.applicationDate ?? null,
            Validators.required
        ),
        comment: this.fb.control<string>(
            this.vm()?.areaData?.comment ?? '',
            Validators.required
        ),
    });

    protected resetFormWithCloseDialog() {
        const closeData: AreaDataDialogResultWithoutAreaData = {
            reasonType: 'cancel',
        };
        this.dialogRef.close(closeData);
        this.areaDataFormGroup.reset();
    }

    submitForm() {
        if (this.areaDataFormGroup.invalid) return;

        const { missionName, map, dosePerHq, applicationDate, comment } =
            this.areaDataFormGroup.value;
        if (!dosePerHq || !applicationDate || !missionName || !comment || !map)
            return;

        const { targetArea, entryPoint } = map;
        if (!entryPoint || !targetArea) return;

        const closeData: AreaDataDialogResultWithAreaData = {
            reasonType: 'submit',
            type: 'areaDataDialogResultWithAreaData',
            areaData: {
                id: Date.now(),
                missionName,
                targetArea,
                entryPoint,
                dosePerHq,
                applicationDate,
                comment,
            },
        };
        this.dialogRef.close(closeData);
        this.areaDataFormGroup.reset();
    }
}
