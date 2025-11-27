import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { MissionDetailsPageService } from './mission-details-page.service';
import { FrameComponent } from '@components/frame/frame.component';
import { GmpMapComponent } from '@components/gmp-map/gmp-map.component';
import { GmpPolygonDrawingDirective } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.directive';
import { GmpAdvancedMarkerDirective } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TranslocoModule } from '@jsverse/transloco';
import { BadgeComponent } from '@components/badge/badge.component';
import { KeyComponent } from '@components/key/key.component';
import { ValueComponent } from '@components/value/value.component';
import { StackComponent } from '@components/stack/stack.component';
import { ButtonComponent } from '@components/button/button.component';
import { DashboardPageRoutingModule } from '../dashboard-page/dashboard-page-routing.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextComponent } from '@components/input-text/input-text.component';
import { MatIconModule } from '@angular/material/icon';
import { MessageComponent } from '@components/message/message.component';
import { AvatarComponent } from '@components/avatar/avatar.component';
import {
    mapMissionStatusToBadgeIntent,
    mapMissionStatusToTranslocoTextKey,
    mapRoleToTranslocoTextKey,
} from './mission-details-page.mapper';
import { CustomerCancelDialogComponent } from './components/customer-cancel-dialog/customer-cancel-dialog.component';
import { OfficeCancelDialogComponent } from './components/office-cancel-dialog/office-cancel-dialog.component';
import { emptyStringValidator } from '@validators/empty-string.validator';
import { ChatBubbleComponent } from '@components/chat-bubble/chat-bubble.component';

@Component({
    selector: 'app-mission-details-page',
    imports: [
        PageLayoutComponent,
        FrameComponent,
        GmpMapComponent,
        GmpPolygonDrawingDirective,
        GmpAdvancedMarkerDirective,
        PageHeaderComponent,
        TranslocoModule,
        BadgeComponent,
        KeyComponent,
        ValueComponent,
        StackComponent,
        ButtonComponent,
        DashboardPageRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        InputTextComponent,
        MatIconModule,
        MessageComponent,
        AvatarComponent,
        CustomerCancelDialogComponent,
        NgTemplateOutlet,
        OfficeCancelDialogComponent,
        NgClass,
        ChatBubbleComponent,
    ],
    templateUrl: './mission-details-page.component.html',
})
export class MissionDetailsPageComponent {
    protected readonly service = inject(MissionDetailsPageService);
    private readonly fb = inject(FormBuilder);
    protected readonly vm = this.service.getVM();

    protected readonly messageControl = this.fb.control('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    protected sendMessage() {
        const { value } = this.messageControl;
        const vm = this.vm();
        if (!value || this.messageControl.invalid || !vm?.user) return;

        this.service.sendMessage({
            message: value,
            sender: vm.user,
            sendingDate: new Date(),
        });
        this.messageControl.reset();
    }

    protected readonly mapMissionStatusToTranslocoTextKey =
        mapMissionStatusToTranslocoTextKey;
    protected readonly mapMissionStatusToBadgeIntent =
        mapMissionStatusToBadgeIntent;
    protected readonly mapRoleToTranslocoTextKey = mapRoleToTranslocoTextKey;
}
