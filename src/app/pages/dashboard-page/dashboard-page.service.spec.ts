import { TestBed } from '@angular/core/testing';

import { DashboardPageService } from './dashboard-page.service';
import { provideMockStore } from '@ngrx/store/testing';
import { DASHBOARD_PAGE_CONFIG } from './dashboard-page.config';
import { dashboardPageConfigMock } from './dashboard-page.mock';

describe('DashboardPageService', () => {
    let service: DashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore(),
                {
                    provide: DASHBOARD_PAGE_CONFIG,
                    useValue: dashboardPageConfigMock,
                },
            ],
        });
        service = TestBed.inject(DashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
