import { Provider, EnvironmentProviders, InjectionToken } from '@angular/core';
import { officeDashboardPageConfig as config } from './office-dashboard-page.mock';
import { OfficeDashboardPageConfig } from './office-dashboard-page.model';

export const OFFICE_DASHBOARD_PAGE_CONFIG =
    new InjectionToken<OfficeDashboardPageConfig>(
        'Office dashboard page config'
    );

export const officeDashboardPageConfig: (Provider | EnvironmentProviders)[] = [
    {
        provide: OFFICE_DASHBOARD_PAGE_CONFIG,
        useValue: config,
    },
];
