import { TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { provideMockEntryPointMarkerOptions } from './map-point-select-form-control.model';
import { provideMockMapOptions } from '../map-area-select-form-control/map-area-select-form-control.model';

describe('MapPointSelectFormControlService', () => {
    let service: MapPointSelectFormControlService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockEntryPointMarkerOptions(),
                provideMockMapOptions(),
            ],
        });
        service = TestBed.inject(MapPointSelectFormControlService);
    });

    it('should initialize the map', () => {
        const mapCanvas = document.createElement('div');
        const mapOptions = { zoom: 10 };
        service.initializeMap(mapCanvas, mapOptions, { lat: 10, lng: 20 });

        expect(service['initializeMapSignal']()).toEqual({
            mapCanvas,
            mapOptions,
        });
        expect(service['drawEntryPointMarkerPathSignal']()).toEqual({
            lat: 10,
            lng: 20,
        });
    });

    it('should draw marker at specified coordinates', () => {
        service.drawMarker({ lat: 30, lng: 40 });
        expect(service['drawEntryPointMarkerPathSignal']()).toEqual({
            lat: 30,
            lng: 40,
        });
    });

    it('should delete marker', () => {
        service.deleteMarker();
        expect(service['drawEntryPointMarkerPathSignal']()).toBeNull();
    });
});
