import { Component, inject, signal } from '@angular/core';
import { DIALOG_DATA, DIALOG_REF } from '@services/dialog/dialog.service';
import { DeleteDialogReason, DeleteDialogVM } from './delete-dialog.model';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-delete-dialog',
    standalone: true,
    imports: [MatIconModule, TranslocoModule],
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
    protected readonly vm = signal<DeleteDialogVM>(inject(DIALOG_DATA));
    protected readonly dialogRef = inject(DIALOG_REF);

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
