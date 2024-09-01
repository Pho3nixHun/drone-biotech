import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
  },

  {
    path: AppRouteSegment.PRODUCT,
    loadChildren: () =>
      import('./pages/product-item-page/product-routing.module').then(
        (m) => m.ProductRoutingModule,
      ),
  },
];
