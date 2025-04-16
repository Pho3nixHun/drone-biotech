/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { DistanceService } from './distance.service';

@Injectable({
    providedIn: 'root',
})
export class DistanceMockService {
    public getDistance(destination: Coordinates): Observable<number> {
        return of(distanceSignal());
    }
    public getShortestDistanceWithWaypoints(
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
