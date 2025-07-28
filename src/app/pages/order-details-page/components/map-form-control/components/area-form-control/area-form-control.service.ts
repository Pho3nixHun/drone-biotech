import {
    ACTIVE_MISSION_POLYGON_OPTIONS,
    COMPLETED_MISSION_POLYGON_OPTIONS,
} from 'src/app/shared/providers/google-maps-provider';
import { TargetArea } from 'src/app/pages/order-details-page/order-details-page.model';
import { computed, inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Coordinates } from '@stores/location/location.model';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AreaFormControlService {
    private readonly activeMissionPolygonOptions = inject(
        ACTIVE_MISSION_POLYGON_OPTIONS
    );
    private readonly completedMissionPolygonOptions = inject(
        COMPLETED_MISSION_POLYGON_OPTIONS
    );

    private readonly setPolygonPaths = signal<TargetArea[] | null>(null);
    private readonly map = signal<google.maps.Map | null>(null);

    private readonly drawnPolygons = computed<google.maps.Polygon[] | null>(
        () => {
            const map = this.map();
            const paths = this.setPolygonPaths();
            if (!map || !paths) return null;

            return paths.map((mission) => {
                const options =
                    mission.type === 'active'
                        ? this.activeMissionPolygonOptions
                        : this.completedMissionPolygonOptions;
                return new google.maps.Polygon({
                    ...options,
                    paths: mission.coordinates,
                    map,
                });
            });
        }
    );

    public polygonPaths$: Observable<Coordinates[][] | null> = toObservable(
        this.drawnPolygons
    ).pipe(
        map((polygons) => {
            if (!polygons) return null;

            return polygons.map((polygon) =>
                polygon
                    .getPath()
                    .getArray()
                    .map((latLng) => ({
                        lat: latLng.lat(),
                        lng: latLng.lng(),
                    }))
            );
        })
    );

    public removePolygons() {
        const polygons = this.drawnPolygons();
        if (!polygons) return;

        polygons.forEach((polygon) => polygon.setMap(null));
        this.setPolygonPaths.set(null);
    }

    public drawPolygons(areas: TargetArea[]) {
        this.setPolygonPaths.set(areas);
    }

    public setMap(map: google.maps.Map) {
        this.map.set(map);
    }
}
