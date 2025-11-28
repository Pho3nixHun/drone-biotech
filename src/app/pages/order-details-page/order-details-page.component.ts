import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { AvatarComponent } from '@components/avatar/avatar.component';
import { emptyStringValidator } from 'src/app/shared/validators/empty-string.validator';
import { OrderDetailsPageService } from './order-details-page.service';
import { ButtonComponent } from '@components/button/button.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BadgeComponent } from '@components/badge/badge.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { FrameComponent } from '@components/frame/frame.component';
import { MessageComponent } from '@components/message/message.component';
import { InputTextComponent } from '@components/input-text/input-text.component';
import {
    mapMissionStatusToBadgeIntent,
    mapMissionStatusToTranslocoTextKey,
    mapOrderStatusToBadgeIntent,
    mapOrderStatusToTranslocoTextKey,
    mapRoleToTranslocoTextKey,
} from './order-details-page.mapper';
import { ValueComponent } from '@components/value/value.component';
import { KeyComponent } from '@components/key/key.component';
import { CardComponent } from '@components/card/card.component';
import { CardBodyComponent } from '@components/card/components/card-body/card-body.component';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import { GmpPolygonDrawingDirective } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.directive';
import { GmpAdvancedMarkerDirective } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { StackComponent } from '@components/stack/stack.component';
import { CloseOrderDialogDialogResponse } from './components/close-order-dialog/close-order-dialog.model';
import { CloseOrderDialogComponent } from './components/close-order-dialog/close-order-dialog.component';
import { ClusterComponent } from '@components/cluster/cluster.component';
import { ChatBubbleComponent } from '@components/chat-bubble/chat-bubble.component';
import { isMissionCardXVM } from './order-details-page.model';

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
        BadgeComponent,
        NgClass,
        PageHeaderComponent,
        FrameComponent,
        MessageComponent,
        InputTextComponent,
        ValueComponent,
        KeyComponent,
        CardComponent,
        CardBodyComponent,
        GmpMapComponent,
        GmpPolygonDrawingDirective,
        GmpAdvancedMarkerDirective,
        StackComponent,
        NgTemplateOutlet,
        CloseOrderDialogComponent,
        ClusterComponent,
        ChatBubbleComponent,
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

    protected onCloseOrderDialogResponse(
        response: CloseOrderDialogDialogResponse
    ) {
        if (response.type === 'submit') this.service.closeOrder();
    }
    protected readonly mapRoleToTranslocoTextKey = mapRoleToTranslocoTextKey;
    protected readonly mapMissionStatusToTranslocoTextKey =
        mapMissionStatusToTranslocoTextKey;
    protected readonly mapOrderStatusToBadgeIntent =
        mapOrderStatusToBadgeIntent;
    protected readonly mapMissionStatusToBadgeIntent =
        mapMissionStatusToBadgeIntent;
    protected readonly mapOrderStatusToTranslocoTextKey =
        mapOrderStatusToTranslocoTextKey;
    protected readonly isMissionCardXVM = isMissionCardXVM;
}
