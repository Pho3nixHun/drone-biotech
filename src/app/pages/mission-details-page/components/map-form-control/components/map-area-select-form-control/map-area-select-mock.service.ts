/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { TestBed } from '@angular/core/testing';
import { Coordinates } from '@stores/location/location.model';
import { Observable } from 'rxjs';
import { MapAreaSelectService } from './map-area-select.service';

@Injectable({
    providedIn: 'any',
})
export class MapAreaSelectMockService {
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
    TestBed.overrideProvider(MapAreaSelectService, {
        useFactory: () => MapAreaSelectMockService,
    });
