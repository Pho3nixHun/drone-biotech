import { Routes } from '@angular/router';
import { AppRouteSegment } from './app-route-segment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
  },
  {
    path: AppRouteSegment.REGISTER,
    loadComponent: () =>
      import('./pages/register-page/register-page.component').then((m) => m.RegisterPageComponent),
  },
  {
    path: AppRouteSegment.LOGIN,
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then((m) => m.LoginPageComponent),
  },
  {
    path: AppRouteSegment.PRODUCT,
    loadChildren: () =>
      import('./pages/products-page/products-routing.module').then((m) => m.ProductsRoutingModule),
  },
];
