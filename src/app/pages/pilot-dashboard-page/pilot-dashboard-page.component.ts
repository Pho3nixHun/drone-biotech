import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { hasValueKey } from '@interfaces/value-key.interface';
import { SummaryItemListComponent } from '@components/summary-item-list/summary-item-list.component';
import { SummaryItemComponent } from '@components/summary-item/summary-item.component';
import { GridSectionComponent } from '@components/grid-section/grid-section.component';
import { GridSectionHeaderComponent } from '@components/grid-section/components/grid-section-header/grid-section-header.component';
import { GridHeaderComponent } from '@components/grid-section/components/grid/components/grid-header/grid-header.component';
import { GridComponent } from '@components/grid-section/components/grid/grid.component';
import { GridItemListComponent } from '@components/grid-section/components/grid/components/grid-item-list/grid-item-list.component';
import { GridItemComponent } from '@components/grid-section/components/grid/components/grid-item-list/components/grid-item/grid-item.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { LabeledBadgeComponent } from '@components/labeled-badge/labeled-badge.component';
import { DashboardSpacerComponent } from '@components/dashboard-spacer/dashboard-spacer.component';
import { PilotDashboardPageService } from './pilot-dashboard-page.service';
import { isAssignedMissionXVM } from './pilot-dashboard-page.model';

@Component({
    selector: 'app-pilot-dashboard-page',
    imports: [
        SummaryItemListComponent,
        SummaryItemComponent,
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
    protected readonly hasValueKey = hasValueKey;
    protected readonly isAssignedMissionXVM = isAssignedMissionXVM;
}
