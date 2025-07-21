import { OrderService } from '@services/order/order.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { Message, OrderDetailsPageVM } from './order-details-page.model';
import {
    mapHeaderXVM,
    mapMessagesSectionCardXVM,
    mapOrderActionsSectionCardXVM,
    mapOrderDetailsSectionCardXVM,
    mapOrderOverviewSectionCardXVM,
} from './order-details-page.mapper';
import { closedOrder } from '@services/order/order.service.mock';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);

    private readonly order$ = this.orderService.getOrder();

    public getVM() {
        return this.vm$;
    }

    public closeOrder() {
        this.orderService.setOrder(closedOrder);
    }

    public sendMessage(message: Message) {
        this.orderService.setOrder({
            ...closedOrder,
            messages: [message, ...closedOrder.messages],
        });
    }

    private readonly vm$: Observable<OrderDetailsPageVM> = combineLatest([
        this.order$,
        of(this.config),
    ]).pipe(
        map(([order, config]) => ({
            ...config,
            headerXVM: mapHeaderXVM(config, order),
            overviewSectionCardXVM: mapOrderOverviewSectionCardXVM(
                config,
                order
            ),
            sectionCardXVMs: [
                mapOrderDetailsSectionCardXVM(config, order),
                mapOrderActionsSectionCardXVM(config, order),
                mapMessagesSectionCardXVM(config, order.messages),
            ],
        }))
    );
}
