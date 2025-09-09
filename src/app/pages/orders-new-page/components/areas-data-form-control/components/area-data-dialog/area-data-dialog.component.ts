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
import { InputNumberComponent } from '@components/input-number/input-number.component';
import { InputTextComponent } from '@components/input-text/input-text.component';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

const MISSION_NAME_MAX_LENGTH = 120;
const DOSE_PER_HQ_MIN = 1;

@Component({
    selector: 'app-area-data-dialog',
    imports: [
        ReactiveFormsModule,
        TranslocoModule,
        DialogLayoutComponent,
        MapFormControlComponent,
        ButtonComponent,
        InputNumberComponent,
        InputTextComponent,
        InputTextareaComponent,
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent {
    private readonly fb = inject(FormBuilder);
    protected readonly dialogRef = inject(DIALOG_REF);
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));
    protected readonly missionNameMaxLength = MISSION_NAME_MAX_LENGTH;
    protected readonly dosePerHqMin = DOSE_PER_HQ_MIN;
    protected readonly vm = computed<AreaDataDialogVM | null>(() => {
        const vm = this.unknownVM();
        return isAreaDataDialogVM(vm) ? vm : null;
    });

    protected readonly formGroup = this.fb.group({
        missionName: this.fb.control<string>(
            this.vm()?.areaData?.missionName ?? '',
            [
                Validators.required,
                Validators.maxLength(this.missionNameMaxLength),
            ]
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
            [Validators.required, Validators.min(this.dosePerHqMin)]
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
        this.formGroup.reset();
    }

    protected submitForm() {
        if (this.formGroup.invalid) return;

        const { missionName, map, dosePerHq, applicationDate, comment } =
            this.formGroup.value;
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
        this.formGroup.reset();
    }

    protected readonly missionNameLength = toSignal(
        this.formGroup.controls.missionName.valueChanges.pipe(
            map((missionName) => (missionName ? missionName.length : 0))
        ),
        { initialValue: 0 }
    );
}
