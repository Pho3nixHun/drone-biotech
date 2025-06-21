import { TestBed } from '@angular/core/testing';

import { MissionMockService } from './mission-mock.service';

describe('MissionMockService', () => {
  let service: MissionMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
