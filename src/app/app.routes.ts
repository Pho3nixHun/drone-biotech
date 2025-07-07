import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';
import { authenticatedUserGuard } from '@guards/authenticated-user/authenticated-user.guard';
import { guestOnlyGuard } from '@guards/guest-only/guest-only.guard';

export const routes: Routes = [
    {
        path: AppRouteSegment.LANDING,
        loadComponent: () =>
            import('./pages/landing-page/landing-page.component').then(
                (m) => m.LandingPageComponent
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: AppRouteSegment.LOGIN,
        canActivate: [guestOnlyGuard],
        loadComponent: () =>
            import('./pages/login-page/login-page.component').then(
                (m) => m.LoginPageComponent
            ),
        data: { headerCanBeShown: false },
    },
    {
        path: AppRouteSegment.PRODUCT,
        loadChildren: () =>
            import('./pages/products-page/products-routing.module').then(
                (m) => m.ProductsRoutingModule
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: AppRouteSegment.ORDERS,
        canActivate: [authenticatedUserGuard],
        loadChildren: () =>
            import('./pages/orders-new-page/orders-routing.module').then(
                (m) => m.OrdersRoutingModule
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: AppRouteSegment.DASHBOARD,
        canActivate: [authenticatedUserGuard],
        loadChildren: () =>
            import('./pages/dashboard-page/dashboard-page-routing.module').then(
                (m) => m.DashboardPageRoutingModule
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page.component').then(
                (m) => m.NotFoundPageComponent
            ),
        data: { headerCanBeShown: true },
    },
];
