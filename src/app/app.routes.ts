import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing.page/landing.page.component').then((m) => m.LandingPageComponent),
  },

  {
    path: AppRouteSegment.PRODUCT + '/:id',
    loadComponent: () =>
      import('./pages/product-item.page/product-item.page.component').then(
        (m) => m.ProductItemPageComponent,
      ),
  },
];
