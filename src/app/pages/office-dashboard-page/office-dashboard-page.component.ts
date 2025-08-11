import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { ValueComponent } from '@components/value/value.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { GridSectionComponent } from '@components/grid-section/grid-section.component';
import { GridComponent } from '@components/grid-section/components/grid/grid.component';
import { DashboardSpacerComponent } from '@components/dashboard-spacer/dashboard-spacer.component';
import { GridHeaderComponent } from '@components/grid-section/components/grid/components/grid-header/grid-header.component';
import { GridSectionHeaderComponent } from '@components/grid-section/components/grid-section-header/grid-section-header.component';
import { GridItemListComponent } from '@components/grid-section/components/grid/components/grid-item-list/grid-item-list.component';
import { GridItemComponent } from '@components/grid-section/components/grid/components/grid-item-list/components/grid-item/grid-item.component';
import { OfficeDashboardPageService } from './office-dashboard-page.service';
import { LabeledBadgeComponent } from '@components/labeled-badge/labeled-badge.component';

@Component({
    selector: 'app-office-dashboard-page',
    imports: [
        GridItemComponent,
        KeyValueComponent,
        RouterModule,
        NgClass,
        TranslocoModule,
        GridSectionComponent,
        GridSectionHeaderComponent,
        GridComponent,
        GridHeaderComponent,
        GridItemListComponent,
        DashboardSpacerComponent,
        ValueComponent,
        LabeledBadgeComponent,
    ],
    templateUrl: './office-dashboard-page.component.html',
})
export class OfficeDashboardPageComponent {
    private readonly officeDashboardPageService = inject(
        OfficeDashboardPageService
    );

    protected readonly vm = toSignal(this.officeDashboardPageService.getVM());
}
