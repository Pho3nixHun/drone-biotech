import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './products-page.component';

export const routes: Routes = [
    { path: '', component: ProductsPageComponent }, // /products/ route
    { path: ':id', component: ProductsPageComponent }, // /products/:id route
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
