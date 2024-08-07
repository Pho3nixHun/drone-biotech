import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
  {
    path: AppRouteSegment.ROOT,
    loadComponent: () =>
      import('./pages/landing/landing.page.component').then((m) => m.LandingPageComponent),
  },
  {
    path: AppRouteSegment.PRODUCT,
    loadComponent: () =>
      import('./shared/components/product/product.component').then((m) => m.ProductComponent),
  },
];
