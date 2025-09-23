import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonComponent } from '@components/button/button.component';
import {
    ConfirmationDialogResponse,
    ConfirmationDialogVM,
} from './confirmation-dialog.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-confirmation-dialog',
    imports: [
        DialogLayoutComponent,
        TranslocoModule,
        ButtonComponent,
        MatIconModule,
    ],
    templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
    public readonly vm = input.required<ConfirmationDialogVM>();
    public readonly response = output<ConfirmationDialogResponse>();
    public readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    protected cancelClick() {
        this.response.emit({ type: 'cancel' });
        this.dialog().nativeElement.close();
    }
    protected submitClick() {
        this.response.emit({ type: 'submit' });
        this.dialog().nativeElement.close();
    }

    public openDialog() {
        this.dialog().nativeElement.showModal();
    }
}
