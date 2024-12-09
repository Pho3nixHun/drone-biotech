import { TestBed } from '@angular/core/testing';

import { OrdersNewPageService } from './orders-new-page.service';
import {
    provideMockDrawingControlOptions,
    provideMockMapOptions,
    provideMockPolygonOptions,
} from '@services/maps-config/maps-config-vm.model';

describe('OrdersNewPageService', () => {
    let service: OrdersNewPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockDrawingControlOptions(),
                provideMockMapOptions(),
                provideMockPolygonOptions(),
            ],
        });
        service = TestBed.inject(OrdersNewPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
