import { inject, Injectable } from '@angular/core';
import { MissionService } from '@services/mission/mission.service';
import { combineLatest, map, Observable } from 'rxjs';
import {
    ActiveMissionXVM,
    CompletedMissionXVM,
    GridXVM,
    OfficeDashboardPageVM,
} from './office-dashboard-page.model';
import { officeDashboardPageConfig as config } from './office-dashboard-page.mock';
import { AppRouteSegment } from 'src/app/app-route-segment';
import {
    mapMissionPerformanceToTranslocoTextKey,
    mapMissionPerformanceTypeToCCSColors,
    mapMissionStatusTypeToCCSColors,
    mapMissionStatusTypeToTranslocoTextKey,
} from '@interfaces/with-base-dashboard-page.interface';
import { SummaryService } from '@services/summary/summary.service';

@Injectable({
    providedIn: 'root',
})
export class OfficeDashboardPageService {
    private readonly missionService = inject(MissionService);
    private readonly summaryService = inject(SummaryService);

    public getVM = (): Observable<OfficeDashboardPageVM> => this.vm$;

    private readonly summaryXVMs$ = this.summaryService.getSummaries('office');
    private readonly activeMissions$ = this.missionService.getActiveMissions();
    private readonly completedMissions$ =
        this.missionService.getCompletedMissions();

    private readonly activeMissionXVMs$: Observable<ActiveMissionXVM[]> =
        this.activeMissions$.pipe(
            map((missions) =>
                missions.map((mission) => ({
                    ...mission,
                    idKV: {
                        key: config.missionConfig.id.titleKey,
                        value: mission.id,
                    },
                    clientKV: {
                        key: config.missionConfig.client.titleKey,
                        value: mission.client,
                    },
                    fieldNameKV: {
                        key: config.missionConfig.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    pilotKV: {
                        key: config.missionConfig.pilot.titleKey,
                        value: mission.pilot
                            ? { name: mission.pilot }
                            : {
                                  textKey:
                                      config.missionConfig.pilot
                                          .unassignedTextKey,
                                  color: config.missionConfig.pilot.textColor,
                              },
                    },
                    areaInHaKV: {
                        key: config.missionConfig.areaInHa.titleKey,
                        value: mission.areaInHa,
                    },
                    badgeKV: {
                        key: config.missionConfig.status.titleKey,
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
                                config.missionConfig.actions.manage.textKey,
                            routerLink: `/${AppRouteSegment.LANDING}`,
                            textColor:
                                config.missionConfig.actions.manage.textColor,
                        },
                        mission.pilot
                            ? {
                                  textKey:
                                      config.missionConfig.actions.reassign
                                          .textKey,
                                  routerLink: `/${AppRouteSegment.LANDING}`,
                                  textColor:
                                      config.missionConfig.actions.reassign
                                          .textColor,
                              }
                            : {
                                  textKey:
                                      config.missionConfig.actions.assign
                                          .textKey,
                                  routerLink: `/${AppRouteSegment.LANDING}`,
                                  textColor:
                                      config.missionConfig.actions.assign
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
                        key: config.missionConfig.id.titleKey,
                        value: mission.id,
                    },
                    clientKV: {
                        key: config.missionConfig.client.titleKey,
                        value: mission.client,
                    },
                    fieldNameKV: {
                        key: config.missionConfig.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    pilotKV: {
                        key: config.missionConfig.pilot.titleKey,
                        value: mission.pilot
                            ? { name: mission.pilot }
                            : {
                                  textKey:
                                      config.missionConfig.pilot
                                          .unassignedTextKey,
                                  color: config.missionConfig.pilot.textColor,
                              },
                    },
                    completionDateKV: {
                        key: config.missionConfig.completionDate.titleKey,
                        value: mission.completionDate,
                        valueKey: config.missionConfig.completionDate.valueKey,
                    },
                    badgeKV: {
                        key: config.missionConfig.performance.titleKey,
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
                        textKey: config.missionConfig.actions.report.textKey,
                        routerLink: `/${AppRouteSegment.LANDING}`,
                        textColor:
                            config.missionConfig.actions.report.textColor,
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
                    ...config.activeMissionsGridConfig,
                    missionXVMs: activeMissions,
                },
                {
                    ...config.completedMissionsGridConfig,
                    missionXVMs: completedMissions,
                },
            ].filter((section) => section.missionXVMs.length > 0)
        )
    );

    private readonly vm$: Observable<OfficeDashboardPageVM> = combineLatest([
        this.operationsGridXVM$,
        this.summaryXVMs$,
    ]).pipe(map(([gridXVMs, summaryXVMs]) => ({ gridXVMs, summaryXVMs })));
}
