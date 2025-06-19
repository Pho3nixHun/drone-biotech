import { inject, Injectable } from '@angular/core';
import { MissionService } from '@services/mission/mission.service';
import { SummaryService } from '@services/summary/summary.service';
import {
    AssignedMissionXVM,
    CompletedMissionXVM,
    GridXVM,
    PilotDashboardPageVM,
} from './pilot-dashboard-page.model';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { pilotDashboardPageConfig as config } from './pilot-dashboard-page.mock';
import {
    mapMissionPerformanceToTranslocoTextKey,
    mapMissionPerformanceTypeToCCSColors,
    mapMissionStatusTypeToCCSColors,
    mapMissionStatusTypeToTranslocoTextKey,
} from '@interfaces/with-base-dashboard-page.interface';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { Store } from '@ngrx/store';
import { selectUserName } from '@stores/auth/auth.selector';
import {
    ActiveMission,
    CompletedMission,
} from '@services/mission/mission.service.model';

@Injectable({
    providedIn: 'root',
})
export class PilotDashboardPageService {
    private readonly store = inject(Store);
    private readonly missionService = inject(MissionService);
    private readonly summaryService = inject(SummaryService);
    private readonly pilotName$ = this.store.select(selectUserName);

    public getVM = (): Observable<PilotDashboardPageVM | null> => this.vm$;

    private readonly activeMissionsByPilot$: Observable<
        ActiveMission[] | null
    > = this.pilotName$.pipe(
        switchMap((pilot) =>
            pilot
                ? this.missionService.getActiveMissionsByPilot(pilot)
                : of(null)
        )
    );
    private readonly completedMissionsByPilot$: Observable<
        CompletedMission[] | null
    > = this.pilotName$.pipe(
        switchMap((pilot) =>
            pilot
                ? this.missionService.getCompletedMissionsByPilot(pilot)
                : of(null)
        )
    );

    private readonly filteredSummaryXVMs$ =
        this.summaryService.getSummaries('pilot');

    private readonly assignedMissionXVMs$: Observable<
        AssignedMissionXVM[] | null
    > = this.activeMissionsByPilot$.pipe(
        map((missions) =>
            missions
                ? missions.map((mission) => ({
                      ...mission,
                      idKV: {
                          key: config.missionConfig.id.titleKey,
                          value: mission.id,
                      },
                      fieldNameKV: {
                          key: config.missionConfig.fieldName.titleKey,
                          value: mission.fieldName,
                      },
                      areaInHaKV: {
                          key: config.missionConfig.areaInHa.titleKey,
                          value: mission.areaInHa,
                      },
                      scheduledDateKV: {
                          key: config.missionConfig.scheduledDate.titleKey,
                          value: mission.scheduledDate,
                          valueKey: config.missionConfig.scheduledDate.valueKey,
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
                      navigationAnchor: {
                          textKey: config.missionConfig.actions.mission.textKey,
                          routerLink: `/${AppRouteSegment.LANDING}`,
                          textColor:
                              config.missionConfig.actions.mission.textColor,
                      },
                  }))
                : null
        )
    );

    private readonly completedMissionXVMs$: Observable<
        CompletedMissionXVM[] | null
    > = this.completedMissionsByPilot$.pipe(
        map((missions) =>
            missions
                ? missions.map((mission) => ({
                      ...mission,
                      idKV: {
                          key: config.missionConfig.id.titleKey,
                          value: mission.id,
                      },
                      fieldNameKV: {
                          key: config.missionConfig.fieldName.titleKey,
                          value: mission.fieldName,
                      },
                      areaInHaKV: {
                          key: config.missionConfig.areaInHa.titleKey,
                          value: mission.areaInHa,
                      },
                      completionDateKV: {
                          key: config.missionConfig.completionDate.titleKey,
                          value: mission.completionDate,
                          valueKey:
                              config.missionConfig.completionDate.valueKey,
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
                : null
        )
    );

    private readonly gridXVMs$: Observable<GridXVM[] | null> = combineLatest([
        this.assignedMissionXVMs$,
        this.completedMissionXVMs$,
    ]).pipe(
        map(([assignedMissions, completedMissions]) =>
            assignedMissions && completedMissions
                ? [
                      {
                          ...config.assignedMissionsGridConfig,
                          missionXVMs: assignedMissions,
                      },
                      {
                          ...config.completedMissionsGridConfig,
                          missionXVMs: completedMissions,
                      },
                  ].filter((section) => section.missionXVMs.length > 0)
                : null
        )
    );

    private readonly vm$: Observable<PilotDashboardPageVM | null> =
        combineLatest([this.gridXVMs$, this.filteredSummaryXVMs$]).pipe(
            map(([gridXVMs, summaryXVMs]) =>
                gridXVMs ? { gridXVMs, summaryXVMs } : null
            )
        );
}
