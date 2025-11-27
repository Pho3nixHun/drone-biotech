import { TestBed } from '@angular/core/testing';
import { OrderDetailsPageService } from './order-details-page.service';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockAuthStore } from '@stores/auth/auth.testing';

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
            providers: [provideMockAuthStore()],
        });
        service = TestBed.inject(OrderDetailsPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
