import { TestBed } from '@angular/core/testing';

import { OrderDetailsPageService } from './order-details-page.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import { orderDetailsPageConfig } from './order-details-page.mock';

describe('OrderDetailsPageService', () => {
    let service: OrderDetailsPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ORDER_DETAILS_PAGE_CONFIG,
                    useValue: orderDetailsPageConfig,
                },
            ],
        });
        service = TestBed.inject(OrderDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
