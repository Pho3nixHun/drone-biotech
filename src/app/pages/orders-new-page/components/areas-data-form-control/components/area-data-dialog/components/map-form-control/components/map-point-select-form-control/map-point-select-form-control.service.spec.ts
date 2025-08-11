import { TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { provideMockEntryPointMarkerOptions } from 'src/app/shared/providers/google-maps-provider';

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
