import { computed, inject, Injectable, signal } from '@angular/core';
import { Coordinates } from '@stores/location/location.model';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap } from 'rxjs';
import { ENTRY_POINT_MARKER_OPTIONS } from '@providers/google-maps-provider';

@Injectable({
    providedIn: 'any',
})
export class MapPointSelectFormControlService {
    public initializeMap(mapRef: google.maps.Map) {
        this.mapSignal.set(mapRef);
    }
    private readonly mapSignal = signal<google.maps.Map | null>(null);
    private readonly setMarkerPathSignal = signal<Coordinates | null>(null);
    private readonly markerOptions = inject(ENTRY_POINT_MARKER_OPTIONS);

    public readonly entryPointMarkerSignal = computed(() => {
        const position = this.setMarkerPathSignal();
        const map = this.mapSignal();

        if (!position || !map) return null;

        const marker = new google.maps.marker.AdvancedMarkerElement({
            ...this.markerOptions,
            position,
            map,
        });
        return marker;
    });

    public entryPointMarkerPath$ = toObservable(
        this.entryPointMarkerSignal
    ).pipe(
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
                            if (!event.latLng) return;
                            observer.next(this.getPath(event.latLng));
                        }
                    );
                    return () => google.maps.event.removeListener(listener);
                })
        )
    );

    public drawMarker(coordinates: Coordinates | null) {
        if (coordinates) return this.setMarkerPathSignal.set(coordinates);

        const map = this.mapSignal();
        if (!map) return;

        const center = map.getCenter();
        if (!center) return;

        this.setMarkerPathSignal.set({
            lat: center.lat(),
            lng: center.lng(),
        });
    }

    public deleteMarker() {
        const marker = this.entryPointMarkerSignal();
        if (marker) {
            marker.map = null;
            this.setMarkerPathSignal.set(null);
        }
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
