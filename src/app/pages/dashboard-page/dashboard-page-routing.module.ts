import { RouterModule, Routes } from '@angular/router';
import { redirectGuard } from '@guards/dashboard-redirect-guards/dashboard-redirect.guard';
import { DashboardPageRouteSegment } from './dashboard-page-route-segment';
import { NgModule } from '@angular/core';
import { UserRole } from '@stores/auth/auth.model';

export const routes: Routes = [
    {
        path: '',
        data: {
            navigateToRoleDashboard: true,
        },
        canActivate: [redirectGuard],
        loadComponent: () =>
            import('./dashboard-page.component').then(
                (m) => m.DashboardPageComponent
            ),
        children: [
            {
                path: DashboardPageRouteSegment.CUSTOMER,
                data: {
                    allowedRole: UserRole.CUSTOMER,
                },
                loadComponent: () =>
                    import(
                        '../customer-dashboard-page/customer-dashboard-page.component'
                    ).then((m) => m.CustomerDashboardPageComponent),
            },
            {
                path: DashboardPageRouteSegment.OFFICE,
                data: {
                    allowedRole: UserRole.OFFICE,
                },
                loadComponent: () =>
                    import(
                        '../office-dashboard-page/office-dashboard-page.component'
                    ).then((m) => m.OfficeDashboardPageComponent),
            },
            {
                path: DashboardPageRouteSegment.PILOT,
                data: {
                    allowedRole: UserRole.PILOT,
                },
                loadComponent: () =>
                    import(
                        '../pilot-dashboard-page/pilot-dashboard-page.component'
                    ).then((m) => m.PilotDashboardPageComponent),
            },
        ],
    },
    {
        path: '**',
        loadComponent: () =>
            import('../not-found-page/not-found-page.component').then(
                (m) => m.NotFoundPageComponent
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
