import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteSegment } from 'src/app/app-route-segment';

export const routes: Routes = [
    {
        path: AppRouteSegment.NEW,
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
