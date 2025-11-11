import {
    Component,
    ElementRef,
    inject,
    output,
    viewChild,
} from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import { CustomerCancelDialogVM } from './customer-cancel-dialog.model';
import { AbstractDialog } from '@components/dialog-layout/classes/abstract-dialog.class';
import { OfficeCancelDialogResult } from '../office-cancel-dialog/office-cancel-dialog.model';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';

/**
 * CustomerCancelDialogComponent
 *
 * Type: Container (Dialog)
 *
 * Scope:
 * - Builds and renders a dialog that has its own business logic.
 * - With the dialog the user (always customer) can cancel the existing order.
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
    selector: 'app-customer-cancel-dialog',
    imports: [
        ButtonComponent,
        TranslocoModule,
        MatIconModule,
        PageHeaderComponent,
        InputTextareaComponent,
        ReactiveFormsModule,
        DialogLayoutComponent,
    ],
    templateUrl: './customer-cancel-dialog.component.html',
})
export class CustomerCancelDialogComponent extends AbstractDialog<CustomerCancelDialogVM> {
    private readonly fb = inject(FormBuilder);
    protected readonly reasonControl = this.fb.control('');
    public readonly response = output<OfficeCancelDialogResult>();

    private readonly dialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    public override open(vm: CustomerCancelDialogVM): void {
        this.vm.set(vm);
        this.dialog().nativeElement.showModal();
    }

    protected override submit() {
        const value = this.reasonControl.value?.trim() ?? null;
        const reason = value?.length === 0 ? null : value;
        this.response.emit({ type: 'confirm', reason });
        this.dialog().nativeElement.close();
    }

    protected override cancel() {
        this.dialog().nativeElement.close();
    }
}
