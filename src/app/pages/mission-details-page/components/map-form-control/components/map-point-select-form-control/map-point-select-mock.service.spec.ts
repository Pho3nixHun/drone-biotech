import { TestBed } from '@angular/core/testing';

import { MapPointSelectMockService } from './map-point-select-mock.service';

describe('MapPointSelectMockService', () => {
  let service: MapPointSelectMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapPointSelectMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
