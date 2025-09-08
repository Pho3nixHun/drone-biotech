import { TranslocoModule } from '@jsverse/transloco';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import {
    AreaDataDialogResultWithAreaData,
    AreaDataDialogResultWithoutAreaData,
    AreaDataDialogVM,
    isAreaDataDialogVM,
} from './area-data-dialog.model';
import { MapFormControlComponent } from './components/map-form-control/map-form-control.component';
import { v4 as uuidv4 } from 'uuid';
import { Coordinates } from '@stores/location/location.model';
import { isNullish } from '@utils/is-nullish.typeguard';
import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'app-area-data-dialog',
    imports: [
        ReactiveFormsModule,
        TranslocoModule,
        DialogLayoutComponent,
        MapFormControlComponent,
        ButtonComponent,
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent {
    private readonly fb = inject(FormBuilder);
    protected readonly dialogRef = inject(DIALOG_REF);
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));

    protected readonly vm = computed<AreaDataDialogVM | null>(() => {
        const vm = this.unknownVM();
        return isAreaDataDialogVM(vm) ? vm : null;
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
        comment: this.fb.control<string>(this.vm()?.areaData?.comment ?? ''),
    });

    protected resetFormWithCloseDialog() {
        const closeData: AreaDataDialogResultWithoutAreaData = {
            reasonType: 'cancel',
        };
        this.dialogRef.close(closeData);
        this.areaDataFormGroup.reset();
    }

    protected submitForm() {
        if (this.areaDataFormGroup.invalid) return;

        const { missionName, map, dosePerHq, applicationDate, comment } =
            this.areaDataFormGroup.value;
        if (
            !map ||
            !dosePerHq ||
            !applicationDate ||
            isNullish(missionName) ||
            isNullish(comment)
        )
            return;

        const { targetArea, entryPoint } = map;
        if (!entryPoint || !targetArea) return;

        const closeData: AreaDataDialogResultWithAreaData = {
            reasonType: 'submit',
            type: 'areaDataDialogResultWithAreaData',
            areaData: {
                id: uuidv4(),
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
