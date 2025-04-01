import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../products-page/products-page.component').then(
                (m) => m.ProductsPageComponent
            ),
    },
    {
        path: ':id',
        loadComponent: () =>
            import('../products-page/products-page.component').then(
                (m) => m.ProductsPageComponent
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
