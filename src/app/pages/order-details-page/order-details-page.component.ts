import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
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
import { InfoItemComponent } from '@components/info-panel/components/info-item-list/components/info-item/info-item.component';
import { ConfirmationDialogComponent } from '@components/confirmation-dialog/confirmation-dialog.component';
import {
    ConfirmationDialogReason,
    ConfirmationDialogVM,
} from '@components/confirmation-dialog/confirmation-dialog.model';
import { OrderDetailsPageService } from './order-details-page.service';
import { isTranslateInput } from './order-details-page.model';

@Component({
    selector: 'app-order-details-page',
    imports: [
        PageLayoutComponent,
        HeaderComponent,
        TranslocoModule,
        StatusComponent,
        SummaryListComponent,
        SummaryComponent,
        SectionCardComponent,
        InfoPanelComponent,
        InfoItemListComponent,
        InfoItemComponent,
        NgTemplateOutlet,
        NgClass,
    ],
    templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent {
    private readonly orderDetailsPageService = inject(OrderDetailsPageService);
    private readonly dialogService = inject(DialogService);

    protected readonly vm = toSignal(this.orderDetailsPageService.getVM());

    protected async openConfirmationDialog(vm: ConfirmationDialogVM) {
        const reason: ConfirmationDialogReason = await firstValueFrom(
            this.dialogService.create(vm, ConfirmationDialogComponent).result$
        );

        if (reason.reasonType === 'submit')
            return this.orderDetailsPageService.closeOrder();
    }

    protected readonly isTranslateInput = isTranslateInput;
}
