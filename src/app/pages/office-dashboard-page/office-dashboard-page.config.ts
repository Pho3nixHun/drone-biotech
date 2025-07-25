import { InjectionToken } from '@angular/core';
import { officeDashboardPageConfig as config } from './office-dashboard-page.mock';
import { OfficeDashboardPageConfig } from './office-dashboard-page.model';
import { ConfigProvider } from '@interfaces/config-provider';

export const OFFICE_DASHBOARD_PAGE_CONFIG =
    new InjectionToken<OfficeDashboardPageConfig>(
        'Office dashboard page config'
    );

export const officeDashboardPageConfig: ConfigProvider[] = [
    {
        provide: OFFICE_DASHBOARD_PAGE_CONFIG,
        useValue: config,
    },
];
