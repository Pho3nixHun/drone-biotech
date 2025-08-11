import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { FrameComponent } from '@components/frame/frame.component';
import { DashboardPageService } from './dashboard-page.service';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SummaryItemListComponent } from '@components/summary-item-list/summary-item-list.component';
import { SummaryItemComponent } from '@components/summary-item/summary-item.component';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';
import { ValueComponent } from '@components/value/value.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-dashboard-page',
    imports: [
        PageLayoutComponent,
        FrameComponent,
        TranslocoModule,
        UserHeaderComponent,
        RouterModule,
        RouterOutlet,
        SummaryItemListComponent,
        SummaryItemComponent,
        ValueComponent,
        NgClass,
    ],
    templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
    private readonly dashboardPageService = inject(DashboardPageService);
    protected readonly vm = toSignal(this.dashboardPageService.getVM$());
}
