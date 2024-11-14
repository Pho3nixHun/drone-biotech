import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';
import { LoginGuard } from './shared/guards/login/login.guard';
import { AuthGuard } from './shared/guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: AppRouteSegment.LANDING,
        canActivate: [AuthGuard],
        loadComponent: () =>
            import('./pages/landing-page/landing-page.component').then(
                (m) => m.LandingPageComponent
            ),
    },
    {
        path: AppRouteSegment.LOGIN,
        canActivate: [LoginGuard],
        loadComponent: () =>
            import('./pages/login-page/login-page.component').then(
                (m) => m.LoginPageComponent
            ),
    },
    {
        path: AppRouteSegment.PRODUCT,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./pages/products-page/products-routing.module').then(
                (m) => m.ProductsRoutingModule
            ),
    },
    {
        path: '**',
        canActivate: [AuthGuard],
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page.component').then(
                (m) => m.NotFoundPageComponent
            ),
    },
];
