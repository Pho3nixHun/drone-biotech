import { inject, Injectable } from '@angular/core';
import { combineLatest, concat, map, Observable, of, Subject } from 'rxjs';
import { OrderService } from '@services/order/order.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import {
    mapHeaderXVM,
    mapOrderActionsSectionCardXVM,
    mapOrderDetailsSectionCardXVM,
    OrderDetailsPageVM,
    OrderStatus,
} from './order-details-page.model';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    private readonly config = inject(ORDER_DETAILS_PAGE_CONFIG);
    private readonly orderService = inject(OrderService);
    private readonly order$ = this.orderService.getOrder();
    private readonly statusSubject = new Subject<OrderStatus>();

    private readonly status$ = concat(
        this.order$.pipe(map((order) => order.status)),
        this.statusSubject
    );

    private readonly addMissionButtonVisibility$ = this.status$.pipe(
        map((status) => status !== 'completed')
    );

    private readonly closeOrderButtonIsDisabled$ = this.status$.pipe(
        map((status) => status === 'completed')
    );

    public getVM() {
        return this.vm$;
    }

    public closeOrder() {
        this.statusSubject.next('completed');
    }

    private readonly vm$: Observable<OrderDetailsPageVM> = combineLatest([
        this.order$,
        this.status$,
        this.addMissionButtonVisibility$,
        this.closeOrderButtonIsDisabled$,
        of(this.config),
    ]).pipe(
        map(
            ([
                order,
                status,
                addMissionButtonVisibility,
                closeOrderButtonIsDisabled,
                config,
            ]) => ({
                ...config,
                headerXVM: mapHeaderXVM(
                    config,
                    order,
                    status,
                    addMissionButtonVisibility
                ),
                sectionCardXVMs: [
                    mapOrderDetailsSectionCardXVM(config, order),
                    mapOrderActionsSectionCardXVM(
                        config,
                        closeOrderButtonIsDisabled
                    ),
                ],
            })
        )
    );
}
