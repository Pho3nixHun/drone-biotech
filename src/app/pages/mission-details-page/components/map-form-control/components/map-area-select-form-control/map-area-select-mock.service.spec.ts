import { TestBed } from '@angular/core/testing';

import { MapAreaSelectMockService } from './map-area-select-mock.service';

describe('MapAreaSelectMockService', () => {
  let service: MapAreaSelectMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapAreaSelectMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
