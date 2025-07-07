import { TestBed } from '@angular/core/testing';

import { SummaryMockService } from './summary-mock.service';

describe('SummaryMockService', () => {
  let service: SummaryMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
