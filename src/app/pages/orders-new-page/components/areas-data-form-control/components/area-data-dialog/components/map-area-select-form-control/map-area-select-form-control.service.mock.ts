/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable } from 'rxjs';
import { Coordinates } from '../../area-data-dialog.model';
import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
@Injectable({
    providedIn: 'root',
})
export class MapAreaSelectFormControlMockService {
    public initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        targetArea: Coordinates[] | null
    ): void {}
    public drawPolygon(coordinates: Coordinates[] | null): void {}
    public deletePolygon(): void {}
    public getPaths(
        path: google.maps.MVCArray<google.maps.LatLng>
    ): Coordinates[] {
        return [];
    }
    public editPolygon$: Observable<Coordinates[] | null> =
        toObservable(polygonSignal);
}

const polygonSignal = signal<Coordinates[] | null>(null);

export const updatePolygonSignal = (path: Coordinates[] | null) =>
    polygonSignal.set(path);

export const provideMapAreaSelectFormControlMockService = () => ({
    provide: MapAreaSelectFormControlService,
    useClass: MapAreaSelectFormControlMockService,
});
