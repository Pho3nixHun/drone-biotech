import { inject, Injectable } from '@angular/core';
import { MissionService } from '@services/mission/mission.service';
import { combineLatest, map, Observable } from 'rxjs';
import {
    ActiveMissionXVM,
    CompletedMissionXVM,
    GridXVM,
    OfficeDashboardPageVM,
} from './office-dashboard-page.model';
import { AppRouteSegment } from 'src/app/app-route-segment';
import {
    mapMissionPerformanceToTranslocoTextKey,
    mapMissionPerformanceTypeToCCSColors,
    mapMissionStatusTypeToCCSColors,
    mapMissionStatusTypeToTranslocoTextKey,
} from '@interfaces/with-base-dashboard-page.interface';
import { OFFICE_DASHBOARD_PAGE_CONFIG } from './office-dashboard-page.config';

@Injectable({
    providedIn: 'root',
})
export class OfficeDashboardPageService {
    private readonly config = inject(OFFICE_DASHBOARD_PAGE_CONFIG);
    private readonly missionService = inject(MissionService);

    public getVM = (): Observable<OfficeDashboardPageVM> => this.vm$;

    private readonly activeMissions$ = this.missionService.getActiveMissions();
    private readonly completedMissions$ =
        this.missionService.getCompletedMissions();

    private readonly activeMissionXVMs$: Observable<ActiveMissionXVM[]> =
        this.activeMissions$.pipe(
            map((missions) =>
                missions.map((mission) => ({
                    ...mission,
                    idKV: {
                        key: this.config.missionConfig.id.titleKey,
                        value: mission.id,
                    },
                    clientKV: {
                        key: this.config.missionConfig.client.titleKey,
                        value: mission.client,
                    },
                    fieldNameKV: {
                        key: this.config.missionConfig.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    pilotKV: {
                        key: this.config.missionConfig.pilot.titleKey,
                        value: mission.pilot
                            ? { name: mission.pilot }
                            : {
                                  textKey:
                                      this.config.missionConfig.pilot
                                          .unassignedTextKey,
                                  color: this.config.missionConfig.pilot
                                      .textColor,
                              },
                    },
                    areaInHaKV: {
                        key: this.config.missionConfig.areaInHa.titleKey,
                        value: mission.areaInHa,
                    },
                    badgeKV: {
                        key: this.config.missionConfig.status.titleKey,
                        value: {
                            textKey: mapMissionStatusTypeToTranslocoTextKey(
                                mission.status
                            ),
                            color: mapMissionStatusTypeToCCSColors(
                                mission.status
                            ),
                        },
                    },

                    actions: [
                        {
                            textKey:
                                this.config.missionConfig.actions.manage
                                    .textKey,
                            routerLink: `/${AppRouteSegment.LANDING}`,
                            textColor:
                                this.config.missionConfig.actions.manage
                                    .textColor,
                        },
                        mission.pilot
                            ? {
                                  textKey:
                                      this.config.missionConfig.actions.reassign
                                          .textKey,
                                  routerLink: `/${AppRouteSegment.LANDING}`,
                                  textColor:
                                      this.config.missionConfig.actions.reassign
                                          .textColor,
                              }
                            : {
                                  textKey:
                                      this.config.missionConfig.actions.assign
                                          .textKey,
                                  routerLink: `/${AppRouteSegment.LANDING}`,
                                  textColor:
                                      this.config.missionConfig.actions.assign
                                          .textColor,
                              },
                    ],
                }))
            )
        );

    private readonly completedMissionXVMs$: Observable<CompletedMissionXVM[]> =
        this.completedMissions$.pipe(
            map((missions) =>
                missions.map((mission) => ({
                    ...mission,
                    idKV: {
                        key: this.config.missionConfig.id.titleKey,
                        value: mission.id,
                    },
                    clientKV: {
                        key: this.config.missionConfig.client.titleKey,
                        value: mission.client,
                    },
                    fieldNameKV: {
                        key: this.config.missionConfig.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    pilotKV: {
                        key: this.config.missionConfig.pilot.titleKey,
                        value: { name: mission.pilot },
                    },
                    completionDateKV: {
                        key: this.config.missionConfig.completionDate.titleKey,
                        value: mission.completionDate,
                        valueKey:
                            this.config.missionConfig.completionDate.valueKey,
                    },
                    badgeKV: {
                        key: this.config.missionConfig.performance.titleKey,
                        value: {
                            textKey: mapMissionPerformanceToTranslocoTextKey(
                                mission.performance
                            ),
                            color: mapMissionPerformanceTypeToCCSColors(
                                mission.performance
                            ),
                        },
                    },
                    navigationAnchor: {
                        textKey:
                            this.config.missionConfig.actions.report.textKey,
                        routerLink: `/${AppRouteSegment.LANDING}`,
                        textColor:
                            this.config.missionConfig.actions.report.textColor,
                    },
                }))
            )
        );

    private readonly operationsGridXVM$: Observable<GridXVM[]> = combineLatest([
        this.activeMissionXVMs$,
        this.completedMissionXVMs$,
    ]).pipe(
        map(([activeMissions, completedMissions]) =>
            [
                {
                    ...this.config.activeMissionsGridConfig,
                    missionXVMs: activeMissions,
                },
                {
                    ...this.config.completedMissionsGridConfig,
                    missionXVMs: completedMissions,
                },
            ].filter((section) => section.missionXVMs.length > 0)
        )
    );

    private readonly vm$: Observable<OfficeDashboardPageVM> =
        this.operationsGridXVM$.pipe(map((gridXVMs) => ({ gridXVMs })));
}
