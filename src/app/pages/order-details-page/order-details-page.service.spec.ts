import { TestBed } from '@angular/core/testing';
import { OrderDetailsPageService } from './order-details-page.service';
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
            providers: [provideMockStore()],
        });
        service = TestBed.inject(OrderDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
