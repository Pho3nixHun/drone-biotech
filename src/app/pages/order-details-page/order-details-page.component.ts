import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { NgClass, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { DialogService } from '@services/dialog/dialog.service';
import { SummaryListComponent } from '@components/summary-list/summary-list.component';
import { StatusComponent } from '@components/status/status.component';
import { SummaryComponent } from '@components/summary-list/components/summary/summary.component';
import { HeaderComponent } from './components/header/header.component';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { SectionCardComponent } from '@components/section-card/section-card.component';
import { InfoPanelComponent } from '@components/info-panel/info-panel.component';
import { InfoItemListComponent } from '@components/info-panel/components/info-item-list/info-item-list.component';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { InfoItemComponent } from '@components/info-panel/components/info-item-list/components/info-item/info-item.component';
import { ConfirmationDialogComponent } from '@components/confirmation-dialog/confirmation-dialog.component';
import { MessageItemListComponent } from '@components/message-item-list/message-item-list.component';
import { MessageItemComponent } from '@components/message-item/message-item.component';
import { emptyStringValidator } from '@utils/empty-string.validator';
import { OrderDetailsPageService } from './order-details-page.service';
import {
    ConfirmationDialogReason,
    ConfirmationDialogVM,
} from '@components/confirmation-dialog/confirmation-dialog.model';
import { AuthStore } from '@stores/auth/auth.store';

@Component({
    selector: 'app-order-details-page',
    imports: [
        PageLayoutComponent,
        HeaderComponent,
        TranslocoModule,
        MessageItemListComponent,
        MessageItemComponent,
        StatusComponent,
        SummaryListComponent,
        SummaryComponent,
        SectionCardComponent,
        InfoPanelComponent,
        InfoItemListComponent,
        InfoItemComponent,
        NgTemplateOutlet,
        ReactiveFormsModule,
        NgClass,
        AvatarComponent,
        NgOptimizedImage,
        NgClass,
    ],
    templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent {
    private readonly fb = inject(FormBuilder);
    private readonly dialogService = inject(DialogService);
    private readonly orderDetailsPageService = inject(OrderDetailsPageService);
    private readonly store = inject(AuthStore);

    protected readonly vm = toSignal(this.orderDetailsPageService.getVM());

    protected readonly messageFormControl = this.fb.control('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    protected async onSendMessageClick() {
        if (this.messageFormControl.invalid) return;

        const message = this.messageFormControl.value;

        if (!message) return;

        const sender = this.store.user();
        if (!sender) return;

        this.orderDetailsPageService.sendMessage({
            sendingDate: new Date(),
            message,
            sender: {
                role: sender.role,
                name: sender.displayName,
                photoUrl: sender.photoURL,
            },
        });

        this.messageFormControl.reset();
    }

    protected async openConfirmationDialog(vm: ConfirmationDialogVM) {
        const reason: ConfirmationDialogReason = await firstValueFrom(
            this.dialogService.create(vm, ConfirmationDialogComponent).result$
        );

        if (reason.reasonType === 'submit')
            return this.orderDetailsPageService.closeOrder();
    }
}
