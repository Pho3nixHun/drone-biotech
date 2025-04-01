import { computed, inject, Injectable, signal } from '@angular/core';
import { Coordinates } from '../../area-data-dialog.model';
import { ENTRY_POINT_MARKER_OPTIONS } from './map-point-select-form-control.model';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';
import { MAP_OPTIONS } from '../map-area-select-form-control/map-area-select-form-control.model';
import { MapPointSelectFormControlMockServiceModel } from './map-point-select-form-control.service.mock';

@Injectable({
    providedIn: 'root',
})
export class MapPointSelectFormControlService extends MapPointSelectFormControlMockServiceModel {
    public initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        entryPoint: Coordinates | null
    ) {
        this.drawEntryPointMarkerPathSignal.set(entryPoint);
        this.initializeMapSignal.set({ mapCanvas, mapOptions });
    }

    private readonly initializeMapSignal = signal<{
        mapCanvas: HTMLElement;
        mapOptions: google.maps.MapOptions;
    } | null>(null);

    private readonly drawEntryPointMarkerPathSignal =
        signal<Coordinates | null>(null);

    private readonly entryPointMarkerOptions =
        signal<google.maps.marker.AdvancedMarkerElementOptions>(
            inject(ENTRY_POINT_MARKER_OPTIONS)
        );

    private readonly mapOptions = signal<google.maps.MapOptions>(
        inject(MAP_OPTIONS)
    );

    private readonly mapSignal = computed<google.maps.Map | null>(() => {
        const options = this.initializeMapSignal();
        const mapOptionsFromConfig = this.mapOptions();

        if (!options) return null;

        const { mapCanvas, mapOptions } = options;
        return new google.maps.Map(mapCanvas, {
            ...mapOptions,
            ...mapOptionsFromConfig,
        });
    });

    private readonly entryPointMarkerSignal =
        computed<google.maps.marker.AdvancedMarkerElement | null>(() => {
            const position = this.drawEntryPointMarkerPathSignal();
            const map = this.mapSignal();
            const options = this.entryPointMarkerOptions();

            if (!map || !position) {
                return null;
            }

            return new google.maps.marker.AdvancedMarkerElement({
                map,
                position,
                ...options,
            });
        });

    public editEntryPoint$ = toObservable(this.entryPointMarkerSignal).pipe(
        switchMap(
            (entryPointMarker) =>
                new Observable<Coordinates | null>((observer) => {
                    if (!entryPointMarker) {
                        observer.next(null);
                        return;
                    }

                    const pos = entryPointMarker.position;
                    if (!pos) {
                        observer.next(null);
                        return;
                    }

                    observer.next(this.getPath(pos));

                    const listener = entryPointMarker.addListener(
                        'dragend',
                        (event: google.maps.MapMouseEvent) => {
                            const position = event.latLng;
                            if (!position) return;
                            observer.next(this.getPath(position));
                        }
                    );
                    return () => google.maps.event.removeListener(listener);
                })
        )
    );

    public drawMarker(coordinates: Coordinates | null) {
        if (coordinates) {
            this.drawEntryPointMarkerPathSignal.set(coordinates);
            return;
        }

        const center = this.mapSignal()?.getCenter() ?? null;
        if (!center) return;

        this.drawEntryPointMarkerPathSignal.set({
            lat: center.lat(),
            lng: center.lng(),
        });
    }

    public deleteMarker() {
        const entryPointMarker = this.entryPointMarkerSignal();
        if (entryPointMarker) {
            entryPointMarker.map = null;
        }
        this.drawEntryPointMarkerPathSignal.set(null);
    }

    public getPath = (
        pos:
            | google.maps.LatLng
            | google.maps.LatLngLiteral
            | google.maps.LatLngAltitudeLiteral
    ): Coordinates => ({
        lat: typeof pos.lat === 'function' ? pos.lat() : pos.lat,
        lng: typeof pos.lng === 'function' ? pos.lng() : pos.lng,
    });
}
