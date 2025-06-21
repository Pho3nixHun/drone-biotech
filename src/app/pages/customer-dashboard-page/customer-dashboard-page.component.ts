import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoModule } from '@jsverse/transloco';
import { CustomerDashboardPageService } from './customer-dashboard-page.service';
import { GridSectionComponent } from '@components/grid-section/grid-section.component';
import { GridSectionHeaderComponent } from '@components/grid-section/components/grid-section-header/grid-section-header.component';
import { GridComponent } from '@components/grid-section/components/grid/grid.component';
import { GridItemComponent } from '@components/grid-section/components/grid/components/grid-item-list/components/grid-item/grid-item.component';
import { GridItemListComponent } from '@components/grid-section/components/grid/components/grid-item-list/grid-item-list.component';
import { GridHeaderComponent } from '@components/grid-section/components/grid/components/grid-header/grid-header.component';
import { LabeledBadgeComponent } from '@components/labeled-badge/labeled-badge.component';
import { KeyValueComponent } from '@components/key-value/key-value.component';
import { DashboardSpacerComponent } from '@components/dashboard-spacer/dashboard-spacer.component';
import {
    isCompanyOrderXVM,
    isMyOrderXVM,
    myOrdersGridXVM,
} from './customer-dashboard-page.model';

@Component({
    selector: 'app-customer-dashboard-page',
    imports: [
        TranslocoModule,
        GridSectionComponent,
        GridSectionHeaderComponent,
        GridComponent,
        RouterModule,
        NgClass,
        GridItemComponent,
        KeyValueComponent,
        LabeledBadgeComponent,
        GridItemListComponent,
        GridHeaderComponent,
        DashboardSpacerComponent,
    ],
    templateUrl: './customer-dashboard-page.component.html',
})
export class CustomerDashboardPageComponent {
    private readonly customerDashboardPageService = inject(
        CustomerDashboardPageService
    );
    protected readonly vm = toSignal(this.customerDashboardPageService.getVM());

    protected readonly isCompanyOrderXVM = isCompanyOrderXVM;
    protected readonly isMyOrderXVM = isMyOrderXVM;
    protected readonly myOrdersGridXVM = myOrdersGridXVM;
}
