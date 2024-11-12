import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
    {
        path: AppRouteSegment.LANDING,
        loadComponent: () =>
            import('./pages/landing-page/landing-page.component').then(
                (m) => m.LandingPageComponent
            ),
    },

    {
        path: AppRouteSegment.PRODUCT,
        loadChildren: () =>
            import('./pages/products-page/products-routing.module').then(
                (m) => m.ProductsRoutingModule
            ),
    },
];
