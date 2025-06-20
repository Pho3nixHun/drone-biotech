import { TestBed } from '@angular/core/testing';

import { CustomerDashboardPageService } from './customer-dashboard-page.service';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOMER_DASHBOARD_PAGE_CONFIG } from './customer-dashboard-page.config';
import { customerDashboardPageConfigMock } from './customer-dashboard-page.mock';

describe('CustomerDashboardPageService', () => {
    let service: CustomerDashboardPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore(),
                {
                    provide: CUSTOMER_DASHBOARD_PAGE_CONFIG,
                    useValue: customerDashboardPageConfigMock,
                },
            ],
        });
        service = TestBed.inject(CustomerDashboardPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
