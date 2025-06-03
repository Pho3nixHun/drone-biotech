/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable } from 'rxjs';
import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Coordinates } from '@stores/location/location.model';
import { TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
@Injectable({
    providedIn: 'any',
})
export class MapAreaSelectFormControlMockService {
    public initializeMap(map: google.maps.Map): void {}
    public drawPolygon(coordinates: Coordinates[] | null): void {}
    public deletePolygon(): void {}

    public polygonPaths$: Observable<Coordinates[] | null> =
        toObservable(polygonSignal);
    public setInfoWindow(translatedText: string, position: Coordinates): void {}
    public editPolygon(coords: Coordinates[]): void {}
}

const polygonSignal = signal<Coordinates[] | null>(null);

export const updatePolygonSignal = (path: Coordinates[] | null) =>
    polygonSignal.set(path);

export const provideMapAreaSelectFormControlMockService = (): TestBed =>
    TestBed.overrideProvider(MapAreaSelectFormControlService, {
        useFactory: () => MapAreaSelectFormControlMockService,
    });
