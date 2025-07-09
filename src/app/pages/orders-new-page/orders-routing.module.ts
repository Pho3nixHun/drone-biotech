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
        path: `:id/${OrdersRouteSegment.MISSIONS}`,
        loadChildren: () =>
            import(
                '../mission-details-page/mission-details-page-routing.module'
            ).then((m) => m.MissionDetailsPageRoutingModule),
    },

    {
        path: OrdersRouteSegment.DETAILS,
        loadComponent: () =>
            import('../order-details-page/order-details-page.component').then(
                (m) => m.OrderDetailsPageComponent
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {}
