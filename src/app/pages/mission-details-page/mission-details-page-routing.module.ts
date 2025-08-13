import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: ':id',
        loadComponent: () =>
            import('./mission-details-page.component').then(
                (m) => m.MissionDetailsPageComponent
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MissionDetailsPageRoutingModule {}
