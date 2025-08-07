import { TestBed } from '@angular/core/testing';

import { PilotDashboardPageService } from './pilot-dashboard-page.service';

describe('PilotDashboardPageService', () => {
    let service: PilotDashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [],
        });
        service = TestBed.inject(PilotDashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
