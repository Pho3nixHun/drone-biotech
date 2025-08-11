import { AppRouteSegment } from 'src/app/app-route-segment';
import { OfficeDashboardPageVM } from './office-dashboard-page.model';
import { OrdersRouteSegment } from '../orders-new-page/orders-route-segment';

export const officeDashboardPageVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: 'OfficeDashboardPage.activeMissions.title',
            headerKeys: [
                'OfficeDashboardPage.id.header',
                'OfficeDashboardPage.client.header',
                'OfficeDashboardPage.fieldName.header',
                'OfficeDashboardPage.pilot.header',
                'OfficeDashboardPage.areaInHa.header',
                'OfficeDashboardPage.status.header',
                'OfficeDashboardPage.actions.header',
            ],
            anchor: {
                textKey: 'OfficeDashboardPage.activeMissions.anchor.text',
                routerLink: `/${AppRouteSegment.ORDERS}/${OrdersRouteSegment.NEW}`,
            },
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: 'OfficeDashboardPage.id.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'B-78901',
                            },
                        },
                        fieldName: {
                            labelKey: 'OfficeDashboardPage.fieldName.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'East Meadow',
                            },
                        },
                        areaInHa: {
                            labelKey: 'OfficeDashboardPage.areaInHa.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 105.4,
                            },
                        },
                        client: {
                            labelKey: 'OfficeDashboardPage.client.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Westbrook Agricultural',
                            },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: 'OfficeDashboardPage.pilot.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Alex Rodriguez',
                            },
                        },
                        status: {
                            labelKey: 'OfficeDashboardPage.status.label',
                            labeledBadgeXVM: {
                                type: 'scheduled',
                                textKey:
                                    'OfficeDashboardPage.status.scheduled.text',
                            },
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.status.scheduled.text',
                            },
                        },
                        actions: {
                            labelKey: 'OfficeDashboardPage.actions.label',
                            anchorXVMs: [
                                {
                                    type: 'manage',
                                    textKey:
                                        'OfficeDashboardPage.actions.manage',
                                },
                                {
                                    type: 'reassign',
                                    textKey:
                                        'OfficeDashboardPage.actions.reassign',
                                },
                            ],
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: 'OfficeDashboardPage.id.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'B-78902',
                            },
                        },
                        fieldName: {
                            labelKey: 'OfficeDashboardPage.fieldName.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'West Meadow',
                            },
                        },
                        areaInHa: {
                            labelKey: 'OfficeDashboardPage.areaInHa.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 23.4,
                            },
                        },
                        client: {
                            labelKey: 'OfficeDashboardPage.client.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Westbrook Agricultural',
                            },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: 'OfficeDashboardPage.pilot.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Sarah Rodriguez',
                            },
                        },
                        status: {
                            labelKey: 'OfficeDashboardPage.status.label',
                            labeledBadgeXVM: {
                                type: 'preparing',
                                textKey:
                                    'OfficeDashboardPage.status.preparing.text',
                            },
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.status.preparing.text',
                            },
                        },
                        actions: {
                            labelKey: 'OfficeDashboardPage.actions.label',
                            anchorXVMs: [
                                {
                                    type: 'manage',
                                    textKey:
                                        'OfficeDashboardPage.actions.manage',
                                },
                                {
                                    type: 'reassign',
                                    textKey:
                                        'OfficeDashboardPage.actions.reassign',
                                },
                            ],
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: 'OfficeDashboardPage.id.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'B-78903',
                            },
                        },
                        fieldName: {
                            labelKey: 'OfficeDashboardPage.fieldName.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'North Meadow',
                            },
                        },
                        areaInHa: {
                            labelKey: 'OfficeDashboardPage.areaInHa.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 90.4,
                            },
                        },
                        client: {
                            labelKey: 'OfficeDashboardPage.client.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Westbrook Agricultural',
                            },
                        },
                        pilot: {
                            type: 'unassigned',
                            labelKey: 'OfficeDashboardPage.pilot.label',
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.pilot.unassigned.text',
                            },
                        },
                        status: {
                            labelKey: 'OfficeDashboardPage.status.label',
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey:
                                    'OfficeDashboardPage.status.pending.text',
                            },
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.status.pending.text',
                            },
                        },
                        actions: {
                            labelKey: 'OfficeDashboardPage.actions.label',
                            anchorXVMs: [
                                {
                                    type: 'manage',
                                    textKey:
                                        'OfficeDashboardPage.actions.manage',
                                },
                                {
                                    type: 'assign',
                                    textKey:
                                        'OfficeDashboardPage.actions.assign',
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            titleKey: 'OfficeDashboardPage.completedMissions.title',
            headerKeys: [
                'OfficeDashboardPage.id.header',
                'OfficeDashboardPage.client.header',
                'OfficeDashboardPage.fieldName.header',
                'OfficeDashboardPage.pilot.header',
                'OfficeDashboardPage.completionDate.header',
                'OfficeDashboardPage.performance.header',
                'OfficeDashboardPage.actions.header',
            ],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'completedMission',
                        id: {
                            labelKey: 'OfficeDashboardPage.id.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'B-78904',
                            },
                        },
                        fieldName: {
                            labelKey: 'OfficeDashboardPage.fieldName.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'East Meadow',
                            },
                        },
                        completionDate: {
                            labelKey:
                                'OfficeDashboardPage.completionDate.label',
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.completionDate.value',
                                params: { date: new Date() },
                            },
                        },
                        client: {
                            labelKey: 'OfficeDashboardPage.client.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Westbrook Agricultural',
                            },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: 'OfficeDashboardPage.pilot.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Sarah Johnson',
                            },
                        },
                        performance: {
                            labelKey: 'OfficeDashboardPage.performance.label',
                            labeledBadgeXVM: {
                                type: 'excellent',
                                textKey:
                                    'OfficeDashboardPage.performance.excellent.text',
                            },
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.performance.excellent.text',
                            },
                        },
                        actions: {
                            labelKey: 'OfficeDashboardPage.actions.label',
                            anchorXVMs: [
                                {
                                    type: 'report',
                                    textKey:
                                        'OfficeDashboardPage.actions.report',
                                },
                            ],
                        },
                    },
                    {
                        type: 'completedMission',
                        id: {
                            labelKey: 'OfficeDashboardPage.id.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'B-78905',
                            },
                        },
                        fieldName: {
                            labelKey: 'OfficeDashboardPage.fieldName.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'North Meadow',
                            },
                        },
                        completionDate: {
                            labelKey:
                                'OfficeDashboardPage.completionDate.label',
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.completionDate.value',
                                params: { date: new Date() },
                            },
                        },
                        client: {
                            labelKey: 'OfficeDashboardPage.client.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Westbrook Agricultural',
                            },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: 'OfficeDashboardPage.pilot.label',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Sarah Parker',
                            },
                        },
                        performance: {
                            labelKey: 'OfficeDashboardPage.performance.label',
                            labeledBadgeXVM: {
                                type: 'good',
                                textKey:
                                    'OfficeDashboardPage.performance.good.text',
                            },
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OfficeDashboardPage.performance.good.text',
                            },
                        },
                        actions: {
                            labelKey: 'OfficeDashboardPage.actions.label',
                            anchorXVMs: [
                                {
                                    type: 'report',
                                    textKey:
                                        'OfficeDashboardPage.actions.report',
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
export const enMock = {
    grid1: {
        anchor: {
            text: 'anch1',
        },
        title: 'tit1',
        header: {
            key1: '1',
            key2: '2',
            key3: '3',
        },
        mission1: {
            id: {
                label: 'id1',
            },
            areaInHa: {
                label: 'area1',
            },
            actions: {
                text: 'anchor1',
                label: 'lab1',
                report: {
                    text: 'reo',
                },
                reassign: {
                    text: 'rea',
                },
                assign: {
                    text: 'assi',
                },
                manage: {
                    text: 'man',
                },
            },
            fieldName: {
                label: 'field1',
            },
            client: {
                label: 'sched1',
            },
            completion: {
                label: 'complet',
            },
            pilot: {
                label: 'pilot1',
            },
            status: {
                label: 'stat1',
                text: 'text1',
            },
        },
        mission2: {
            client: {
                label: 'sched2',
            },
            completion: {
                label: 'complet',
            },
            pilot: {
                label: 'pilot2',
            },
            id: {
                label: 'id2',
            },
            areaInHa: {
                label: 'area2',
            },
            actions: {
                text: 'anchor2',
                label: 'lab2',
            },
            fieldName: {
                label: 'field2',
            },

            status: {
                label: 'stat2',
                text: 'text2',
            },
            performance: {
                label: 'perf2',
                text: 'perftext2',
            },
        },
        mission3: {
            performance: {
                label: 'perf2',
                text: 'perftext2',
            },
            client: {
                label: 'sched4',
            },
            completion: {
                label: 'complet3',
            },
            pilot: {
                label: 'pilot3',
            },
            id: {
                label: 'id3',
            },
            areaInHa: {
                label: 'area3',
            },
            actions: {
                text: 'anchor3',
                label: 'lab3',
            },
            fieldName: {
                label: 'field3',
            },
            scheduled: {
                label: 'sched3',
            },
            status: {
                label: 'stat3',
                text: 'text3',
            },
        },
    },
    grid2: {
        title: 'tit2',
    },
    grid3: {
        title: 'tit3',
    },
};

export const mockVM: OfficeDashboardPageVM = {
    gridXVMs: [],
};
export const mockVMWithoutGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [],
};
export const mockVMWithOneGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithThreeGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
        {
            titleKey: enMock.grid2.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
        {
            titleKey: enMock.grid3.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithAnchorInGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            anchor: {
                textKey: enMock.grid1.anchor.text,
            },
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithoutHeaderKeysInGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithOneHeaderKeyInGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [enMock.grid1.header.key1],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithThreeHeaderKeysInGridXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [
                enMock.grid1.header.key1,
                enMock.grid1.header.key2,
                enMock.grid1.header.key3,
            ],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithoutMissionXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [],
            },
        },
    ],
};
export const mockVMWithOneMissionXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
export const mockVMWithThreeMissionXVM: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission2.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission2.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission2.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission2.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission2.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission2.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission2.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission2.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission3.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission3.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission3.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission3.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission3.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission3.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission3.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission3.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
export const mockVMWithDifferentMissionXVMTypes: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                    {
                        type: 'completedMission',
                        id: {
                            labelKey: enMock.grid1.mission2.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        completionDate: {
                            labelKey: enMock.grid1.mission2.completion.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        performance: {
                            labelKey: enMock.grid1.mission2.performance.label,
                            labeledBadgeXVM: {
                                type: 'excellent',
                                textKey: enMock.grid1.mission2.performance.text,
                            },
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission2.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission2.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission2.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission2.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission3.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission3.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission3.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission3.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission3.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission3.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission3.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission3.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
export const mockVMWithDifferentActiveMissionXVMTypes: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission2.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission2.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        status: {
                            labelKey: enMock.grid1.mission2.status.label,
                            labeledBadgeXVM: {
                                type: 'preparing',
                                textKey: enMock.grid1.mission2.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission2.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission2.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission2.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission2.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission3.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission3.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission3.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission3.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission3.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission3.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission3.status.label,
                            labeledBadgeXVM: {
                                type: 'scheduled',
                                textKey: enMock.grid1.mission3.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
export const mockVMWithDifferentCompletedMissionXVMTypes: OfficeDashboardPageVM =
    {
        gridXVMs: [
            {
                titleKey: enMock.grid1.title,
                headerKeys: [],
                gridItemListXVM: {
                    gridItemXVMs: [
                        {
                            type: 'completedMission',
                            id: {
                                labelKey: enMock.grid1.mission2.id.label,
                                valueVM: {
                                    type: 'withoutValueKey',
                                    value: 1,
                                },
                            },
                            completionDate: {
                                labelKey:
                                    enMock.grid1.mission2.completion.label,
                                valueVM: {
                                    type: 'withoutValueKey',
                                    value: 1,
                                },
                            },
                            performance: {
                                labelKey:
                                    enMock.grid1.mission2.performance.label,
                                labeledBadgeXVM: {
                                    type: 'excellent',
                                    textKey:
                                        enMock.grid1.mission2.performance.text,
                                },
                                valueVM: {
                                    type: 'withoutValueKey',
                                    value: 1,
                                },
                            },
                            actions: {
                                labelKey: enMock.grid1.mission2.actions.label,
                                anchorXVMs: [],
                            },
                            fieldName: {
                                labelKey: enMock.grid1.mission2.fieldName.label,
                                valueVM: { type: 'withoutValueKey', value: 1 },
                            },
                            client: {
                                labelKey: enMock.grid1.mission2.client.label,
                                valueVM: { type: 'withoutValueKey', value: 1 },
                            },
                            pilot: {
                                type: 'assigned',
                                labelKey: enMock.grid1.mission2.pilot.label,
                                valueVM: { type: 'withoutValueKey', value: 1 },
                            },
                        },
                        {
                            type: 'completedMission',
                            id: {
                                labelKey: enMock.grid1.mission3.id.label,
                                valueVM: {
                                    type: 'withoutValueKey',
                                    value: 1,
                                },
                            },
                            completionDate: {
                                labelKey:
                                    enMock.grid1.mission3.completion.label,
                                valueVM: {
                                    type: 'withoutValueKey',
                                    value: 1,
                                },
                            },
                            performance: {
                                labelKey:
                                    enMock.grid1.mission3.performance.label,
                                labeledBadgeXVM: {
                                    type: 'good',
                                    textKey:
                                        enMock.grid1.mission3.performance.text,
                                },
                                valueVM: {
                                    type: 'withoutValueKey',
                                    value: 1,
                                },
                            },
                            actions: {
                                labelKey: enMock.grid1.mission3.actions.label,
                                anchorXVMs: [],
                            },
                            fieldName: {
                                labelKey: enMock.grid1.mission3.fieldName.label,
                                valueVM: { type: 'withoutValueKey', value: 1 },
                            },
                            client: {
                                labelKey: enMock.grid1.mission3.client.label,
                                valueVM: { type: 'withoutValueKey', value: 1 },
                            },
                            pilot: {
                                type: 'assigned',
                                labelKey: enMock.grid1.mission3.pilot.label,
                                valueVM: { type: 'withoutValueKey', value: 1 },
                            },
                        },
                    ],
                },
            },
        ],
    };
export const mockVMWithAssignedMission: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'assigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
export const mockVMWithUnassignedMission: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'unassigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
export const mockVMWithAllActionTypesInMission: OfficeDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            gridItemListXVM: {
                gridItemXVMs: [
                    {
                        type: 'activeMission',
                        id: {
                            labelKey: enMock.grid1.mission1.id.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        areaInHa: {
                            labelKey: enMock.grid1.mission1.areaInHa.label,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        actions: {
                            labelKey: enMock.grid1.mission1.actions.label,
                            anchorXVMs: [
                                {
                                    type: 'assign',
                                    textKey:
                                        enMock.grid1.mission1.actions.assign
                                            .text,
                                },
                                {
                                    type: 'manage',
                                    textKey:
                                        enMock.grid1.mission1.actions.manage
                                            .text,
                                },
                                {
                                    type: 'reassign',
                                    textKey:
                                        enMock.grid1.mission1.actions.reassign
                                            .text,
                                },
                                {
                                    type: 'report',
                                    textKey:
                                        enMock.grid1.mission1.actions.report
                                            .text,
                                },
                            ],
                        },
                        fieldName: {
                            labelKey: enMock.grid1.mission1.fieldName.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        client: {
                            labelKey: enMock.grid1.mission1.client.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        pilot: {
                            type: 'unassigned',
                            labelKey: enMock.grid1.mission1.pilot.label,
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                        status: {
                            labelKey: enMock.grid1.mission1.status.label,
                            labeledBadgeXVM: {
                                type: 'pending',
                                textKey: enMock.grid1.mission1.status.text,
                            },
                            valueVM: { type: 'withoutValueKey', value: 1 },
                        },
                    },
                ],
            },
        },
    ],
};
