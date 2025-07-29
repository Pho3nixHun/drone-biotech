import { inject, Injectable } from '@angular/core';
import { MissionService } from '@services/mission/mission.service';
import {
    AssignedMissionXVM,
    CompletedMissionXVM,
    GridXVM,
    PilotDashboardPageVM,
} from './pilot-dashboard-page.model';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
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
import { PILOT_DASHBOARD_PAGE_CONFIG } from './pilot-dashboard-page.config';

@Injectable({
    providedIn: 'root',
})
export class PilotDashboardPageService {
    private readonly store = inject(Store);
    private readonly missionService = inject(MissionService);
    private readonly pilotName$ = this.store.select(selectUserName);

    private readonly config = inject(PILOT_DASHBOARD_PAGE_CONFIG);

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

    private readonly assignedMissionXVMs$: Observable<
        AssignedMissionXVM[] | null
    > = this.activeMissionsByPilot$.pipe(
        map((missions) =>
            missions
                ? missions.map((mission) => ({
                      ...mission,
                      idKV: {
                          key: this.config.missionConfig.id.titleKey,
                          value: mission.id,
                      },
                      fieldNameKV: {
                          key: this.config.missionConfig.fieldName.titleKey,
                          value: mission.fieldName,
                      },
                      areaInHaKV: {
                          key: this.config.missionConfig.areaInHa.titleKey,
                          value: mission.areaInHa,
                      },
                      scheduledDateKV: {
                          key: this.config.missionConfig.scheduledDate.titleKey,
                          value: mission.scheduledDate,
                          valueKey:
                              this.config.missionConfig.scheduledDate.valueKey,
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
                      anchor: {
                          textKey:
                              this.config.missionConfig.actions.mission.textKey,
                          routerLink: `/${AppRouteSegment.LANDING}`,
                          textColor:
                              this.config.missionConfig.actions.mission
                                  .textColor,
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
                          key: this.config.missionConfig.id.titleKey,
                          value: mission.id,
                      },
                      fieldNameKV: {
                          key: this.config.missionConfig.fieldName.titleKey,
                          value: mission.fieldName,
                      },
                      areaInHaKV: {
                          key: this.config.missionConfig.areaInHa.titleKey,
                          value: mission.areaInHa,
                      },
                      completionDateKV: {
                          key: this.config.missionConfig.completionDate
                              .titleKey,
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
                      anchor: {
                          textKey:
                              this.config.missionConfig.actions.report.textKey,
                          routerLink: `/${AppRouteSegment.LANDING}`,
                          textColor:
                              this.config.missionConfig.actions.report
                                  .textColor,
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
                          ...this.config.assignedMissionsGridConfig,
                          missionXVMs: assignedMissions,
                      },
                      {
                          ...this.config.completedMissionsGridConfig,
                          missionXVMs: completedMissions,
                      },
                  ].filter((section) => section.missionXVMs.length > 0)
                : null
        )
    );

    private readonly vm$: Observable<PilotDashboardPageVM | null> =
        this.gridXVMs$.pipe(
            map((gridXVMs) => (gridXVMs ? { gridXVMs } : null))
        );
}
