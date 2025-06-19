import { Component, inject } from '@angular/core';
import { OfficeDashboardPageService } from './office-dashboard-page.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SummaryItemListComponent } from '@components/summary-item-list/summary-item-list.component';
import { SummaryItemComponent } from '@components/summary-item/summary-item.component';
import { GridItemComponent } from '@components/grid-section/components/grid/components/grid-item-list/components/grid-item/grid-item.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { LabeledBadgeComponent } from '@components/labeled-badge/labeled-badge.component';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { hasValueKey } from '@interfaces/value-key.interface';
import { GridSectionComponent } from '@components/grid-section/grid-section.component';
import { GridSectionHeaderComponent } from '@components/grid-section/components/grid-section-header/grid-section-header.component';
import { GridComponent } from '@components/grid-section/components/grid/grid.component';
import { GridHeaderComponent } from '@components/grid-section/components/grid/components/grid-header/grid-header.component';
import { GridItemListComponent } from '@components/grid-section/components/grid/components/grid-item-list/grid-item-list.component';
import { DashboardSpacerComponent } from '@components/dashboard-spacer/dashboard-spacer.component';
import {
    isActiveMissionsGridXVM,
    isActiveMissionXVM,
    isWithoutPilotKV,
    isWithPilotKV,
} from './office-dashboard-page.model';

@Component({
    selector: 'app-office-dashboard-page',
    imports: [
        SummaryItemListComponent,
        SummaryItemComponent,
        GridItemComponent,
        KeyValueComponent,
        LabeledBadgeComponent,
        RouterModule,
        NgClass,
        TranslocoModule,
        GridSectionComponent,
        GridSectionHeaderComponent,
        GridComponent,
        GridHeaderComponent,
        GridItemListComponent,
        DashboardSpacerComponent,
    ],
    templateUrl: './office-dashboard-page.component.html',
})
export class OfficeDashboardPageComponent {
    private readonly officeDashboardPageService = inject(
        OfficeDashboardPageService
    );

    protected readonly vm = toSignal(this.officeDashboardPageService.getVM());

    protected readonly hasValueKey = hasValueKey;
    protected readonly isWithPilotKV = isWithPilotKV;
    protected readonly isWithoutPilotKV = isWithoutPilotKV;
    protected readonly isActiveMissionXVM = isActiveMissionXVM;
    protected readonly isActiveMissionsGridXVM = isActiveMissionsGridXVM;
}
