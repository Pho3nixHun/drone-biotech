import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';
import { LoginGuard } from '@guards/login/login.guard';
import { AuthGuard } from '@guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: AppRouteSegment.LANDING,
        canActivate: [AuthGuard],
        loadComponent: () =>
            import('./pages/landing-page/landing-page.component').then(
                (m) => m.LandingPageComponent
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: AppRouteSegment.LOGIN,
        canActivate: [LoginGuard],
        loadComponent: () =>
            import('./pages/login-page/login-page.component').then(
                (m) => m.LoginPageComponent
            ),
        data: { headerCanBeShown: false },
    },
    {
        path: AppRouteSegment.PRODUCT,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./pages/products-page/products-routing.module').then(
                (m) => m.ProductsRoutingModule
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: AppRouteSegment.ORDERS,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./pages/orders-new-page/orders-routing.module').then(
                (m) => m.OrdersRoutingModule
            ),
        data: { headerCanBeShown: true },
    },
    {
        path: '**',
        canActivate: [AuthGuard],
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page.component').then(
                (m) => m.NotFoundPageComponent
            ),
        data: { headerCanBeShown: true },
    },
];
