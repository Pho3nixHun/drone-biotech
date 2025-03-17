import {
    AreaDataDialogResultWithAreaData,
    AreaDataDialogResultWithoutAreaData,
    AreaDataDialogVM,
    Coordinates,
} from './area-data-dialog.model';
import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MapAreaSelectFormControlComponent } from './components/map-area-select-form-control/map-area-select-form-control.component';
import { MapPointSelectFormControlComponent } from './components/map-point-select-form-control/map-point-select-form-control.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-area-data-dialog',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MapAreaSelectFormControlComponent,
        MapPointSelectFormControlComponent,
        NgClass,
        TranslocoModule,
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent {
    protected readonly vm: AreaDataDialogVM = inject(DIALOG_DATA);
    protected readonly dialogRef = inject(DIALOG_REF);
    private readonly fb = inject(FormBuilder);

    public areaDataFormGroup = this.fb.group({
        targetArea: this.fb.control<Coordinates[] | null>(
            this.vm.areaData?.targetArea ?? null,
            Validators.required
        ),
        entryPoint: this.fb.control<Coordinates | null>(
            this.vm.areaData?.entryPoint ?? null,
            Validators.required
        ),
        dosePerHq: this.fb.control<number | null>(
            this.vm.areaData?.dosePerHq ?? null,
            [Validators.min(0), Validators.required]
        ),
        applicationDate: this.fb.control<Date | null>(
            this.vm.areaData?.applicationDate ?? null,
            Validators.required
        ),
    });

    resetFormWithCloseDialog() {
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
