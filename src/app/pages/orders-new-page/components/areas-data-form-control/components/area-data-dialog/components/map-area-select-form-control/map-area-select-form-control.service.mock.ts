/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable } from 'rxjs';
import { Coordinates } from '../../area-data-dialog.model';
import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';

export abstract class MapAreaSelectFormControlMockServiceModel {
    public abstract initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        targetArea: Coordinates[] | null
    ): void;
    public abstract drawPolygon(coordinates: Coordinates[] | null): void;
    public abstract deletePolygon(): void;
    public abstract getPaths(
        path: google.maps.MVCArray<google.maps.LatLng>
    ): Coordinates[];
    public abstract editPolygon$: Observable<Coordinates[] | null>;
}

@Injectable({
    providedIn: 'root',
})
export class MapAreaSelectFormControlMockService extends MapAreaSelectFormControlMockServiceModel {
    public override initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        targetArea: Coordinates[] | null
    ): void {}
    public override drawPolygon(coordinates: Coordinates[] | null): void {}
    public override deletePolygon(): void {}
    public override getPaths(
        path: google.maps.MVCArray<google.maps.LatLng>
    ): Coordinates[] {
        return [];
    }
    public override editPolygon$: Observable<Coordinates[] | null> =
        toObservable(polygonSignal);
}

const polygonSignal = signal<Coordinates[] | null>(null);

export const updatePolygonSignal = (path: Coordinates[] | null) =>
    polygonSignal.set(path);

export const provideMapAreaSelectFormControlMockService = () => ({
    provide: MapAreaSelectFormControlService,
    useClass: MapAreaSelectFormControlMockService,
});
