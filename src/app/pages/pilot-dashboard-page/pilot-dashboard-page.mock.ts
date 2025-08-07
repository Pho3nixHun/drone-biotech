import {
    Performance,
    PilotDashboardPageVM,
    Status,
} from './pilot-dashboard-page.model';

export const pilotDashboardPageVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: 'PilotDashboardPage.assignedMissions.title',
            headerKeys: [
                'PilotDashboardPage.id.header',
                'PilotDashboardPage.fieldName.header',
                'PilotDashboardPage.areaInHa.header',
                'PilotDashboardPage.scheduledDate.header',
                'PilotDashboardPage.status.header',
                'PilotDashboardPage.actions.header',
            ],
            missionXVMs: [
                {
                    type: 'assigned',
                    id: {
                        labelKey: 'PilotDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78901',
                        },
                    },
                    fieldName: {
                        labelKey: 'PilotDashboardPage.fieldName.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'East Meadow',
                        },
                    },
                    areaInHa: {
                        labelKey: 'PilotDashboardPage.areaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 105.4,
                        },
                    },
                    scheduledDate: {
                        labelKey: 'PilotDashboardPage.scheduledDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.scheduledDate.value',
                            params: { date: new Date() },
                        },
                    },
                    status: {
                        labelKey: 'PilotDashboardPage.status.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.status.preparing',
                            params: {},
                        },
                        badgeXVM: {
                            textKey: 'PilotDashboardPage.status.preparing',
                            status: Status.PREPARING,
                        },
                    },

                    anchorXVM: {
                        labelKey: 'PilotDashboardPage.actions.label',
                        textKey: 'PilotDashboardPage.actions.mission.text',
                    },
                },
                {
                    type: 'assigned',
                    id: {
                        labelKey: 'PilotDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78902',
                        },
                    },
                    fieldName: {
                        labelKey: 'PilotDashboardPage.fieldName.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'North Meadow',
                        },
                    },
                    areaInHa: {
                        labelKey: 'PilotDashboardPage.areaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 34.2,
                        },
                    },
                    scheduledDate: {
                        labelKey: 'PilotDashboardPage.scheduledDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.scheduledDate.value',
                            params: { date: new Date() },
                        },
                    },
                    status: {
                        labelKey: 'PilotDashboardPage.status.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.status.scheduled',
                            params: {},
                        },
                        badgeXVM: {
                            textKey: 'PilotDashboardPage.status.scheduled',
                            status: Status.SCHEDULED,
                        },
                    },

                    anchorXVM: {
                        labelKey: 'PilotDashboardPage.actions.label',
                        textKey: 'PilotDashboardPage.actions.mission.text',
                    },
                },
            ],
        },
        {
            titleKey: 'PilotDashboardPage.completedMissions.title',
            headerKeys: [
                'PilotDashboardPage.id.header',
                'PilotDashboardPage.fieldName.header',
                'PilotDashboardPage.areaInHa.header',
                'PilotDashboardPage.completionDate.header',
                'PilotDashboardPage.performance.header',
                'PilotDashboardPage.actions.header',
            ],
            missionXVMs: [
                {
                    type: 'completed',
                    id: {
                        labelKey: 'PilotDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78903',
                        },
                    },
                    fieldName: {
                        labelKey: 'PilotDashboardPage.fieldName.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'South Meadow',
                        },
                    },
                    areaInHa: {
                        labelKey: 'PilotDashboardPage.areaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 45.5,
                        },
                    },
                    completionDate: {
                        labelKey: 'PilotDashboardPage.completionDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.completionDate.value',
                            params: { date: new Date() },
                        },
                    },
                    performance: {
                        labelKey: 'PilotDashboardPage.performance.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.performance.excellent',
                            params: {},
                        },
                        badgeXVM: {
                            textKey: 'PilotDashboardPage.performance.excellent',
                            performance: Performance.EXCELLENT,
                        },
                    },

                    anchorXVM: {
                        labelKey: 'PilotDashboardPage.actions.label',
                        textKey: 'PilotDashboardPage.actions.report.text',
                    },
                },
                {
                    type: 'completed',
                    id: {
                        labelKey: 'PilotDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78904',
                        },
                    },
                    fieldName: {
                        labelKey: 'PilotDashboardPage.fieldName.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'East Meadow',
                        },
                    },
                    areaInHa: {
                        labelKey: 'PilotDashboardPage.areaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 98.1,
                        },
                    },
                    completionDate: {
                        labelKey: 'PilotDashboardPage.completionDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.completionDate.value',
                            params: { date: new Date() },
                        },
                    },
                    performance: {
                        labelKey: 'PilotDashboardPage.performance.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'PilotDashboardPage.performance.good',
                            params: {},
                        },
                        badgeXVM: {
                            textKey: 'PilotDashboardPage.performance.good',
                            performance: Performance.GOOD,
                        },
                    },

                    anchorXVM: {
                        labelKey: 'PilotDashboardPage.actions.label',
                        textKey: 'PilotDashboardPage.actions.report.text',
                    },
                },
            ],
        },
    ],
};

