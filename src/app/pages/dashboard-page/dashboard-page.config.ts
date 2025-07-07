import { EnvironmentProviders, InjectionToken, Provider } from '@angular/core';
import { DashboardPageConfig } from './dashboard-page.model';
import { dashboardPageConfig as config } from './dashboard-page.mock';

export const DASHBOARD_PAGE_CONFIG = new InjectionToken<DashboardPageConfig>(
    'Dashboard page config'
);

export const dashboardPageConfig: (Provider | EnvironmentProviders)[] = [
    {
        provide: DASHBOARD_PAGE_CONFIG,
        useValue: config,
    },
];
