import { TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import {
    provideMockInfoWindowOptions,
    provideMockPolygonOptions,
} from './map-area-select-form-control.model';

describe('MapPointSelectFormControlService', () => {
    let service: MapAreaSelectFormControlService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockPolygonOptions(),
                provideMockInfoWindowOptions(),
            ],
        });
        service = TestBed.inject(MapAreaSelectFormControlService);
    });

    it('should create the service', () => {
        expect(service).toBeTruthy();
    });
});