export const enMock = {
    grid1: {
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
            anchor: {
                text: 'anchor1',
                label: 'lab1',
            },
            fieldName: {
                label: 'field1',
            },
            scheduled: {
                label: 'sched1',
            },
            completion: {
                label: 'complet',
            },
            status: {
                label: 'stat1',
                text: 'text1',
            },
        },
        mission2: {
            id: {
                label: 'id2',
            },
            areaInHa: {
                label: 'area2',
            },
            anchor: {
                text: 'anchor2',
                label: 'lab2',
            },
            fieldName: {
                label: 'field2',
            },
            scheduled: {
                label: 'sched2',
            },
            status: {
                label: 'stat2',
                text: 'text2',
            },
        },
        mission3: {
            id: {
                label: 'id3',
            },
            areaInHa: {
                label: 'area3',
            },
            anchor: {
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

export const mockVM: PilotDashboardPageVM = {
    gridXVMs: [],
};
export const mockVMWithoutGridXVM: PilotDashboardPageVM = {
    gridXVMs: [],
};
export const mockVMWithOneGridXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [],
        },
    ],
};
export const mockVMWithThreeGridXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [],
        },
        {
            titleKey: enMock.grid2.title,
            headerKeys: [],
            missionXVMs: [],
        },
        {
            titleKey: enMock.grid3.title,
            headerKeys: [],
            missionXVMs: [],
        },
    ],
};
export const mockVMWithoutHeaderKeysInGridXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [],
        },
    ],
};
export const mockVMWithOneHeaderKeyInGridXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [enMock.grid1.header.key1],
            missionXVMs: [],
        },
    ],
};
export const mockVMWithThreeHeaderKeysInGridXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [
                enMock.grid1.header.key1,
                enMock.grid1.header.key2,
                enMock.grid1.header.key3,
            ],
            missionXVMs: [],
        },
    ],
};
export const mockVMWithoutMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [],
        },
    ],
};
export const mockVMWithOneMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [
                {
                    type: 'assigned',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission1.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    scheduledDate: {
                        labelKey: enMock.grid1.mission1.scheduled.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.PREPARING,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithThreeMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [
                {
                    type: 'assigned',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission1.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    scheduledDate: {
                        labelKey: enMock.grid1.mission1.scheduled.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.PREPARING,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
                {
                    type: 'assigned',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission2.anchor.text,
                        labelKey: enMock.grid1.mission2.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission2.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    scheduledDate: {
                        labelKey: enMock.grid1.mission2.scheduled.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission2.status.label,
                        badgeXVM: {
                            status: Status.PREPARING,
                            textKey: enMock.grid1.mission2.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
                {
                    type: 'assigned',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission3.anchor.text,
                        labelKey: enMock.grid1.mission3.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission3.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    scheduledDate: {
                        labelKey: enMock.grid1.mission3.scheduled.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission3.status.label,
                        badgeXVM: {
                            status: Status.PREPARING,
                            textKey: enMock.grid1.mission3.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOneScheduledAssignedMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [
                {
                    type: 'assigned',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission1.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    scheduledDate: {
                        labelKey: enMock.grid1.mission1.scheduled.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.SCHEDULED,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOnePreparingAssignedMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [
                {
                    type: 'assigned',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission1.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    scheduledDate: {
                        labelKey: enMock.grid1.mission1.scheduled.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.PREPARING,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOneExcellentCompletedMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [
                {
                    type: 'completed',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission1.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    completionDate: {
                        labelKey: enMock.grid1.mission1.completion.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    performance: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            performance: Performance.EXCELLENT,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOneGoodCompletedMissionXVM: PilotDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            missionXVMs: [
                {
                    type: 'completed',
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
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },
                    fieldName: {
                        labelKey: enMock.grid1.mission1.fieldName.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    completionDate: {
                        labelKey: enMock.grid1.mission1.completion.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    performance: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            performance: Performance.GOOD,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
