import {
    Component,
    ElementRef,
    inject,
    output,
    viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import { ButtonComponent } from '@components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TranslocoModule } from '@jsverse/transloco';
import { emptyStringValidator } from '@validators/empty-string.validator';
import {
    OfficeCancelDialogResult,
    OfficeCancelDialogVM,
} from './office-cancel-dialog.model';
import { AbstractDialog } from '@components/dialog-layout/classes/abstract-dialog.class';
import { DialogLayoutComponent } from '@components/dialog-layout/dialog-layout.component';
import { StackComponent } from '@components/stack/stack.component';

/**
 * OfficeCancelDialogComponent
 *
 * Type: Container (Dialog)
 *
 * Scope:
 * - Builds and renders a dialog that has its own business logic.
 * - With the dialog the user (always office) can cancel the existing order.
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
    selector: 'app-office-cancel-dialog',
    imports: [
        ButtonComponent,
        InputTextareaComponent,
        MatIconModule,
        PageHeaderComponent,
        TranslocoModule,
        ReactiveFormsModule,
        DialogLayoutComponent,
        StackComponent,
    ],
    templateUrl: './office-cancel-dialog.component.html',
})
export class OfficeCancelDialogComponent extends AbstractDialog<OfficeCancelDialogVM> {
    private readonly fb = inject(FormBuilder);
    public readonly response = output<OfficeCancelDialogResult>();
    protected readonly reasonControl = this.fb.control('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    private readonly myDialog =
        viewChild.required<ElementRef<HTMLDialogElement>>('myDialog');

    public override open(vm: OfficeCancelDialogVM) {
        this.vm.set(vm);
        this.myDialog().nativeElement.showModal();
    }

    protected override submit() {
        const value = this.reasonControl.value?.trim() ?? null;
        const reason = value?.length === 0 ? null : value;
        this.response.emit({ type: 'confirm', reason });
        this.myDialog().nativeElement.close();
    }

    protected override cancel() {
        this.myDialog().nativeElement.close();
    }
}
