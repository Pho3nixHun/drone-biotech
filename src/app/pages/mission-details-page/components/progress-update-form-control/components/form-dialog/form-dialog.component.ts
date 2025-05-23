import { Component, computed, inject, signal } from '@angular/core';
import { BaseDialogComponent } from '@components/base-dialog/base-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DIALOG_REF, DIALOG_DATA } from '@services/dialog/dialog.service';
import { TranslocoModule } from '@jsverse/transloco';
import { JsonPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
    FormDialogResultWithData,
    FormDialogResultWithoutData,
    FormDialogVM,
    isFormDialogVM,
} from './form-dialog.model';
import { FormGeneratorService } from './form-generator.service';

/**
 * FormDialogComponent
 *
 * Type: Container
 *
 * Scope:
 * - Renders a dialog that renders a form dynamically.
 * - Passes relevant data, like config, texts.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of other components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */
@Component({
    selector: 'app-form-dialog',
    imports: [
        BaseDialogComponent,
        TranslocoModule,
        ReactiveFormsModule,
        NgClass,
        MatSelectModule,
        NgTemplateOutlet,
        MatFormField,
        MatInputModule,
        MatCheckboxModule,
        JsonPipe,
    ],
    templateUrl: './form-dialog.component.html',
})
export class FormDialogComponent {
    private readonly dialogRef = inject(DIALOG_REF);
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));
    private readonly fg = inject(FormGeneratorService);

    protected readonly vm = computed<FormDialogVM | null>(() => {
        const vm = this.unknownVM();
        return isFormDialogVM(vm) ? vm : null;
    });

    protected readonly form = computed(() => {
        const vm = this.vm();
        return vm ? this.fg.generateForm(vm.formGroupConfig) : null;
    });

    protected submitForm() {
        const form = this.form();
        if (!form || form.invalid) return;

        const data: FormDialogResultWithData = {
            reasonType: 'submit',
            reason: JSON.stringify(form.value),
        };
        this.dialogRef.close(data);
    }

    protected cancelClick() {
        const data: FormDialogResultWithoutData = {
            reasonType: 'cancel',
        };
        this.dialogRef.close(data);
    }
}
