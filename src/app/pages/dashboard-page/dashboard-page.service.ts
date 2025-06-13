import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { Injectable } from '@angular/core';
import {
    CompanyOrderXVM,
    CustomerGridXVM,
    DashboardPageVM,
    mapMissionPerformanceToTranslocoTextKey,
    mapMissionPerformanceTypeToCCSColors,
    mapMissionStatusTypeToCCSColors,
    mapMissionStatusTypeToTranslocoTextKey,
    mapOrderStatusTypeToCCSColors,
    mapOrderStatusTypeToTranslocoTextKey,
    mapSummaryItemColorTypeToCSSTextColor,
    mapSummaryItemUnitTypeToTranslocoQuantityKey,
    MyOrderXVM,
    OperationsActiveMissionTypeXVM,
    OperationsGridXVM,
    OperationsRecentCompletedMissionTypeXVM,
    PilotAssignedMissionXVM,
    PilotCompletedMissionXVM,
    PilotGridXVM,
    SummaryItemXVM,
} from './dashboard-page.model';
import {
    dashboardPageConfig,
    missions,
    orders,
    summaries,
} from './dashboard-page.mock';
import {
    User,
    MissionType,
    isActiveMission,
    isCompletedMission,
    SummaryItem,
    Order,
} from './dashboard-page.service.model';

@Injectable({
    providedIn: 'root',
})
export class DashboardPageService {
    public getVM$(): Observable<DashboardPageVM> {
        return this.vm$;
    }

    public changeUser() {
        switch (this.user$.value.role) {
            case 'customer': {
                this.user$.next({
                    role: 'office',
                    lastLoginDate: new Date(),
                    name: 'Jessica Parker',
                });
                break;
            }
            case 'office': {
                this.user$.next({
                    role: 'pilot',
                    lastLoginDate: new Date(),
                    name: 'Alex Rodriguez',
                });
                break;
            }
            case 'pilot': {
                this.user$.next({
                    role: 'customer',
                    name: 'Sarah Johnson',
                    lastLoginDate: new Date(),
                });
                break;
            }
        }
    }

    private readonly config$ = of(dashboardPageConfig);

    private readonly user$ = new BehaviorSubject<User>({
        role: 'customer',
        name: 'Sarah Johnson',
        lastLoginDate: new Date(),
    });

    private readonly getMissions$: Observable<MissionType[]> = of(missions);

    private readonly pilotName$ = this.user$.pipe(
        map((user) => (user.role === 'pilot' ? user.name : null))
    );

    private readonly pilotMissions$ = combineLatest([
        this.pilotName$,
        this.getMissions$,
    ]).pipe(
        map(([pilot, missions]) =>
            missions.filter(
                (mission) => pilot && mission.pilot && pilot === mission.pilot
            )
        )
    );

