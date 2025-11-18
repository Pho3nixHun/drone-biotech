import { Component, ElementRef, output, viewChild } from '@angular/core';
import { AbstractDialog } from '@components/dialog-layout/classes/abstract-dialog.class';
import {
    CloseOrderDialogDialogResponse,
    CloseOrderDialogVM,
} from './close-order-dialog.model';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { ButtonComponent } from '@components/button/button.component';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { StackComponent } from '@components/stack/stack.component';

/**
 * CloseOrderDialogComponent
 *
 * Type: Container (Dialog)
 *
 * Scope:
 * - Builds and renders a dialog that has its own business logic.
 * - With the dialog the user can close the existing order.
 *
 * Out-of-Scope:
 * - Does not handle styling of other components.
 * - Not responsible for the detailed presentation logic.
 * - Not responsible for data fetching.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic to create a cohesive user interface.
 */

@Component({
    selector: 'app-close-order-dialog',
    imports: [
        DialogLayoutComponent,
        ButtonComponent,
        TranslocoModule,
        MatIconModule,
        PageHeaderComponent,
        StackComponent,
    ],
    templateUrl: './close-order-dialog.component.html',
})
export class CloseOrderDialogComponent extends AbstractDialog<CloseOrderDialogVM> {
    public readonly response = output<CloseOrderDialogDialogResponse>();
    private readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    public override open(vm: CloseOrderDialogVM) {
        this.vm.set(vm);
        this.dialog().nativeElement.showModal();
    }
    protected override submit() {
        this.response.emit({ type: 'submit' });
        this.dialog().nativeElement.close();
    }

    protected override cancel() {
        this.response.emit({ type: 'cancel' });
        this.dialog().nativeElement.close();
    }
}
