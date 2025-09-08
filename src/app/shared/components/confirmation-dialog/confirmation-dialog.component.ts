import { Component, computed, inject, signal } from '@angular/core';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import {
    CancelReason,
    SubmitReason,
    isConfirmationDialogVM,
} from './confirmation-dialog.model';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'app-confirmation-dialog',
    imports: [DialogLayoutComponent, TranslocoModule, ButtonComponent],
    templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));
    protected readonly dialogRef = inject(DIALOG_REF);

    protected vm = computed(() => {
        const vm = this.unknownVM();
        return isConfirmationDialogVM(vm) ? vm : null;
    });

    protected onConfirmClick() {
        const reason: SubmitReason = {
            reasonType: 'submit',
        };
        this.dialogRef.close(reason);
    }

    protected onCancelClick() {
        const reason: CancelReason = {
            reasonType: 'cancel',
        };
        this.dialogRef.close(reason);
    }
}
