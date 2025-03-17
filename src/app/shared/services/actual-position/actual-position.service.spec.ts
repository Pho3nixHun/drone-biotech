import { TestBed } from '@angular/core/testing';

import { ActualPositionService } from './actual-position.service';

describe('ActualPositionService', () => {
  let service: ActualPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
