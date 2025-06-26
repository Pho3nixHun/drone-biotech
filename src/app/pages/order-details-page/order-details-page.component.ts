import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { FrameComponent } from '@components/frame/frame.component';
import { StatusComponent } from '@components/status/status.component';
import { SummaryListComponent } from '@components/summary-list/summary-list.component';
import { SummaryComponent } from '@components/summary-list/components/summary/summary.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderDetailsPageService } from './order-details-page.service';
import { isTranslateInput } from './order-details-page.model';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';

@Component({
    selector: 'app-order-details-page',
    imports: [
        PageLayoutComponent,
        FrameComponent,
        HeaderComponent,
        TranslocoModule,
        StatusComponent,
        SummaryListComponent,
        SummaryComponent,
    ],
    templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent {
    private readonly orderDetailsPageService = inject(OrderDetailsPageService);

    protected readonly vm = toSignal(this.orderDetailsPageService.getVM());
    protected isTranslateInput = isTranslateInput;
}
