import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { OrderService } from '@services/order/order.service';
import {
    CompanyOrderXVM,
    CustomerDashboardPageVM,
    GridXVM,
    mapOrderStatusTypeToCCSColors,
    mapOrderStatusTypeToTranslocoTextKey,
    MyOrderXVM,
} from './customer-dashboard-page.model';
import { CUSTOMER_DASHBOARD_PAGE_CONFIG } from './customer-dashboard-page.config';
import { AuthStore } from '@stores/auth/auth.store';

@Injectable({
    providedIn: 'root',
})
export class CustomerDashboardPageService {
    private readonly store = inject(AuthStore);
    private readonly orderService = inject(OrderService);

    private readonly config = inject(CUSTOMER_DASHBOARD_PAGE_CONFIG);
    private readonly userName$ = of(this.store.user.name);

    private readonly myOrders$ = this.userName$.pipe(
        switchMap((name) =>
            name ? this.orderService.getOrdersByName(name) : of(null)
        )
    );
    private readonly companyOrders$ = this.userName$.pipe(
        switchMap((name) => this.orderService.getCompanyOrders(name))
    );

    public getVM = (): Observable<CustomerDashboardPageVM | null> => this.vm$;

    private readonly myOrderXVMs$: Observable<MyOrderXVM[] | null> =
        this.myOrders$.pipe(
            map((orders) =>
                orders
                    ? orders.map((order) => ({
                          ...order,
                          idKV: {
                              key: this.config.ordersConfig.id.titleKey,
                              value: order.id,
                          },

                          statusKV: {
                              key: this.config.ordersConfig.status.titleKey,
                              value: order.status,
                          },
                          totalAreaInHaKV: {
                              key: this.config.ordersConfig.areaInHa.titleKey,
                              value: order.totalAreaInHa,
                          },
                          moneyValueKV: {
                              key: this.config.ordersConfig.moneyValue.titleKey,
                              value: order.moneyValue,
                              valueKey:
                                  this.config.ordersConfig.moneyValue.valueKey,
                          },
                          creationDateKV: {
                              key: this.config.ordersConfig.creationDate
                                  .titleKey,
                              value: order.creationDate,
                              valueKey:
                                  this.config.ordersConfig.creationDate
                                      .valueKey,
                          },
                          badgeKV: {
                              key: this.config.ordersConfig.status.titleKey,
                              value: {
                                  textKey: mapOrderStatusTypeToTranslocoTextKey(
                                      order.status
                                  ),
                                  color: mapOrderStatusTypeToCCSColors(
                                      order.status
                                  ),
                              },
                          },
                          navigationAnchor: this.config.ordersConfig.action,
                      }))
                    : null
            )
        );

    private readonly companyOrderXVMs$: Observable<CompanyOrderXVM[] | null> =
        this.companyOrders$.pipe(
            map((orders) =>
                orders
                    ? orders.map((order) => ({
                          ...order,
                          idKV: {
                              key: this.config.ordersConfig.id.titleKey,
                              value: order.id,
                          },

                          statusKV: {
                              key: this.config.ordersConfig.status.titleKey,
                              value: order.status,
                          },
                          totalAreaInHaKV: {
                              key: this.config.ordersConfig.areaInHa.titleKey,
                              value: order.totalAreaInHa,
                          },
                          moneyValueKV: {
                              key: this.config.ordersConfig.moneyValue.titleKey,
                              value: order.moneyValue,
                              valueKey:
                                  this.config.ordersConfig.moneyValue.valueKey,
                          },
                          creationDateKV: {
                              key: this.config.ordersConfig.creationDate
                                  .titleKey,
                              value: order.creationDate,
                              valueKey:
                                  this.config.ordersConfig.creationDate
                                      .valueKey,
                          },
                          badgeKV: {
                              key: this.config.ordersConfig.status.titleKey,
                              value: {
                                  textKey: mapOrderStatusTypeToTranslocoTextKey(
                                      order.status
                                  ),
                                  color: mapOrderStatusTypeToCCSColors(
                                      order.status
                                  ),
                              },
                          },
                          requesterKV: {
                              key: this.config.ordersConfig.requester.titleKey,
                              value: order.client.contact,
                          },
                      }))
                    : null
            )
        );

    private readonly gridXVMs$: Observable<GridXVM[] | null> = combineLatest([
        this.myOrderXVMs$,
        this.companyOrderXVMs$,
    ]).pipe(
        map(([myOrders, companyOrders]) =>
            myOrders && companyOrders
                ? [
                      {
                          ...this.config.myOrdersGridConfig,
                          orderXVMs: myOrders,
                      },
                      {
                          ...this.config.companyOrdersGridConfig,
                          orderXVMs: companyOrders,
                      },
                  ].filter((section) => section.orderXVMs.length > 0)
                : null
        )
    );

    private readonly vm$: Observable<CustomerDashboardPageVM | null> =
        this.gridXVMs$.pipe(
            map((gridXVMs) => (gridXVMs ? { gridXVMs } : null))
        );
}
