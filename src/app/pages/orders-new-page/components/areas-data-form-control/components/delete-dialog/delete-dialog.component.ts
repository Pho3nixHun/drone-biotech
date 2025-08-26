import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { Component, computed, inject, signal } from '@angular/core';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import { DeleteDialogReason, isDeleteDialogVM } from './delete-dialog.model';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
    selector: 'app-delete-dialog',
    imports: [
        MatIconModule,
        TranslocoModule,
        DialogLayoutComponent,
        ButtonComponent,
    ],
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
    protected readonly unknownVM = signal<unknown>(inject(DIALOG_DATA));
    protected readonly dialogRef = inject(DIALOG_REF);

    protected vm = computed(() => {
        const vm = this.unknownVM();
        return isDeleteDialogVM(vm) ? vm : null;
    });

    protected deleteClick() {
        const dialogCloseReason: DeleteDialogReason = {
            reasonType: 'submit',
            type: 'deleteDialogReason',
        };
        this.dialogRef.close(dialogCloseReason);
    }

    protected cancelClick() {
        const dialogCloseReason: DeleteDialogReason = {
            reasonType: 'cancel',
            type: 'deleteDialogReason',
        };
        this.dialogRef.close(dialogCloseReason);
    }
}
