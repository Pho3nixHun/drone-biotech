import {
    isCompanyOrderXVM,
    isCustomerGridXVM,
    isMyOrderXVM,
    isOperationsActiveMissionTypeXVM,
    isOperationsGridXVM,
    isPilotAssignedMissionXVM,
    isPilotGridXVM,
    isWithoutPilotKV,
    isWithPilotKV,
    mapRoleToCSSStyle,
    mapSummaryItemColorTypeToCSSTextColor,
    mapSummaryItemUnitTypeToTranslocoQuantityKey,
} from './dashboard-page.model';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PageSectionComponent } from '@components/page-section/page-section.component';
import { FrameComponent } from '@components/frame/frame.component';
import { SummaryItemListComponent } from '@components/summary-item-list/summary-item-list.component';
import { SummaryItemComponent } from '@components/summary-item/summary-item.component';
import { DashboardPageService } from './dashboard-page.service';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { GridItemComponent } from './components/grid-section/components/grid/components/grid-item/grid-item.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { LabeledBadgeComponent } from './components/labeled-badge/labeled-badge.component';
import { GridSectionComponent } from './components/grid-section/grid-section.component';
import { GridSectionHeaderComponent } from './components/grid-section/components/grid-section-header/grid-section-header.component';
import { GridComponent } from './components/grid-section/components/grid/grid.component';
import { KeyValueComponent } from '../../shared/components/key-value/key-value.component';
import { isActiveMission } from './dashboard-page.service.model';

@Component({
    selector: 'app-dashboard-page',
    imports: [
        PageSectionComponent,
        FrameComponent,
        TranslocoModule,
        UserHeaderComponent,
        NgClass,
        TitleCasePipe,
        SummaryItemListComponent,
        SummaryItemComponent,
        RouterModule,
        NgTemplateOutlet,
        GridItemComponent,
        LabeledBadgeComponent,
        GridSectionComponent,
        GridSectionHeaderComponent,
        GridComponent,
        KeyValueComponent,
    ],
    templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
    private readonly dashboardPageService = inject(DashboardPageService);
    protected readonly vm = toSignal(this.dashboardPageService.getVM$());

    protected changeUser() {
        this.dashboardPageService.changeUser();
    }

    protected readonly mapRoleToCSSStyle = mapRoleToCSSStyle;
    protected readonly mapSummaryItemColorTypeToCSSTextColor =
        mapSummaryItemColorTypeToCSSTextColor;
    protected readonly mapSummaryItemUnitTypeToTranslocoQuantityKey =
        mapSummaryItemUnitTypeToTranslocoQuantityKey;
    protected readonly isActiveMission = isActiveMission;
    protected readonly isOperationsActiveMissionTypeXVM =
        isOperationsActiveMissionTypeXVM;
    protected readonly isMyOrderXVM = isMyOrderXVM;
    protected readonly isPilotAssignedMissionXVM = isPilotAssignedMissionXVM;
    protected readonly isCustomerGridXVM = isCustomerGridXVM;
    protected readonly isPilotGridXVM = isPilotGridXVM;
    protected readonly isOperationsGridXVM = isOperationsGridXVM;
    protected readonly isWithoutPilotKV = isWithoutPilotKV;
    protected readonly isWithPilotKV = isWithPilotKV;
    protected readonly isCompanyOrderXVM = isCompanyOrderXVM;
}
