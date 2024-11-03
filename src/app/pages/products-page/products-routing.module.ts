import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './products-page.component';
import { AuthGuard } from 'src/app/shared/guards/auth/auth.guard';

export const routes: Routes = [
  { path: '', component: ProductsPageComponent, canActivate: [AuthGuard] }, // /products/ route
  { path: ':id', component: ProductsPageComponent, canActivate: [AuthGuard] }, // /products/:id route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
