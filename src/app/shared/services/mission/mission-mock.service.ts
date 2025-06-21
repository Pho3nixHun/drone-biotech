import { Injectable, signal } from '@angular/core';
import { MissionService } from './mission.service';
import { map, Observable, of } from 'rxjs';
import {
    ActiveMission,
    CompletedMission,
    isActiveMission,
    isCompletedMission,
} from './mission.service.model';

@Injectable({
    providedIn: 'root',
})
export class MissionMockService {
    public getActiveMissions = (): Observable<ActiveMission[]> =>
        of(activeMissions()).pipe(
            map((missions) => missions.filter(isActiveMission))
        );

    public getCompletedMissions = (): Observable<CompletedMission[]> =>
        of(completedMissions()).pipe(
            map((missions) => missions.filter(isCompletedMission))
        );

    public getActiveMissionsByPilot = (
        pilot: string
    ): Observable<ActiveMission[]> =>
        of(activeMissions()).pipe(
            map((missions) =>
                missions
                    .filter(isActiveMission)
                    .filter((mission) => mission.pilot === pilot)
            )
        );

    public getCompletedMissionsByPilot = (
        pilot: string
    ): Observable<CompletedMission[]> =>
        of(completedMissions()).pipe(
            map((missions) =>
                missions
                    .filter(isCompletedMission)
                    .filter((mission) => mission.pilot === pilot)
            )
        );
}

const activeMissions = signal<ActiveMission[]>([]);
const completedMissions = signal<CompletedMission[]>([]);

export const provideMissionMockService = () => ({
    provide: MissionService,
    useClass: MissionMockService,
});

export const updateActiveMissions = (obj: ActiveMission[]) =>
    activeMissions.set(obj);

export const updateCompletedMissions = (obj: CompletedMission[]) =>
    completedMissions.set(obj);
