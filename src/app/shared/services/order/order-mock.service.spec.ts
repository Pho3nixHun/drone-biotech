import { TestBed } from '@angular/core/testing';

import { OrderMockService } from './order-mock.service';

describe('OrderMockService', () => {
  let service: OrderMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
