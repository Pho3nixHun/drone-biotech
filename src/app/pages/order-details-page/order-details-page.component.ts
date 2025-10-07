import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { emptyStringValidator } from 'src/app/shared/validators/empty-string.validator';
import { OrderDetailsPageService } from './order-details-page.service';
import { ButtonComponent } from '@components/button/button.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from '@components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogResponse } from '@components/confirmation-dialog/confirmation-dialog.model';
import { BadgeComponent } from '@components/badge/badge.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { FrameComponent } from '@components/frame/frame.component';
import { MessageComponent } from '@components/message/message.component';
import { InputTextComponent } from '@components/input-text/input-text.component';
import {
    mapOrderStatusToTranslocoTextKey,
    mapRoleToTranslocoTextKey,
} from './order-details-page.mapper';

@Component({
    selector: 'app-order-details-page',
    imports: [
        PageLayoutComponent,
        TranslocoModule,
        ReactiveFormsModule,
        AvatarComponent,
        ButtonComponent,
        RouterModule,
        MatIconModule,
        ConfirmationDialogComponent,
        BadgeComponent,
        NgClass,
        PageHeaderComponent,
        FrameComponent,
        MessageComponent,
        InputTextComponent,
    ],
    templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent {
    private readonly fb = inject(FormBuilder);
    private readonly service = inject(OrderDetailsPageService);

    protected readonly vm = this.service.getVM();

    protected readonly messageControl = this.fb.control('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    protected sendMessage() {
        const message = this.messageControl.value;
        const sender = this.vm()?.user;
        if (this.messageControl.invalid || !message || !sender) return;

        this.service.sendMessage({
            sendingDate: new Date(),
            message,
            sender,
        });

        this.messageControl.reset();
    }

    protected onConfirmationDialogResponse(
        response: ConfirmationDialogResponse
    ) {
        if (response.type === 'submit') this.service.closeOrder();
    }

    protected readonly mapRoleToTranslocoTextKey = mapRoleToTranslocoTextKey;
    protected readonly mapOrderStatusToTranslocoTextKey =
        mapOrderStatusToTranslocoTextKey;
}