    private readonly pilotAssignedMissions$: Observable<
        PilotAssignedMissionXVM[]
    > = combineLatest([this.pilotMissions$, this.config$]).pipe(
        map(([missions, config]) =>
            missions
                .filter((mission) => isActiveMission(mission))
                .map((mission) => ({
                    ...mission,
                    idKV: {
                        key: config.assignments.id.titleKey,
                        value: mission.id,
                    },
                    fieldNameKV: {
                        key: config.assignments.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    areaInHaKV: {
                        key: config.assignments.areaInHa.titleKey,
                        value: mission.areaInHa,
                    },
                    scheduledDateKV: {
                        key: config.assignments.scheduledDate.titleKey,
                        value: mission.scheduledDate,
                        valueKey: config.assignments.scheduledDate.valueKey,
                    },
                    badgeKV: {
                        key: config.assignments.status.titleKey,
                        value: {
                            textKey: mapMissionStatusTypeToTranslocoTextKey(
                                mission.status
                            ),
                            color: mapMissionStatusTypeToCCSColors(
                                mission.status
                            ),
                        },
                    },
                    action: {
                        textKey: config.viewMissionAction.textKey,
                        routerLink: `/${AppRouteSegment.LANDING}`,
                        textColor: config.viewMissionAction.textColor,
                    },
                }))
        )
    );

    private readonly pilotCompletedMissions$: Observable<
        PilotCompletedMissionXVM[]
    > = combineLatest([this.pilotMissions$, this.config$]).pipe(
        map(([missions, config]) =>
            missions
                .filter((mission) => isCompletedMission(mission))
                .map((mission) => ({
                    ...mission,
                    idKV: {
                        key: config.assignments.id.titleKey,
                        value: mission.id,
                    },
                    fieldNameKV: {
                        key: config.assignments.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    areaInHaKV: {
                        key: config.assignments.areaInHa.titleKey,
                        value: mission.areaInHa,
                    },
                    completionDateKV: {
                        key: config.assignments.completionDate.titleKey,
                        value: mission.completionDate,
                        valueKey: config.assignments.completionDate.valueKey,
                    },
                    badgeKV: {
                        key: config.assignments.performance.titleKey,
                        value: {
                            textKey: mapMissionPerformanceToTranslocoTextKey(
                                mission.performance
                            ),
                            color: mapMissionPerformanceTypeToCCSColors(
                                mission.performance
                            ),
                        },
                    },
                    action: {
                        textKey: config.viewReportAction.textKey,
                        routerLink: `/${AppRouteSegment.LANDING}`,
                        textColor: config.viewReportAction.textColor,
                    },
                }))
        )
    );

    private readonly pilotGridXVM$: Observable<PilotGridXVM[]> = combineLatest([
        this.pilotAssignedMissions$,
        this.pilotCompletedMissions$,
        this.config$,
    ]).pipe(
        map(([activeMissions, completedMissions, config]) =>
            [
                {
                    ...config.pilotMyAssignedMissions,
                    missionXVMs: activeMissions,
                },
                {
                    ...config.pilotMyCompletedMissions,
                    missionXVMs: completedMissions,
                },
            ].filter((section) => section.missionXVMs.length > 0)
        )
    );

    private readonly officeActiveMissions$: Observable<
        OperationsActiveMissionTypeXVM[]
    > = combineLatest([this.getMissions$, this.config$]).pipe(
        map(([missions, config]) =>
            missions
                .filter((mission) => isActiveMission(mission))
                .map((mission) => ({
                    ...mission,
                    idKV: {
                        key: config.assignments.id.titleKey,
                        value: mission.id,
                    },
                    clientKV: {
                        key: config.assignments.client.titleKey,
                        value: mission.client,
                    },
                    fieldNameKV: {
                        key: config.assignments.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    pilotKV: {
                        key: config.assignments.pilot.titleKey,
                        value: mission.pilot
                            ? { name: mission.pilot }
                            : {
                                  textKey: 'Unassigned',
                                  color: 'text-red-500',
                              },
                    },
                    areaInHaKV: {
                        key: config.assignments.areaInHa.titleKey,
                        value: mission.areaInHa,
                    },
                    badgeKV: {
                        key: config.assignments.status.titleKey,
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
                            textKey: config.manageAction.textKey,
                            routerLink: `/${AppRouteSegment.LANDING}`,
                            textColor: config.manageAction.textColor,
                        },
                        mission.pilot
                            ? {
                                  textKey: config.reassignAction.textKey,
                                  routerLink: `/${AppRouteSegment.LANDING}`,
                                  textColor: config.reassignAction.textColor,
                              }
                            : {
                                  textKey: config.assignAction.textKey,
                                  routerLink: `/${AppRouteSegment.LANDING}`,
                                  textColor: config.assignAction.textColor,
                              },
                    ],
                }))
        )
    );

    private readonly officeCompletedMissions$: Observable<
        OperationsRecentCompletedMissionTypeXVM[]
    > = combineLatest([this.getMissions$, this.config$]).pipe(
        map(([missions, config]) =>
            missions
                .filter((mission) => isCompletedMission(mission))
                .map((mission) => ({
                    ...mission,
                    idKV: {
                        key: config.assignments.id.titleKey,
                        value: mission.id,
                    },
                    clientKV: {
                        key: config.assignments.client.titleKey,
                        value: mission.client,
                    },
                    fieldNameKV: {
                        key: config.assignments.fieldName.titleKey,
                        value: mission.fieldName,
                    },
                    pilotKV: {
                        key: config.assignments.pilot.titleKey,
                        value: mission.pilot
                            ? { name: mission.pilot }
                            : {
                                  textKey: 'Unassigned',
                                  color: 'text-red-500',
                              },
                    },
                    completionDateKV: {
                        key: config.assignments.completionDate.titleKey,
                        value: mission.completionDate,
                        valueKey: config.assignments.completionDate.valueKey,
                    },
                    badgeKV: {
                        key: config.assignments.performance.titleKey,
                        value: {
                            textKey: mapMissionPerformanceToTranslocoTextKey(
                                mission.performance
                            ),
                            color: mapMissionPerformanceTypeToCCSColors(
                                mission.performance
                            ),
                        },
                    },
                    action: {
                        textKey: config.viewReportAction.textKey,
                        routerLink: `/${AppRouteSegment.LANDING}`,
                        textColor: config.viewReportAction.textColor,
                    },
                }))
        )
    );
    private readonly operationsGridXVM$: Observable<OperationsGridXVM[]> =
        combineLatest([
            this.officeActiveMissions$,
            this.officeCompletedMissions$,
            this.config$,
        ]).pipe(
            map(([activeMissions, completedMissions, config]) =>
                [
                    {
                        ...config.operationsActiveMissions,
                        missionXVMs: activeMissions,
                    },
                    {
                        ...config.operationsRecentCompletedMissions,
                        missionXVMs: completedMissions,
                    },
                ].filter((section) => section.missionXVMs.length > 0)
            )
        );

    private readonly getSummaries$: Observable<SummaryItem[]> = of(summaries);

    private readonly filteredSummaries$: Observable<SummaryItem[]> =
        combineLatest([this.getSummaries$, this.user$]).pipe(
            map(([summaries, user]) =>
                summaries.filter((summary) => summary.allowedRole === user.role)
            )
        );

    private readonly summaryItemXVMs$: Observable<SummaryItemXVM[]> =
        this.filteredSummaries$.pipe(
            map((summaries) =>
                summaries.map((summary) => ({
                    ...summary,
                    color: mapSummaryItemColorTypeToCSSTextColor(
                        summary.colorType
                    ),
                    quantityKey: mapSummaryItemUnitTypeToTranslocoQuantityKey(
                        summary.unitType
                    ),
                }))
            )
        );
    private readonly getOrders$: Observable<Order[]> = of(orders);

    private readonly myOrders$: Observable<MyOrderXVM[]> = combineLatest([
        this.user$,
        this.getOrders$,
        this.config$,
    ]).pipe(
        map(([user, orders, config]) =>
            orders
                .filter((order) => order.requester === user.name)
                .map((order) => ({
                    ...order,
                    idKV: {
                        key: config.assignments.id.titleKey,
                        value: order.id,
                    },

                    statusKV: {
                        key: config.assignments.status.titleKey,
                        value: order.status,
                    },
                    totalAreaInHaKV: {
                        key: config.assignments.areaInHa.titleKey,
                        value: order.totalAreaInHa,
                    },
                    moneyValueKV: {
                        key: config.assignments.moneyValue.titleKey,
                        value: order.moneyValue,
                        valueKey: config.assignments.moneyValue.valueKey,
                    },
                    creationDateKV: {
                        key: config.assignments.creationDate.titleKey,
                        value: order.creationDate,
                        valueKey: config.assignments.creationDate.valueKey,
                    },
                    badgeKV: {
                        key: config.assignments.status.titleKey,
                        value: {
                            textKey: mapOrderStatusTypeToTranslocoTextKey(
                                order.status
                            ),
                            color: mapOrderStatusTypeToCCSColors(order.status),
                        },
                    },
                    action: {
                        textKey: config.viewDetailsAction.textKey,
                        routerLink: `/${AppRouteSegment.ORDERS}`,
                        textColor: config.viewDetailsAction.textColor,
                    },
                }))
        )
    );

    private readonly companyOrders$: Observable<CompanyOrderXVM[]> =
        combineLatest([this.user$, this.getOrders$, this.config$]).pipe(
            map(([user, orders, config]) =>
                orders
                    .filter((order) => order.requester !== user.name)
                    .map((order) => ({
                        ...order,
                        idKV: {
                            key: config.assignments.id.titleKey,
                            value: order.id,
                        },

                        statusKV: {
                            key: config.assignments.status.titleKey,
                            value: order.status,
                        },
                        totalAreaInHaKV: {
                            key: config.assignments.areaInHa.titleKey,
                            value: order.totalAreaInHa,
                        },
                        moneyValueKV: {
                            key: config.assignments.moneyValue.titleKey,
                            value: order.moneyValue,
                            valueKey: config.assignments.moneyValue.valueKey,
                        },
                        creationDateKV: {
                            key: config.assignments.creationDate.titleKey,
                            value: order.creationDate,
                            valueKey: config.assignments.creationDate.valueKey,
                        },
                        badgeKV: {
                            key: config.assignments.status.titleKey,
                            value: {
                                textKey: mapOrderStatusTypeToTranslocoTextKey(
                                    order.status
                                ),
                                color: mapOrderStatusTypeToCCSColors(
                                    order.status
                                ),
                            },
                        },
                        requesterKV: {
                            key: config.assignments.requester.titleKey,
                            value: order.requester,
                        },
                    }))
            )
        );

    private readonly customerGridXVM$: Observable<CustomerGridXVM[]> =
        combineLatest([this.myOrders$, this.companyOrders$, this.config$]).pipe(
            map(([myOrders, companyOrders, config]) =>
                [
                    {
                        ...config.customerMyOrders,
                        orderXVMs: myOrders,
                    },
                    {
                        ...config.customerCompanyOrders,
                        orderXVMs: companyOrders,
                    },
                ].filter((section) => section.orderXVMs.length > 0)
            )
        );
    private readonly vm$: Observable<DashboardPageVM> = combineLatest([
        this.pilotGridXVM$,
        this.operationsGridXVM$,
        this.customerGridXVM$,
        this.summaryItemXVMs$,
        this.user$,
        this.config$,
    ]).pipe(
        map(
            ([
                pilotGridXVM,
                operationsGridXVM,
                customerGridXVM,
                summaryItemList,
                user,
                config,
            ]) => {
                const gridXVMMap = {
                    pilot: pilotGridXVM,
                    office: operationsGridXVM,
                    customer: customerGridXVM,
                };
                return {
                    ...config,
                    userHeaderXVM: {
                        ...config.userHeaderVM,
                        user,
                    },
                    summaryItemList,
                    gridXVMs: gridXVMMap[user.role],
                };
            }
        )
    );
}
