/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { Coordinates } from '@stores/location/location.model';
import { MapPointSelectService } from './map-point-select.service';

@Injectable({
    providedIn: 'root',
})
export class MapPointSelectMockService {
    public initializeMap(mapRef: google.maps.Map): void {}
    public entryPointMarkerPath$: Observable<Coordinates | null> =
        toObservable(entryPointSignal);
    public drawMarker(coordinates: Coordinates | null): void {}
    public deleteMarker(): void {}
    public getPath(
        pos:
            | google.maps.LatLng
            | google.maps.LatLngLiteral
            | google.maps.LatLngAltitudeLiteral
    ): Coordinates {
        return { lat: 10, lng: 10 };
    }
}

export const provideMapPointSelectMockService = () => ({
    provide: MapPointSelectService,
    useClass: MapPointSelectMockService,
});

const entryPointSignal = signal<Coordinates | null>(null);

export const updateEntryPointSignal = (entryPoint: Coordinates | null) =>
    entryPointSignal.set(entryPoint);
