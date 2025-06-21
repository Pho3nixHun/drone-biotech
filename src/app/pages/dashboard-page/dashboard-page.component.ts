import { mapRoleToCSSStyle } from './dashboard-page.model';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgClass, TitleCasePipe } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { PageSectionComponent } from '@components/page-section/page-section.component';
import { FrameComponent } from '@components/frame/frame.component';
import { DashboardPageService } from './dashboard-page.service';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SummaryItemListComponent } from '@components/summary-item-list/summary-item-list.component';
import { SummaryItemComponent } from '@components/summary-item/summary-item.component';
import { hasValueKey } from '@interfaces/value-key.interface';

@Component({
    selector: 'app-dashboard-page',
    imports: [
        PageSectionComponent,
        FrameComponent,
        TranslocoModule,
        UserHeaderComponent,
        NgClass,
        TitleCasePipe,
        RouterModule,
        RouterOutlet,
        SummaryItemListComponent,
        SummaryItemComponent,
    ],
    templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
    private readonly dashboardPageService = inject(DashboardPageService);
    protected readonly vm = toSignal(this.dashboardPageService.getVM$());

    protected readonly mapRoleToCSSStyle = mapRoleToCSSStyle;
    protected readonly hasValueKey = hasValueKey;
}
