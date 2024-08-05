import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,

    /*loadChildren: () => import('./product/product.component').then((m) => m.ProductComponent),*/
  },
];
