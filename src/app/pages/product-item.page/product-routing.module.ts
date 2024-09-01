import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductItemPageComponent } from './product-item.page.component';

export const routes: Routes = [
  { path: '', component: ProductItemPageComponent }, // /products/ route
  { path: ':id', component: ProductItemPageComponent }, // /products/:id route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
