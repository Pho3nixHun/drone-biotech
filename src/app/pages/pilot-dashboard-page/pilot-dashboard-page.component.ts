import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { GridSectionComponent } from '@components/grid-section/grid-section.component';
import { GridSectionHeaderComponent } from '@components/grid-section/components/grid-section-header/grid-section-header.component';
import { GridHeaderComponent } from '@components/grid-section/components/grid/components/grid-header/grid-header.component';
import { GridComponent } from '@components/grid-section/components/grid/grid.component';
import { GridItemListComponent } from '@components/grid-section/components/grid/components/grid-item-list/grid-item-list.component';
import { GridItemComponent } from '@components/grid-section/components/grid/components/grid-item-list/components/grid-item/grid-item.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { LabeledBadgeComponent } from '@components/labeled-badge/labeled-badge.component';
import { PilotDashboardPageService } from './pilot-dashboard-page.service';
import { isAssignedMissionXVM } from './pilot-dashboard-page.model';
import { DashboardSpacerComponent } from '@components/dashboard-spacer/dashboard-spacer.component';

@Component({
    selector: 'app-pilot-dashboard-page',
    imports: [
        GridSectionComponent,
        GridSectionHeaderComponent,
        GridHeaderComponent,
        GridComponent,
        GridItemListComponent,
        GridItemComponent,
        KeyValueComponent,
        LabeledBadgeComponent,
        NgClass,
        TranslocoModule,
        RouterModule,
        DashboardSpacerComponent,
    ],
    templateUrl: './pilot-dashboard-page.component.html',
})
export class PilotDashboardPageComponent {
    private readonly pilotDashboardPageService = inject(
        PilotDashboardPageService
    );

    protected readonly vm = toSignal(this.pilotDashboardPageService.getVM());
    protected readonly isAssignedMissionXVM = isAssignedMissionXVM;
}
