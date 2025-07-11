import { TestBed } from '@angular/core/testing';

import { OrderDetailsPageService } from './order-details-page.service';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import { orderDetailsPageConfig } from './order-details-page.mock';
import { provideMockStore } from '@ngrx/store/testing';
import { getTranslocoModule } from 'transloco-testing.module';

describe('OrderDetailsPageService', () => {
    let service: OrderDetailsPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                {
                    provide: ORDER_DETAILS_PAGE_CONFIG,
                    useValue: orderDetailsPageConfig,
                },
                provideMockStore(),
            ],
        });
        service = TestBed.inject(OrderDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
