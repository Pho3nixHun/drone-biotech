import { TestBed } from '@angular/core/testing';
import { DashboardPageService } from './dashboard-page.service';
import { DASHBOARD_PAGE_CONFIG } from './dashboard-page.config';
import { dashboardPageConfigMock } from './dashboard-page.mock';
import { provideMockAuthStore } from '@stores/auth/auth.testing';

describe('DashboardPageService', () => {
    let service: DashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DASHBOARD_PAGE_CONFIG,
                    useValue: dashboardPageConfigMock,
                },
                provideMockAuthStore(),
            ],
        });
        service = TestBed.inject(DashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
