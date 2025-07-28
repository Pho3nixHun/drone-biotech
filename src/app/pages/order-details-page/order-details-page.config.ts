import { InjectionToken } from '@angular/core';
import { orderDetailsPageConfig as config } from './order-details-page.mock';
import { OrderDetailsPageConfig } from './order-details-page.model';
import {
    ACTIVE_MISSION_POLYGON_OPTIONS,
    COMPLETED_MISSION_POLYGON_OPTIONS,
} from 'src/app/shared/providers/google-maps-provider';
import { ConfigProvider } from '@interfaces/config-provider';

export const ORDER_DETAILS_PAGE_CONFIG =
    new InjectionToken<OrderDetailsPageConfig>('Order details page config');

export const orderDetailsPageConfig: ConfigProvider[] = [
    {
        provide: ORDER_DETAILS_PAGE_CONFIG,
        useValue: config,
    },
    {
        provide: ACTIVE_MISSION_POLYGON_OPTIONS,
        useValue: {
            clickable: false,
            draggable: false,
            editable: false,
            fillOpacity: 0.5,
            strokeColor: 'green',
            fillColor: 'green',
        },
    },
    {
        provide: COMPLETED_MISSION_POLYGON_OPTIONS,
        useValue: {
            clickable: false,
            draggable: false,
            editable: false,
            fillOpacity: 0.5,
            strokeColor: 'orange',
            fillColor: 'orange',
        },
    },
];
