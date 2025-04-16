import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersRouteSegment } from './orders-route-segment';

export const routes: Routes = [
    {
        path: OrdersRouteSegment.NEW,
        loadComponent: () =>
            import('./orders-new-page.component').then(
                (m) => m.OrdersNewPageComponent
            ),
    },
    {
        path: '**',
        loadComponent: () =>
            import('../not-found-page/not-found-page.component').then(
                (m) => m.NotFoundPageComponent
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {}
