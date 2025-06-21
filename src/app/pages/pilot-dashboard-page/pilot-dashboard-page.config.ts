import { Provider, EnvironmentProviders, InjectionToken } from '@angular/core';
import { pilotDashboardPageConfig as config } from './pilot-dashboard-page.mock';
import { PilotDashboardPageConfig } from './pilot-dashboard-page.model';

export const PILOT_DASHBOARD_PAGE_CONFIG =
    new InjectionToken<PilotDashboardPageConfig>('Pilot dashboard page config');

export const pilotDashboardPageConfig: (Provider | EnvironmentProviders)[] = [
    {
        provide: PILOT_DASHBOARD_PAGE_CONFIG,
        useValue: config,
    },
];
