/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, signal } from '@angular/core';
import { Coordinates } from '../../area-data-dialog.model';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

export abstract class MapPointSelectFormControlMockServiceModel {
    public abstract drawMarker(coordinates: Coordinates | null): void;
    public abstract deleteMarker(): void;
    public abstract getPath(
        pos:
            | google.maps.LatLng
            | google.maps.LatLngLiteral
            | google.maps.LatLngAltitudeLiteral
    ): Coordinates;
    public abstract editEntryPoint$: Observable<Coordinates | null>;
    public abstract initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        entryPoint: Coordinates | null
    ): void;
}

@Injectable({
    providedIn: 'root',
})
export class MapPointSelectFormControlMockService extends MapPointSelectFormControlMockServiceModel {
    public override initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        entryPoint: Coordinates | null
    ): void {}
    public override editEntryPoint$: Observable<Coordinates | null> =
        toObservable(entryPointSignal);
    public override drawMarker(coordinates: Coordinates | null): void {}
    public override deleteMarker(): void {}
    public override getPath(
        pos:
            | google.maps.LatLng
            | google.maps.LatLngLiteral
            | google.maps.LatLngAltitudeLiteral
    ): Coordinates {
        return { lat: 10, lng: 10 };
    }
}

export const provideMapPointSelectFormControlMockService = () => ({
    provide: MapPointSelectFormControlService,
    useClass: MapPointSelectFormControlMockService,
});

const entryPointSignal = signal<Coordinates | null>(null);

export const updateEntryPointSignal = (entryPoint: Coordinates | null) =>
    entryPointSignal.set(entryPoint);
