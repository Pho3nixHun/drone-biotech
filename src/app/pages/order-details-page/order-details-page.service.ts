import { inject, Injectable } from '@angular/core';
import { OrderService } from '@services/order/order.service';
import { map, Observable } from 'rxjs';
import {
    mapOrderStatusToStatusToCSSStyles,
    mapOrderStatusToTranslocoTextKey,
    OrderDetailsPageVM,
} from './order-details-page.model';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);
    private readonly order$ = this.orderService.getOrder();
    public getVM = () => this.vm$;

    private readonly vm$: Observable<OrderDetailsPageVM> = this.order$.pipe(
        map((order) => ({
            ...this.config,
            headerXVM: {
                ...this.config.headerConfig,
                id: order.id,
                creationDate: order.creationDate,
                client: order.client,
                totalAreaInHa: order.totalAreaInHa,

                statusXVM: {
                    styles: mapOrderStatusToStatusToCSSStyles(order.status),
                    statusTextKey: mapOrderStatusToTranslocoTextKey(
                        order.status
                    ),
                },
                summaryXVMs: [
                    {
                        textKey: this.config.headerConfig.clientTextKey,
                        value: order.client.client,
                    },
                    {
                        textKey: this.config.headerConfig.createdDateTextKey,
                        value: {
                            key: this.config.headerConfig.createdDateValueKey,
                            params: { date: order.creationDate },

                        },
                    },
                    {
                        textKey: this.config.headerConfig.totalAreaTextKey,
                        value: {
                            key: this.config.headerConfig.totalAreaValueKey,
                            params: { area: order.totalAreaInHa },

                        },
                    },
                ],
            },
        }))
    );
}
