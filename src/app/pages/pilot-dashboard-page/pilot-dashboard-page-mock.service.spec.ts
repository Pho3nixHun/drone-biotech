import { TestBed } from '@angular/core/testing';

import { PilotDashboardPageMockService } from './pilot-dashboard-page-mock.service';

describe('PilotDashboardPageMockService', () => {
  let service: PilotDashboardPageMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotDashboardPageMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
