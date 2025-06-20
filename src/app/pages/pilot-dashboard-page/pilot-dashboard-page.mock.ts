import { GridColsLength } from '@components/grid-section/components/grid/grid.model';
import { PilotDashboardPageConfig } from './pilot-dashboard-page.model';
import {
    ActiveMission,
    CompletedMission,
} from '@services/mission/mission.service.model';
import { Summary } from '@services/summary/summary.service.model';

export const pilotDashboardPageConfig: PilotDashboardPageConfig = {
    missionConfig: {
        completionDate: {
            titleKey: 'DashboardPage.completionDate.title',
            valueKey: 'DashboardPage.completionDate.dateValue',
        },
        scheduledDate: {
            titleKey: 'DashboardPage.scheduledDate.title',
            valueKey: 'DashboardPage.scheduledDate.dateValue',
        },
        areaInHa: {
            titleKey: 'DashboardPage.areaInHa.title',
        },
        requester: {
            titleKey: 'DashboardPage.requester.title',
        },
        client: { titleKey: 'DashboardPage.client.title' },
        fieldName: { titleKey: 'DashboardPage.fieldName.title' },
        id: { titleKey: 'DashboardPage.id.title' },
        status: { titleKey: 'DashboardPage.status.title' },
        performance: { titleKey: 'DashboardPage.performance.title' },
        pilot: { titleKey: 'DashboardPage.pilot.title' },
        actions: {
            mission: {
                textKey: 'DashboardPage.pilot.action.report.text',
                textColor: 'text-blue-500',
            },
            report: {
                textKey: 'DashboardPage.pilot.action.mission.text',
                textColor: 'text-blue-500',
            },
        },
    },
    assignedMissionsGridConfig: {
        titleKey: 'DashboardPage.pilot.assignedMissions.title',
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.scheduledDate.title',
            'DashboardPage.status.title',
            'DashboardPage.actions.title',
        ],
    },

    completedMissionsGridConfig: {
        titleKey: 'DashboardPage.pilot.completedMissions.title',
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.completionDate.title',
            'DashboardPage.performance.title',
            'DashboardPage.actions.title',
        ],
    },
};

export const enMock = {
    completionDate: { title: 'ti', value: 'val' },
    scheduledDate: { title: 'scheti', value: 'scheval' },
    areaInHa: { title: 'area' },
    requester: { title: 'req' },
    client: { title: 'cli' },
    fieldName: { title: 'field' },
    id: { title: 'i' },
    status: { title: 'stat' },
    performance: { title: 'per' },
    pilot: { title: 'pil' },
    actions: {
        title: 'act',
        mission: { text: 'missionText' },
        report: { text: 'reportText' },
    },
    assignedMissions: {
        title: 'assigned',
    },
    completedMissions: {
        title: 'completed',
    },
};
export const pilotDashboardPageConfigMock: PilotDashboardPageConfig = {
    missionConfig: {
        completionDate: {
            titleKey: enMock.completionDate.title,
            valueKey: enMock.completionDate.value,
        },
        scheduledDate: {
            titleKey: enMock.scheduledDate.title,
            valueKey: enMock.scheduledDate.title,
        },
        areaInHa: { titleKey: enMock.areaInHa.title },
        requester: { titleKey: enMock.requester.title },
        client: { titleKey: enMock.client.title },
        fieldName: { titleKey: enMock.fieldName.title },
        id: { titleKey: enMock.id.title },
        status: { titleKey: enMock.status.title },
        performance: { titleKey: enMock.performance.title },
        pilot: { titleKey: enMock.pilot.title },
        actions: {
            mission: {
                textKey: enMock.actions.mission.text,
                textColor: 'text-blue-500',
            },
            report: {
                textKey: enMock.actions.report.text,
                textColor: 'text-blue-500',
            },
        },
    },
    assignedMissionsGridConfig: {
        titleKey: enMock.assignedMissions.title,
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            enMock.id.title,
            enMock.fieldName.title,
            enMock.areaInHa.title,
            enMock.scheduledDate.title,
            enMock.status.title,
            enMock.actions.title,
        ],
    },
    completedMissionsGridConfig: {
        titleKey: enMock.completedMissions.title,
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            enMock.id.title,
            enMock.fieldName.title,
            enMock.areaInHa.title,
            enMock.completionDate.title,
            enMock.performance.title,
            enMock.actions.title,
        ],
    },
};

export const oneSummaryForPilot: Summary[] = [
    {
        allowedRole: 'pilot',
        colorType: 'blue',
        emoji: '&',
        quantity: 12,
        titleKey: 'title',
        unitType: 'hectare',
    },
    {
        allowedRole: 'office',
        colorType: 'purple',
        emoji: '@',
        quantity: 4,
        titleKey: 'title',
        unitType: 'rating',
    },
];

export const oneActiveMission: ActiveMission[] = [
    {
        id: '1',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        scheduledDate: new Date(),
        status: 'pending',
    },
    {
        id: '2',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Wayne Rooney',
        scheduledDate: new Date(),
        status: 'pending',
    },
];

export const threeActiveMissions: ActiveMission[] = [
    {
        id: '1',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        scheduledDate: new Date(),
        status: 'pending',
    },
    {
        id: '2',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Wayne Rooney',
        scheduledDate: new Date(),
        status: 'pending',
    },
    {
        id: '3',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        scheduledDate: new Date(),
        status: 'pending',
    },
    {
        id: '4',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        scheduledDate: new Date(),
        status: 'pending',
    },
];

export const oneCompletedMission: CompletedMission[] = [
    {
        id: '5',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        completionDate: new Date(),
        performance: 'excellent',
    },
    {
        id: '6',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Wayne Rooney',
        completionDate: new Date(),
        performance: 'excellent',
    },
];
export const threeCompletedMissions: CompletedMission[] = [
    {
        id: '5',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        completionDate: new Date(),
        performance: 'excellent',
    },
    {
        id: '6',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Wayne Rooney',
        completionDate: new Date(),
        performance: 'excellent',
    },
    {
        id: '7',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        completionDate: new Date(),
        performance: 'excellent',
    },
    {
        id: '8',
        areaInHa: 10,
        client: 'client',
        fieldName: 'field',
        pilot: 'Alex Rodriguez',
        completionDate: new Date(),
        performance: 'excellent',
    },
];
