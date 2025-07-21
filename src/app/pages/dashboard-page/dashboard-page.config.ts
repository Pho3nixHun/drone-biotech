import { InjectionToken } from '@angular/core';
import { DashboardPageConfig } from './dashboard-page.model';
import { dashboardPageConfig as config } from './dashboard-page.mock';
import { ConfigProvider } from '@interfaces/config-provider';

export const DASHBOARD_PAGE_CONFIG = new InjectionToken<DashboardPageConfig>(
    'Dashboard page config'
);

export const dashboardPageConfig: ConfigProvider[] = [
    {
        provide: DASHBOARD_PAGE_CONFIG,
        useValue: config,
    },
];
