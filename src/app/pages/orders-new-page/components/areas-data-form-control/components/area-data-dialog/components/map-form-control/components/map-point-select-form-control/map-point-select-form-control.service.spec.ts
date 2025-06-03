import { TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { provideMockEntryPointMarkerOptions } from './map-point-select-form-control.model';

describe('MapPointSelectFormControlService', () => {
    let service: MapPointSelectFormControlService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockEntryPointMarkerOptions()],
        });
        service = TestBed.inject(MapPointSelectFormControlService);
    });

    it('should create the service', () => {
        expect(service).toBeTruthy();
    });
});
