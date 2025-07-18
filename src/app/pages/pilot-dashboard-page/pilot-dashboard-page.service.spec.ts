import { TestBed } from '@angular/core/testing';

import { PilotDashboardPageService } from './pilot-dashboard-page.service';
import { provideMockStore } from '@ngrx/store/testing';
import { PILOT_DASHBOARD_PAGE_CONFIG } from './pilot-dashboard-page.config';
import { pilotDashboardPageConfig } from './pilot-dashboard-page.mock';

describe('PilotDashboardPageService', () => {
    let service: PilotDashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore(),
                {
                    provide: PILOT_DASHBOARD_PAGE_CONFIG,
                    useValue: pilotDashboardPageConfig,
                },
            ],
        });
        service = TestBed.inject(PilotDashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
