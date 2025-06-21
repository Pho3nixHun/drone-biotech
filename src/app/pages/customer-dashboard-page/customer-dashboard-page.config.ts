import { Provider, EnvironmentProviders, InjectionToken } from '@angular/core';
import { CustomerDashboardPageConfig } from './customer-dashboard-page.model';
import { customerDashboardPageConfig as config } from './customer-dashboard-page.mock';

export const CUSTOMER_DASHBOARD_PAGE_CONFIG =
    new InjectionToken<CustomerDashboardPageConfig>(
        'Customer dashboard page config'
    );

export const customerDashboardPageConfig: (Provider | EnvironmentProviders)[] =
    [
        {
            provide: CUSTOMER_DASHBOARD_PAGE_CONFIG,
            useValue: config,
        },
    ];
