import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
    ActiveMission,
    ActiveMissionX,
    CompletedMission,
    CompletedMissionX,
    isActiveMissionX,
    isCompletedMissionX,
    MissionX,
} from './mission.service.model';
import { orders } from './mission-mock';

@Injectable({
    providedIn: 'root',
})
export class MissionService {
    public getMissions = (): Observable<MissionX[]> =>
        of(orders).pipe(
            map((orders) =>
                orders.flatMap((order) =>
                    order.missions.map((mission) => ({
                        ...mission,
                        client: order.client.client,
                    }))
                )
            )
        );

    public getActiveMissions = (): Observable<ActiveMissionX[]> =>
        of(orders).pipe(
            map((orders) =>
                orders
                    .flatMap((order) =>
                        order.missions.map((mission) => ({
                            ...mission,
                            client: order.client.client,
                        }))
                    )
                    .filter(isActiveMissionX)
            )
        );

    public getCompletedMissions = (): Observable<CompletedMissionX[]> =>
        of(orders).pipe(
            map((orders) =>
                orders
                    .flatMap((order) =>
                        order.missions.map((mission) => ({
                            ...mission,
                            client: order.client.client,
                        }))
                    )
                    .filter(isCompletedMissionX)
            )
        );

    public getActiveMissionsByPilot = (
        pilot: string
    ): Observable<ActiveMission[]> =>
        of(orders).pipe(
            map((orders) =>
                orders
                    .flatMap((order) =>
                        order.missions.map((mission) => ({
                            ...mission,
                            client: order.client.client,
                        }))
                    )
                    .filter(isActiveMissionX)
                    .filter((mission) => mission.pilot === pilot)
            )
        );

    public getCompletedMissionsByPilot = (
        pilot: string
    ): Observable<CompletedMission[]> =>
        of(orders).pipe(
            map((orders) =>
                orders
                    .flatMap((order) =>
                        order.missions.map((mission) => ({
                            ...mission,
                            client: order.client.client,
                        }))
                    )
                    .filter(isCompletedMissionX)
                    .filter((mission) => mission.pilot === pilot)
            )
        );
}
