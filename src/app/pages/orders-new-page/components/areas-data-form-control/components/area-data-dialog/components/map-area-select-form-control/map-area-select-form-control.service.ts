import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Coordinates } from '../../area-data-dialog.model';
import { toObservable } from '@angular/core/rxjs-interop';
import {
    MAP_OPTIONS,
    POLYGON_OPTIONS,
} from './map-area-select-form-control.model';

@Injectable({
    providedIn: 'root',
})
export class MapAreaSelectFormControlService {
    public initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        targetArea: Coordinates[] | null
    ) {
        this.drawPolygonPathsSignal.set(targetArea);
        this.initializeMapSignal.set({ mapCanvas, mapOptions });
    }

    private readonly initializeMapSignal = signal<{
        mapCanvas: HTMLElement;
        mapOptions: google.maps.MapOptions;
    } | null>(null);

    private readonly mapOptions = signal<google.maps.MapOptions>(
        inject(MAP_OPTIONS)
    );

    private readonly drawPolygonPathsSignal = signal<Coordinates[] | null>(
        null
    );

    private readonly polygonOptionsSignal = signal<google.maps.PolygonOptions>(
        inject(POLYGON_OPTIONS)
    );

    private readonly mapSignal = computed(() => {
        const options = this.initializeMapSignal();
        const mapOptionsFromConfig = this.mapOptions();

        if (!options) {
            return null;
        }

        const { mapCanvas, mapOptions } = options;
        return new google.maps.Map(mapCanvas, {
            ...mapOptionsFromConfig,
            ...mapOptions,
        });
    });

    private readonly polygonSignal = computed<google.maps.Polygon | null>(
        () => {
            const map = this.mapSignal();
            const polygonOptions = this.polygonOptionsSignal();
            const paths = this.drawPolygonPathsSignal();

            if (!map || !polygonOptions || !paths) {
                return null;
            }

            return new google.maps.Polygon({
                ...polygonOptions,
                paths,
                map,
            });
        }
    );

    public readonly editPolygon$ = toObservable(this.polygonSignal).pipe(
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
        if (coordinates) {
            this.drawPolygonPathsSignal.set(coordinates);
            return;
        }

        const center = this.mapSignal()?.getCenter();
        if (center) {
            this.drawPolygonPathsSignal.set([
                { lat: center.lat() - 0.0025, lng: center.lng() - 0.005 },
                { lat: center.lat() - 0.0025, lng: center.lng() + 0.005 },
                { lat: center.lat() + 0.0025, lng: center.lng() + 0.005 },
                { lat: center.lat() + 0.0025, lng: center.lng() - 0.005 },
            ]);
        }
    }

    public deletePolygon(): void {
        this.polygonSignal()?.setMap(null);
        this.drawPolygonPathsSignal.set(null);
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
