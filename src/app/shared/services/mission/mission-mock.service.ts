import { Injectable, signal } from '@angular/core';
import { MissionService } from './mission.service';
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
import { Order } from '@services/order/order.service.model';

@Injectable({
    providedIn: 'root',
})
export class MissionMockService {
    public getMissions = (): Observable<MissionX[]> =>
        of(orders()).pipe(
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
        of(orders()).pipe(
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
        of(orders()).pipe(
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
        of(orders()).pipe(
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
        of(orders()).pipe(
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

const orders = signal<Order[]>([]);

export const provideMissionMockService = () => ({
    provide: MissionService,
    useClass: MissionMockService,
});

export const updateMissions = (obj: Order[]) => orders.set(obj);
