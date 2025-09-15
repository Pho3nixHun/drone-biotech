import {
    AreaData,
    AreaDataDialogResponse,
    AreaDataDialogVM,
} from './area-data-dialog.model';
import { TranslocoModule } from '@jsverse/transloco';
import {
    Component,
    effect,
    ElementRef,
    inject,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { MapFormControlComponent } from './components/map-form-control/map-form-control.component';
import { v4 as uuidv4 } from 'uuid';
import { Coordinates } from '@stores/location/location.model';
import { ButtonComponent } from '@components/button/button.component';
import { InputNumberComponent } from '@components/input-number/input-number.component';
import { InputTextComponent } from '@components/input-text/input-text.component';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { isUndefined } from '@utils/is-undefined.typeguard';
import { MatIconModule } from '@angular/material/icon';

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
        MatIconModule,
    ],
    templateUrl: './area-data-dialog.component.html',
})
export class AreaDataDialogComponent {
    private readonly fb = inject(FormBuilder);
    private readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
    protected readonly vm = signal<AreaDataDialogVM | null>(null);
    private readonly area = signal<AreaData | undefined>(undefined);
    protected readonly response = output<AreaDataDialogResponse>();
    protected readonly missionNameMaxLength = MISSION_NAME_MAX_LENGTH;
    protected readonly dosePerHqMin = DOSE_PER_HQ_MIN;

    protected readonly formGroup = this.fb.group({
        missionName: this.fb.control('', [
            Validators.required,
            Validators.maxLength(this.missionNameMaxLength),
        ]),
        map: this.fb.control<{
            targetArea: Coordinates[] | null;
            entryPoint: Coordinates | null;
        }>({ entryPoint: null, targetArea: null }, Validators.required),

        dosePerHq: this.fb.control(0, [
            Validators.required,
            Validators.min(this.dosePerHqMin),
        ]),
        applicationDate: this.fb.control<Date | null>(
            null,
            Validators.required
        ),
        comment: this.fb.control(''),
    });

    public openDialog(vm: AreaDataDialogVM, area?: AreaData) {
        this.vm.set(vm);
        this.area.set(area);
        this.dialog().nativeElement.showModal();
    }

    protected cancel() {
        this.response.emit({ type: 'cancel' });
        this.dialog().nativeElement.close();
    }

    protected reset() {
        this.vm.set(null);
        this.area.set(undefined);
        this.formGroup.reset();
    }

    private readonly setValueEffect = effect(() => {
        const area = this.area();
        if (!area) return;
        this.formGroup.setValue({
            applicationDate: area.applicationDate,
            comment: area.comment,
            dosePerHq: area.dosePerHq,
            missionName: area.missionName,
            map: {
                entryPoint: area.entryPoint,
                targetArea: area.targetArea,
            },
        });
    });

    protected submitForm() {
        if (this.formGroup.invalid) return;

        const { missionName, map, dosePerHq, applicationDate, comment } =
            this.formGroup.value;
        if (
            !map ||
            !dosePerHq ||
            !applicationDate ||
            !missionName ||
            isUndefined(comment)
        )
            return;

        const { targetArea, entryPoint } = map;

        if (!entryPoint || !targetArea) return;

        this.response.emit({
            type: 'submit',
            areaData: {
                id: this.area()?.id ?? uuidv4(),
                missionName,
                entryPoint,
                targetArea,
                dosePerHq,
                applicationDate,
                comment,
            },
        });
        this.dialog().nativeElement.close();
    }

    protected readonly missionNameLength = toSignal(
        this.formGroup.controls.missionName.valueChanges.pipe(
            map((missionName) => (missionName ? missionName.length : 0))
        ),
        { initialValue: 0 }
    );
}
