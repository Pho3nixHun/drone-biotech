import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogComponent } from '@components/dialog/dialog.component';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import { DialogDirective } from '@directives/dialog/dialog.directive';
import { ButtonComponent } from '@components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TranslocoModule } from '@jsverse/transloco';
import { emptyStringValidator } from '@validators/empty-string.validator';
import {
    OfficeCancelDialogResult,
    OfficeCancelDialogVM,
} from './office-cancel-dialog.model';

@Component({
    selector: 'app-office-cancel-dialog',
    imports: [
        ButtonComponent,
        InputTextareaComponent,
        MatIconModule,
        DialogComponent,
        PageHeaderComponent,
        TranslocoModule,
        ReactiveFormsModule,
    ],
    templateUrl: './office-cancel-dialog.component.html',
})
export class OfficeCancelDialogComponent extends DialogDirective<
    OfficeCancelDialogVM,
    OfficeCancelDialogResult
> {
    private readonly fb = inject(FormBuilder);

    protected readonly reasonControl = this.fb.control('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    public override submit() {
        const value = this.reasonControl.value?.trim() ?? null;
        const reason = value?.length === 0 ? null : value;
        this.response.emit({ type: 'confirm', reason });
        this.myDialog().nativeElement.close();
    }

    public override open(vm: OfficeCancelDialogVM): void {
        this.vm.set(vm);
        this.myDialog().nativeElement.showModal();
    }
}
