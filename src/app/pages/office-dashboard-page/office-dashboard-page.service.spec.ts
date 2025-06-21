import { TestBed } from '@angular/core/testing';

import { OfficeDashboardPageService } from './office-dashboard-page.service';
import { OFFICE_DASHBOARD_PAGE_CONFIG } from './office-dashboard-page.config';
import { officeDashboardPageConfig } from './office-dashboard-page.mock';

describe('OfficeDashboardPageService', () => {
    let service: OfficeDashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: OFFICE_DASHBOARD_PAGE_CONFIG,
                    useValue: officeDashboardPageConfig,
                },
            ],
        });
        service = TestBed.inject(OfficeDashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
