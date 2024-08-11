import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
  {
    path: AppRouteSegment.ROOT,
    loadComponent: () =>
      import('./pages/landing-page/landing.page.component').then((m) => m.LandingPageComponent),
  },
  {
    path: AppRouteSegment.PRODUCT + '/' + AppRouteSegment.ID,
    loadComponent: () =>
      import('./pages/product-page/product-page.component').then((m) => m.ProductPageComponent),
  },
];
