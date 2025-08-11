import { TestBed } from '@angular/core/testing';
import { OfficeDashboardPageService } from './office-dashboard-page.service';

describe('OfficeDashboardPageService', () => {
    let service: OfficeDashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OfficeDashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
