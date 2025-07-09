import { GridColsLength } from '@components/grid-section/components/grid/grid.model';
import { OfficeDashboardPageConfig } from './office-dashboard-page.model';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { Order } from '@services/order/order.service.model';

export const officeDashboardPageConfig: OfficeDashboardPageConfig = {
    missionConfig: {
        completionDate: {
            titleKey: 'DashboardPage.completionDate.title',
            valueKey: 'DashboardPage.completionDate.dateValue',
        },
        areaInHa: {
            titleKey: 'DashboardPage.areaInHa.title',
        },
        client: { titleKey: 'DashboardPage.client.title' },
        fieldName: { titleKey: 'DashboardPage.fieldName.title' },
        id: { titleKey: 'DashboardPage.id.title' },
        status: { titleKey: 'DashboardPage.status.title' },
        performance: { titleKey: 'DashboardPage.performance.title' },
        pilot: {
            titleKey: 'DashboardPage.pilot.title',
            textColor: 'text-red-500',
            unassignedTextKey: 'DashboardPage.pilot.unassignedText',
        },
        actions: {
            assign: {
                textKey: 'DashboardPage.office.action.assign.text',
                textColor: 'text-green-500',
            },
            manage: {
                textKey: 'DashboardPage.office.action.manage.text',
                textColor: 'text-blue-500',
            },
            reassign: {
                textKey: 'DashboardPage.office.action.reassign.text',
                textColor: 'text-red-500',
            },
            report: {
                textKey: 'DashboardPage.office.action.report.text',
                textColor: 'text-blue-500',
            },
        },
    },
    activeMissionsGridConfig: {
        navigationAnchor: {
            textKey: 'DashboardPage.office.activeMissions.anchor.text',
            routerLink: [AppRouteSegment.LANDING],
        },
        titleKey: 'DashboardPage.office.activeMissions.title',
        gridColsLength: GridColsLength.SEVEN,
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.client.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.pilot.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.status.title',
            'DashboardPage.actions.title',
        ],
    },
    completedMissionsGridConfig: {
        titleKey: 'DashboardPage.office.recentCompletedMissions.title',
        gridColsLength: GridColsLength.SEVEN,
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.client.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.pilot.title',
            'DashboardPage.completionDate.title',
            'DashboardPage.performance.title',
            'DashboardPage.actions.title',
        ],
    },
};

export const enMock = {
    completionDate: { title: 'ti', value: 'val' },
    areaInHa: { title: 'area' },
    client: { title: 'cli' },
    fieldName: { title: 'field' },
    id: { title: 'i' },
    status: { title: 'stat' },
    performance: { title: 'per' },
    pilot: { title: 'pil', unassignedText: 'unassigned' },
    actions: {
        title: 'act',
        assign: { text: 'assignT' },
        report: { text: 'reportText' },
        manage: { text: 'manageT' },
        reassign: { text: 'reassignT' },
    },
    activeMissions: {
        title: 'assigned',
        anchor: { text: 'anchor' },
    },
    completedMissions: {
        title: 'completed',
    },
};
export const officeDashboardPageConfigMock: OfficeDashboardPageConfig = {
    missionConfig: {
        completionDate: {
            titleKey: enMock.completionDate.title,
            valueKey: enMock.completionDate.value,
        },
        areaInHa: { titleKey: enMock.areaInHa.title },
        pilot: {
            titleKey: enMock.pilot.title,
            unassignedTextKey: enMock.pilot.unassignedText,
            textColor: 'text-red-500',
        },
        client: { titleKey: enMock.client.title },
        fieldName: { titleKey: enMock.fieldName.title },
        id: { titleKey: enMock.id.title },
        status: { titleKey: enMock.status.title },
        performance: { titleKey: enMock.performance.title },
        actions: {
            assign: {
                textKey: enMock.actions.assign.text,
                textColor: 'text-blue-500',
            },
            manage: {
                textKey: enMock.actions.manage.text,
                textColor: 'text-blue-500',
            },
            reassign: {
                textKey: enMock.actions.reassign.text,
                textColor: 'text-blue-500',
            },
            report: {
                textKey: enMock.actions.report.text,
                textColor: 'text-blue-500',
            },
        },
    },
    activeMissionsGridConfig: {
        navigationAnchor: { textKey: enMock.activeMissions.anchor.text },
        titleKey: enMock.activeMissions.title,
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            enMock.id.title,
            enMock.client.title,
            enMock.fieldName.title,
            enMock.pilot.title,
            enMock.areaInHa.title,
            enMock.status.title,
            enMock.actions.title,
        ],
    },
    completedMissionsGridConfig: {
        titleKey: enMock.completedMissions.title,
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            enMock.id.title,
            enMock.client.title,
            enMock.fieldName.title,
            enMock.pilot.title,
            enMock.completionDate.title,
            enMock.performance.title,
            enMock.actions.title,
        ],
    },
};

