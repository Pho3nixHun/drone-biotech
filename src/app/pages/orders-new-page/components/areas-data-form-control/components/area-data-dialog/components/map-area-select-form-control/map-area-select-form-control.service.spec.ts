import { TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import {
    provideMockMapOptions,
    provideMockPolygonOptions,
} from './map-area-select-form-control.model';

describe('MapPointSelectFormControlService', () => {
    let service: MapAreaSelectFormControlService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockMapOptions(), provideMockPolygonOptions()],
        });
        service = TestBed.inject(MapAreaSelectFormControlService);
    });

    it('should initialize the map', () => {
        const mapCanvas = document.createElement('div');
        const mapOptions = { zoom: 10 };
        const coordinates = [
            { lat: 10, lng: 20 },
            { lat: 15, lng: 25 },
        ];

        service.initializeMap(mapCanvas, mapOptions, coordinates);

        expect(service['initializeMapSignal']()).toEqual({
            mapCanvas,
            mapOptions,
        });
        expect(service['drawPolygonPathsSignal']()).toEqual(coordinates);
    });

    it('should draw polygon with given coordinates', () => {
        const coordinates = [
            { lat: 30, lng: 40 },
            { lat: 35, lng: 45 },
        ];
        service.drawPolygon(coordinates);
        expect(service['drawPolygonPathsSignal']()).toEqual(coordinates);
    });

    it('should delete polygon', () => {
        service.deletePolygon();
        expect(service['polygonSignal']()).toBeNull();
        expect(service['drawPolygonPathsSignal']()).toBeNull();
    });
});
