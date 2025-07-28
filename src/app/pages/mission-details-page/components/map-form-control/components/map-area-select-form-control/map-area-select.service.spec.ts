import { TestBed } from '@angular/core/testing';

import { MapAreaSelectService } from './map-area-select.service';
import { provideMockPolygonOptions } from 'src/app/shared/providers/google-maps-provider';

describe('MapAreaSelectService', () => {
    let service: MapAreaSelectService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockPolygonOptions()],
        });
        service = TestBed.inject(MapAreaSelectService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
