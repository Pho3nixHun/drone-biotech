import { TestBed } from '@angular/core/testing';
import { CustomerDashboardPageService } from './customer-dashboard-page.service';

describe('CustomerDashboardPageService', () => {
    let service: CustomerDashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [],
        });
        service = TestBed.inject(CustomerDashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
