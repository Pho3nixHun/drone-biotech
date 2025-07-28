import { TestBed } from '@angular/core/testing';

import { MapPointSelectService } from './map-point-select.service';
import { provideMockEntryPointMarkerOptions } from 'src/app/shared/providers/google-maps-provider';

describe('MapPointSelectService', () => {
    let service: MapPointSelectService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockEntryPointMarkerOptions()],
        });
        service = TestBed.inject(MapPointSelectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
