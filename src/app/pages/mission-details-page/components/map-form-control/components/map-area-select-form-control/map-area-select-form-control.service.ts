import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Coordinates } from '@stores/location/location.model';
import { toObservable } from '@angular/core/rxjs-interop';
import { POLYGON_OPTIONS } from '@providers/google-maps-provider';

@Injectable({
    providedIn: 'any',
})
export class MapAreaSelectFormControlService {
    public initializeMap(map: google.maps.Map) {
        this.mapSignal.set(map);
    }

    private readonly mapSignal = signal<google.maps.Map | null>(null);
    private readonly setPolygonPathsSignal = signal<Coordinates[] | null>(null);
    private readonly polygonOptions = inject(POLYGON_OPTIONS);

    public deletePolygon() {
        const polygon = this.polygonSignal();
        if (polygon) {
            polygon.setMap(null);
            this.setPolygonPathsSignal.set(null);
        }
    }
    private readonly polygonSignal = computed<google.maps.Polygon | null>(
        () => {
            const map = this.mapSignal();
            const paths = this.setPolygonPathsSignal();

            if (!map || !paths) return null;

            return new google.maps.Polygon({
                ...this.polygonOptions,
                paths,
                map,
            });
        }
    );

    public readonly polygonPaths$ = toObservable(this.polygonSignal).pipe(
        switchMap(
            (polygon) =>
                new Observable<Coordinates[] | null>((observer) => {
                    if (!polygon) {
                        observer.next(null);
                        return;
                    }

                    observer.next(this.getPaths(polygon.getPath()));

                    const listeners = ['set_at', 'remove_at', 'insert_at'].map(
                        (event) =>
                            polygon
                                .getPath()
                                .addListener(event, () =>
                                    observer.next(
                                        this.getPaths(polygon.getPath())
                                    )
                                )
                    );
                    return () =>
                        listeners.forEach((listener) =>
                            google.maps.event.removeListener(listener)
                        );
                })
        )
    );

    public drawPolygon(coordinates: Coordinates[] | null) {
        if (coordinates) return this.setPolygonPathsSignal.set(coordinates);

        const center = this.mapSignal()?.getCenter();
        if (!center) return;

        this.setPolygonPathsSignal.set([
            { lat: center.lat() - 0.0025, lng: center.lng() - 0.005 },
            { lat: center.lat() - 0.0025, lng: center.lng() + 0.005 },
            { lat: center.lat() + 0.0025, lng: center.lng() + 0.005 },
            { lat: center.lat() + 0.0025, lng: center.lng() - 0.005 },
        ]);
    }

    public editPolygon(coords: Coordinates[]) {
        const polygon = this.polygonSignal();
        if (polygon) {
            polygon.setMap(null);
            this.setPolygonPathsSignal.set(coords);
        }
    }

    public getPaths(
        path: google.maps.MVCArray<google.maps.LatLng>
    ): Coordinates[] {
        return path.getArray().map<Coordinates>((item) => ({
            lat: item.lat(),
            lng: item.lng(),
        }));
    }
}
