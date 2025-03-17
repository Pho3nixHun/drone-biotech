import { TestBed } from '@angular/core/testing';

import { MapPointSelectFormControlService } from './map-point-select-form-control.service';

describe('MapPointSelectFormControlService', () => {
  let service: MapPointSelectFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapPointSelectFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