export const oneActiveMission: Order = {
    id: 'B-78901',
    status: 'active',
    moneyValue: 2100,
    client: {
        client: 'Westbrook Agricultural Holdings',
        contact: 'Sarah Johnson',
        email: 's.johnson@westbrook-ag.com',
        phone: '(555) 789-1234',
        address: '450 Farm Road, Westbrook County',
    },
    summary: {
        treatment: 'Seasonal Pest Control',
        averageDose: 2.5,
        totalSupply: 868.75,
        orderValue: 34750.0,
    },
    createdDate: new Date('2025-03-28'),
    totalArea: 347.5,
    missions: [
        {
            id: '1',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            scheduledDate: new Date(),
            status: 'pending',
        },
        {
            id: '2',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Wayne Rooney',
            scheduledDate: new Date(),
            status: 'pending',
        },
    ],
    messages: [],
};

export const threeActiveMissions: Order = {
    id: 'B-78901',
    status: 'active',
    moneyValue: 2100,
    client: {
        client: 'Westbrook Agricultural Holdings',
        contact: 'Sarah Johnson',
        email: 's.johnson@westbrook-ag.com',
        phone: '(555) 789-1234',
        address: '450 Farm Road, Westbrook County',
    },
    summary: {
        treatment: 'Seasonal Pest Control',
        averageDose: 2.5,
        totalSupply: 868.75,
        orderValue: 34750.0,
    },
    createdDate: new Date('2025-03-28'),
    totalArea: 347.5,
    missions: [
        {
            id: '1',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            scheduledDate: new Date(),
            status: 'pending',
        },
        {
            id: '2',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Wayne Rooney',
            scheduledDate: new Date(),
            status: 'pending',
        },
        {
            id: '3',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            scheduledDate: new Date(),
            status: 'pending',
        },
        {
            id: '4',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            scheduledDate: new Date(),
            status: 'pending',
        },
    ],
    messages: [],
};

export const oneCompletedMission: Order = {
    id: 'B-78901',
    status: 'active',
    moneyValue: 2100,
    client: {
        client: 'Westbrook Agricultural Holdings',
        contact: 'Sarah Johnson',
        email: 's.johnson@westbrook-ag.com',
        phone: '(555) 789-1234',
        address: '450 Farm Road, Westbrook County',
    },
    summary: {
        treatment: 'Seasonal Pest Control',
        averageDose: 2.5,
        totalSupply: 868.75,
        orderValue: 34750.0,
    },
    createdDate: new Date('2025-03-28'),
    totalArea: 347.5,
    missions: [
        {
            id: '5',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            completionDate: new Date(),
            performance: 'excellent',
        },
        {
            id: '6',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Wayne Rooney',
            completionDate: new Date(),
            performance: 'excellent',
        },
    ],
    messages: [],
};

export const threeCompletedMissions: Order = {
    id: 'B-78901',
    status: 'active',
    moneyValue: 2100,
    client: {
        client: 'Westbrook Agricultural Holdings',
        contact: 'Sarah Johnson',
        email: 's.johnson@westbrook-ag.com',
        phone: '(555) 789-1234',
        address: '450 Farm Road, Westbrook County',
    },
    summary: {
        treatment: 'Seasonal Pest Control',
        averageDose: 2.5,
        totalSupply: 868.75,
        orderValue: 34750.0,
    },
    createdDate: new Date('2025-03-28'),
    totalArea: 347.5,
    missions: [
        {
            id: '5',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            completionDate: new Date(),
            performance: 'excellent',
        },
        {
            id: '6',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Wayne Rooney',
            completionDate: new Date(),
            performance: 'excellent',
        },
        {
            id: '7',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            completionDate: new Date(),
            performance: 'excellent',
        },
        {
            id: '8',
            areaInHa: 10,
            fieldName: 'field',
            pilot: 'Alex Rodriguez',
            completionDate: new Date(),
            performance: 'excellent',
        },
    ],
    messages: [],
};
