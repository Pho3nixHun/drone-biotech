import {
    ConfirmationDialogReason,
    ConfirmationDialogVM,
} from '@components/confirmation-dialog/confirmation-dialog.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject, signal } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from '@stores/auth/auth.selector';
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
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { DrawTargetAreasDirective } from '@components/google-map/directives/draw-target-areas/draw-target-areas.directive';
import { CardGroupComponent } from '@components/card-group/card-group.component';
import { CardGroupHeaderComponent } from '@components/card-group/components/card-group-header/card-group-header.component';
import { CardItemListComponent } from '@components/card-group/components/card-item-list/card-item-list.component';
import { CardItemComponent } from '@components/card-group/components/card-item-list/components/card-item/card-item.component';
import { CardItemContentComponent } from '@components/card-group/components/card-item-list/components/card-item/components/card-item-content/card-item-content.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { CardItemActionListComponent } from '@components/card-group/components/card-item-list/components/card-item/components/card-item-action-list/card-item-action-list.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ValueComponent } from '@components/value/value.component';
import { Status } from './order-details-page.model';
import { Avatar } from '@components/avatar/avatar.model';

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
        ReactiveFormsModule,
        NgClass,
        AvatarComponent,
        NgOptimizedImage,
        GoogleMapComponent,
        DrawTargetAreasDirective,
        ValueComponent,
        CardGroupComponent,
        CardGroupHeaderComponent,
        CardItemListComponent,
        CardItemComponent,
        CardItemContentComponent,
        KeyValueComponent,
        CardItemActionListComponent,
        RouterModule,
        MatIconModule,
    ],
    templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent {
    private readonly store = inject(Store);
    private readonly fb = inject(FormBuilder);
    private readonly dialogService = inject(DialogService);
    private readonly orderDetailsPageService = inject(OrderDetailsPageService);

    protected readonly vm = toSignal(this.orderDetailsPageService.getVM());

    protected readonly drawnPolygons = signal<google.maps.Polygon[] | null>(
        null
    );

    protected readonly messageFormControl = this.fb.control('', [
        Validators.required,
        emptyStringValidator(),
    ]);

    protected async onSendMessageClick() {
        const message = this.messageFormControl.value;

        if (this.messageFormControl.invalid || !message) return;

        const sender = await firstValueFrom(this.store.select(selectUser));

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

        if (reason.reasonType === 'cancel') return;
        return this.orderDetailsPageService.closeOrder();
    }

    protected readonly Status = Status;
    protected readonly Avatar = Avatar;
}
