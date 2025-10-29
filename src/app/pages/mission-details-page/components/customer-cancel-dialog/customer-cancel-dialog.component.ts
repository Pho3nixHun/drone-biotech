import { Component, inject } from '@angular/core';
import { DialogDirective } from '@directives/dialog/dialog.directive';
import { DialogComponent } from '@components/dialog/dialog.component';
import { ButtonComponent } from '@components/button/button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputTextareaComponent } from '@components/input-textarea/input-textarea.component';
import {
    CustomerCancelDialogResult,
    CustomerCancelDialogVM,
} from './customer-cancel-dialog.model';

@Component({
    selector: 'app-customer-cancel-dialog',
    imports: [
        DialogComponent,
        ButtonComponent,
        TranslocoModule,
        MatIconModule,
        PageHeaderComponent,
        InputTextareaComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './customer-cancel-dialog.component.html',
})
export class CustomerCancelDialogComponent extends DialogDirective<
    CustomerCancelDialogVM,
    CustomerCancelDialogResult
> {
    private readonly fb = inject(FormBuilder);

    protected readonly reasonControl = this.fb.control('');

    public override submit() {
        const value = this.reasonControl.value?.trim() ?? null;
        const reason = value?.length === 0 ? null : value;
        this.response.emit({ type: 'confirm', reason });
        this.myDialog().nativeElement.close();
    }

    public override open(vm: CustomerCancelDialogVM): void {
        this.vm.set(vm);
        this.myDialog().nativeElement.showModal();
    }
}
