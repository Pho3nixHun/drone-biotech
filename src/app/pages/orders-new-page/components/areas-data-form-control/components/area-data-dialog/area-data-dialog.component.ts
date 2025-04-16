import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import { BaseDialogComponent } from '@components/base-dialog/base-dialog.component';
import { MapAreaSelectFormControlComponent } from './components/map-area-select-form-control/map-area-select-form-control.component';
import { MapPointSelectFormControlComponent } from './components/map-point-select-form-control/map-point-select-form-control.component';
import {
    AreaDataDialogResultWithAreaData,
    AreaDataDialogResultWithoutAreaData,
    AreaDataDialogVM,
    Coordinates,
    isAreaDataDialogVM,
} from './area-data-dialog.model';

@Component({
    selector: 'app-area-data-dialog',
    standalone: true,
    imports: [
        NgClass,
        ReactiveFormsModule,
        TranslocoModule,
        BaseDialogComponent,
        MapAreaSelectFormControlComponent,
        MapPointSelectFormControlComponent,
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent {
    protected readonly dialogRef = inject(DIALOG_REF);
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));

    protected readonly vm = computed<AreaDataDialogVM | null>(() => {
        const vm = this.unknownVM();
        return isAreaDataDialogVM(vm) ? vm : null;
    });

    private readonly fb = inject(FormBuilder);

    public areaDataFormGroup = this.fb.group({
        targetArea: this.fb.control<Coordinates[] | null>(
            this.vm()?.areaData?.targetArea ?? null,
            Validators.required
        ),
        entryPoint: this.fb.control<Coordinates | null>(
            this.vm()?.areaData?.entryPoint ?? null,
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
    });

    protected resetFormWithCloseDialog() {
        this.areaDataFormGroup.reset();
        const closeData: AreaDataDialogResultWithoutAreaData = {
            reasonType: 'cancel',
        };
        this.dialogRef.close(closeData);
    }

    submitForm() {
        if (this.areaDataFormGroup.invalid) {
            return;
        }
        const { targetArea, entryPoint, dosePerHq, applicationDate } =
            this.areaDataFormGroup.value;

        if (targetArea && entryPoint && dosePerHq && applicationDate) {
            const closeData: AreaDataDialogResultWithAreaData = {
                reasonType: 'submit',
                type: 'areaDataDialogResultWithAreaData',
                areaData: {
                    id: Date.now(),
                    targetArea,
                    entryPoint,
                    dosePerHq,
                    applicationDate,
                },
            };
            this.areaDataFormGroup.reset();
            this.dialogRef.close(closeData);
        }
    }
}
