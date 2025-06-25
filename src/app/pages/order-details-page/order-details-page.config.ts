import { EnvironmentProviders, InjectionToken, Provider } from '@angular/core';
import { orderDetailsPageConfig as config } from './order-details-page.mock';
import { OrderDetailsPageConfig } from './order-details-page.model';

export const ORDER_DETAILS_PAGE_CONFIG =
    new InjectionToken<OrderDetailsPageConfig>('Order details page config');

export const orderDetailsPageConfig: (Provider | EnvironmentProviders)[] = [
    {
        provide: ORDER_DETAILS_PAGE_CONFIG,
        useValue: config,
    },
];
