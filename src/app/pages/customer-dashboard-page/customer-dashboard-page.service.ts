import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { OrderService } from '@services/order/order.service';
import { SummaryService } from '@services/summary/summary.service';
import { customerDashboardPageConfig as config } from './customer-dashboard-page.mock';
import {
    CompanyOrderXVM,
    CustomerDashboardPageVM,
    GridXVM,
    mapOrderStatusTypeToCCSColors,
    mapOrderStatusTypeToTranslocoTextKey,
    MyOrderXVM,
} from './customer-dashboard-page.model';

@Injectable({
    providedIn: 'root',
})
export class CustomerDashboardPageService {
    private readonly orderService = inject(OrderService);
    private readonly summaryService = inject(SummaryService);

    private readonly orders$ = this.orderService.getOrders();
    private readonly filteredSummaryXVMs$ =
        this.summaryService.getSummaries('customer');

    public getVM = (): Observable<CustomerDashboardPageVM> => this.vm$;

    private readonly myOrders$: Observable<MyOrderXVM[]> = this.orders$.pipe(
        map((orders) =>
            orders.map((order) => ({
                ...order,
                idKV: {
                    key: config.ordersConfig.id.titleKey,
                    value: order.id,
                },

                statusKV: {
                    key: config.ordersConfig.status.titleKey,
                    value: order.status,
                },
                totalAreaInHaKV: {
                    key: config.ordersConfig.areaInHa.titleKey,
                    value: order.totalAreaInHa,
                },
                moneyValueKV: {
                    key: config.ordersConfig.moneyValue.titleKey,
                    value: order.moneyValue,
                    valueKey: config.ordersConfig.moneyValue.valueKey,
                },
                creationDateKV: {
                    key: config.ordersConfig.creationDate.titleKey,
                    value: order.creationDate,
                    valueKey: config.ordersConfig.creationDate.valueKey,
                },
                badgeKV: {
                    key: config.ordersConfig.status.titleKey,
                    value: {
                        textKey: mapOrderStatusTypeToTranslocoTextKey(
                            order.status
                        ),
                        color: mapOrderStatusTypeToCCSColors(order.status),
                    },
                },
                navigationAnchor: config.ordersConfig.action,
            }))
        )
    );

    private readonly companyOrders$: Observable<CompanyOrderXVM[]> =
        this.orders$.pipe(
            map((orders) =>
                orders.map((order) => ({
                    ...order,
                    idKV: {
                        key: config.ordersConfig.id.titleKey,
                        value: order.id,
                    },

                    statusKV: {
                        key: config.ordersConfig.status.titleKey,
                        value: order.status,
                    },
                    totalAreaInHaKV: {
                        key: config.ordersConfig.areaInHa.titleKey,
                        value: order.totalAreaInHa,
                    },
                    moneyValueKV: {
                        key: config.ordersConfig.moneyValue.titleKey,
                        value: order.moneyValue,
                        valueKey: config.ordersConfig.moneyValue.valueKey,
                    },
                    creationDateKV: {
                        key: config.ordersConfig.creationDate.titleKey,
                        value: order.creationDate,
                        valueKey: config.ordersConfig.creationDate.valueKey,
                    },
                    badgeKV: {
                        key: config.ordersConfig.status.titleKey,
                        value: {
                            textKey: mapOrderStatusTypeToTranslocoTextKey(
                                order.status
                            ),
                            color: mapOrderStatusTypeToCCSColors(order.status),
                        },
                    },
                    requesterKV: {
                        key: config.ordersConfig.requester.titleKey,
                        value: order.requester,
                    },
                }))
            )
        );

    private readonly gridXVMs$: Observable<GridXVM[]> = combineLatest([
        this.myOrders$,
        this.companyOrders$,
    ]).pipe(
        map(([myOrders, companyOrders]) =>
            [
                {
                    ...config.myOrdersGridConfig,
                    orderXVMs: myOrders,
                },
                {
                    ...config.companyOrdersGridConfig,
                    orderXVMs: companyOrders,
                },
            ].filter((section) => section.orderXVMs.length > 0)
        )
    );

    private readonly vm$: Observable<CustomerDashboardPageVM> = combineLatest([
        this.gridXVMs$,
        this.filteredSummaryXVMs$,
    ]).pipe(map(([gridXVMs, summaryXVMs]) => ({ gridXVMs, summaryXVMs })));
}
