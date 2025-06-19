import {
    redirectChildGuard,
    redirectGuard,
} from '@guards/dashboard-redirect-guards/dashboard-redirect.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageRouteSegment } from './dashboard-page-route-segment';

export const routes: Routes = [
    {
        path: '',
        canActivate: [redirectGuard],
        canActivateChild: [redirectChildGuard],
        loadComponent: () =>
            import('./dashboard-page.component').then(
                (m) => m.DashboardPageComponent
            ),
        children: [
            {
                path: DashboardPageRouteSegment.CUSTOMER,
                loadComponent: () =>
                    import(
                        '../customer-dashboard-page/customer-dashboard-page.component'
                    ).then((m) => m.CustomerDashboardPageComponent),
            },
            {
                path: DashboardPageRouteSegment.OFFICE,
                loadComponent: () =>
                    import(
                        '../office-dashboard-page/office-dashboard-page.component'
                    ).then((m) => m.OfficeDashboardPageComponent),
            },
            {
                path: DashboardPageRouteSegment.PILOT,
                loadComponent: () =>
                    import(
                        '../pilot-dashboard-page/pilot-dashboard-page.component'
                    ).then((m) => m.PilotDashboardPageComponent),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
