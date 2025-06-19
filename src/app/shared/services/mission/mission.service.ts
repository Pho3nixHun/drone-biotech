import { missions } from './mission.service.mock';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
    ActiveMission,
    CompletedMission,
    isActiveMission,
    isCompletedMission,
    Mission,
} from './mission.service.model';

@Injectable({
    providedIn: 'root',
})
export class MissionService {
    public getMissions = (): Observable<Mission[]> => of(missions);

    public getActiveMissions = (): Observable<ActiveMission[]> =>
        of(missions).pipe(map((missions) => missions.filter(isActiveMission)));

    public getCompletedMissions = (): Observable<CompletedMission[]> =>
        of(missions).pipe(
            map((missions) => missions.filter(isCompletedMission))
        );

    public getActiveMissionsByPilot = (
        pilot: string
    ): Observable<ActiveMission[]> =>
        of(missions).pipe(
            map((missions) =>
                missions
                    .filter(isActiveMission)
                    .filter((mission) => mission.pilot === pilot)
            )
        );
    public getCompletedMissionsByPilot = (
        pilot: string
    ): Observable<CompletedMission[]> =>
        of(missions).pipe(
            map((missions) =>
                missions
                    .filter(isCompletedMission)
                    .filter((mission) => mission.pilot === pilot)
            )
        );
}
