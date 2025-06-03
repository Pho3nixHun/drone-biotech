import { TestBed } from '@angular/core/testing';
import { OrdersNewPageService } from './orders-new-page.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('OrdersNewPageService', () => {
    let service: OrdersNewPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore()],
        });
        service = TestBed.inject(OrdersNewPageService);
    });

    it('should create the service', () => {
        expect(service).toBeTruthy();
    });
});
