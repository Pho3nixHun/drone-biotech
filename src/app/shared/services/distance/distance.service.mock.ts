/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { DistanceService } from './distance.service';

export abstract class DistanceServiceModel {
    public abstract getDistance(destination: Coordinates): Observable<number>;

    public abstract getShortestDistanceWithWaypoints(
        wayPoints: Coordinates | Coordinates[]
    ): Observable<number>;
}

@Injectable({
    providedIn: 'root',
})
export class DistanceMockService extends DistanceServiceModel {
    public override getDistance(destination: Coordinates): Observable<number> {
        return of(distanceSignal());
    }
    public override getShortestDistanceWithWaypoints(
        wayPoints: Coordinates | Coordinates[]
    ): Observable<number> {
        return of(distanceSignal());
    }
}

const distanceSignal = signal<number>(0);

export const updateDistance = (distance: number) =>
    distanceSignal.set(distance);

export const provideMockDistanceService = () => ({
    provide: DistanceService,
    useClass: DistanceMockService,
});
