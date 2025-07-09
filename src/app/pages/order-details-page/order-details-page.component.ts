import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { StatusComponent } from '@components/status/status.component';
import { SummaryListComponent } from '@components/summary-list/summary-list.component';
import { SummaryComponent } from '@components/summary-list/components/summary/summary.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderDetailsPageService } from './order-details-page.service';
import { isTranslateInput } from './order-details-page.model';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { SectionCardComponent } from '@components/section-card/section-card.component';
import { InfoPanelComponent } from '@components/info-panel/info-panel.component';
import { InfoItemListComponent } from '@components/info-panel/components/info-item-list/info-item-list.component';
import { InfoItemComponent } from '@components/info-panel/components/info-item-list/components/info-item/info-item.component';
import { NgTemplateOutlet } from '@angular/common';

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
    ],
    templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent {
    private readonly orderDetailsPageService = inject(OrderDetailsPageService);

    protected readonly vm = toSignal(this.orderDetailsPageService.getVM());
    protected readonly isTranslateInput = isTranslateInput;
}
