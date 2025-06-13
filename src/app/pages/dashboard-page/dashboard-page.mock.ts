import { DashboardPageConfig } from './dashboard-page.model';
import {
    Order,
    MissionType,
    SummaryItem,
} from './dashboard-page.service.model';

export const orders: Order[] = [
    {
        id: 'B-78901',
        creationDate: new Date(),
        totalAreaInHa: 347.5,
        status: 'active',
        moneyValue: 34750,
        requester: 'Sarah Johnson',
    },
    {
        id: 'B-78902',
        creationDate: new Date(),
        totalAreaInHa: 125.8,
        status: 'completed',
        moneyValue: 12580,
        requester: 'Sarah Johnson',
    },
    {
        id: 'B-78903',
        creationDate: new Date(),
        totalAreaInHa: 89.2,
        status: 'pending',
        moneyValue: 8920,
        requester: 'Mike Thompson',
    },
    {
        id: 'B-78904',
        creationDate: new Date(),
        totalAreaInHa: 234.7,
        status: 'active',
        moneyValue: 23470,
        requester: 'Lisa Martinez',
    },
];

export const missions: MissionType[] = [
    {
        id: 'A-12345',
        client: 'Westbrook Agricultural',
        fieldName: 'North Field',
        pilot: 'Alex Rodriguez',
        areaInHa: 45.8,

        scheduledDate: new Date(),
        status: 'scheduled',
    },
    {
        id: 'A-12346',
        client: 'Westbrook Agricultural',
        fieldName: 'South Field',
        pilot: 'Maria Santos',
        areaInHa: 78.3,

        scheduledDate: new Date(),
        status: 'preparing',
    },
    {
        id: 'A-12347',
        client: 'Westbrook Agricultural',
        fieldName: 'East Meadow',
        pilot: null,
        areaInHa: 102.4,

        scheduledDate: new Date(),
        status: 'pending',
    },
    {
        id: 'A-12348',
        client: 'Westbrook Agricultural',
        fieldName: 'West Orchard',
        pilot: 'Alex Rodriguez',
        areaInHa: 100,

        completionDate: new Date(),
        performance: 'excellent',
    },
    {
        id: 'A-12349',
        client: 'Westbrook Agricultural',
        fieldName: 'Central Vineyard',
        pilot: 'Maria Santos',
        areaInHa: 64.8,

        completionDate: new Date(),
        performance: 'good',
    },

    {
        id: 'A-12350',
        client: 'Westbrook Agricultural',
        fieldName: 'Valley Ridge',
        areaInHa: 67.3,
        pilot: 'Alex Rodriguez',

        scheduledDate: new Date(),
        status: 'preparing',
    },
];

export const dashboardPageConfig: DashboardPageConfig = {
    viewDetailsAction: {
        textKey: 'DashboardPage.action.details.text',
        textColor: 'text-blue-500',
    },
    assignAction: {
        textKey: 'DashboardPage.action.assign.text',
        textColor: 'text-green-500',
    },
    manageAction: {
        textKey: 'DashboardPage.action.manage.text',
        textColor: 'text-blue-500',
    },
    reassignAction: {
        textKey: 'DashboardPage.action.reassign.text',
        textColor: 'text-red-500',
    },
    viewReportAction: {
        textKey: 'DashboardPage.action.report.text',
        textColor: 'text-blue-500',
    },
    viewMissionAction: {
        textKey: 'DashboardPage.action.mission.text',
        textColor: 'text-blue-500',
    },
    assignments: {
        moneyValue: {
            titleKey: 'DashboardPage.moneyValue.title',
            valueKey: 'DashboardPage.moneyValue',
        },
        creationDate: {
            titleKey: 'DashboardPage.creationDate.title',
            valueKey: 'DashboardPage.dateValue',
        },
        completionDate: {
            titleKey: 'DashboardPage.completionDate.title',
            valueKey: 'DashboardPage.dateValue',
        },
        scheduledDate: {
            titleKey: 'DashboardPage.scheduledDate.title',
            valueKey: 'DashboardPage.dateValue',
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
    },
    userHeaderVM: {
        titleKey: 'DashboardPage.title',
        dateKey: 'DashboardPage.date',
        roleDashboardKey: 'DashboardPage.roleDashboard',
        loginTextKey: 'DashboardPage.userHeader.loginText',
    },

    operationsActiveMissions: {
        type: 'office',
        titleKey: 'DashboardPage.operationsActiveMissions.title',
        gridColsLength: 'grid-cols-7',
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.client.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.pilot.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.status.title',
            'DashboardPage.actions.title',
        ],
        navigationAnchor: null,
    },
    operationsRecentCompletedMissions: {
        type: 'office',
        titleKey: 'DashboardPage.operationsRecentCompletedMissions.title',
        gridColsLength: 'grid-cols-7',
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.client.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.pilot.title',
            'DashboardPage.completionDate.title',
            'DashboardPage.performance.title',
            'DashboardPage.actions.title',
        ],
        navigationAnchor: null,
    },
    pilotMyAssignedMissions: {
        type: 'pilot',
        titleKey: 'DashboardPage.pilotMyAssignedMissions.title',
        gridColsLength: 'grid-cols-6',
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.scheduledDate.title',
            'DashboardPage.status.title',
            'DashboardPage.actions.title',
        ],
        navigationAnchor: null,
    },
    pilotMyCompletedMissions: {
        type: 'pilot',
        titleKey: 'DashboardPage.pilotMyCompletedMissions.title',
        gridColsLength: 'grid-cols-6',
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.fieldName.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.completionDate.title',
            'DashboardPage.performance.title',
            'DashboardPage.actions.title',
        ],
        navigationAnchor: null,
    },
    customerMyOrders: {
        type: 'customer',
        titleKey: 'DashboardPage.myOrders.title',
        gridColsLength: 'grid-cols-6',
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.creationDate.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.status.title',
            'DashboardPage.moneyValue.title',
            'DashboardPage.actions.title',
        ],
        navigationAnchor: null,
    },
    customerCompanyOrders: {
        type: 'customer',
        titleKey: 'DashboardPage.companyOrders.title',
        gridColsLength: 'grid-cols-6',
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.requester.title',
            'DashboardPage.creationDate.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.status.title',
            'DashboardPage.moneyValue.title',
        ],
        navigationAnchor: null,
    },
};

export const summaries: SummaryItem[] = [
    {
        allowedRole: 'customer',
        titleKey: 'DashboardPage.summary.activeOrder.title',
        emoji: '📋',
        quantity: 2,
        unitType: 'base',
        colorType: 'blue',
    },
    {
        allowedRole: 'customer',
        titleKey: 'DashboardPage.summary.totalArea.title',
        emoji: '🌾',
        quantity: 145,
        unitType: 'hectare',
        colorType: 'green',
    },
    {
        allowedRole: 'customer',
        titleKey: 'DashboardPage.summary.spending.title',
        emoji: '💰',
        quantity: 126000,
        unitType: 'money',
        colorType: 'purple',
    },
    {
        allowedRole: 'customer',
        titleKey: 'DashboardPage.summary.pending.title',
        emoji: '⏳',
        quantity: 3,
        unitType: 'base',
        colorType: 'yellow',
    },
    {
        allowedRole: 'pilot',
        titleKey: 'DashboardPage.summary.assignedMissions',
        emoji: '🎯',
        quantity: 2,
        unitType: 'base',
        colorType: 'blue',
    },
    {
        allowedRole: 'pilot',
        titleKey: 'DashboardPage.summary.completed',
        emoji: '✅',
        quantity: 8,
        unitType: 'base',
        colorType: 'green',
    },
    {
        allowedRole: 'pilot',
        titleKey: 'DashboardPage.summary.flight.title',
        emoji: '🚁',
        quantity: 47.5,
        unitType: 'hour',
        colorType: 'purple',
    },
    {
        allowedRole: 'pilot',
        titleKey: 'DashboardPage.summary.performance.title',
        emoji: '⭐',
        quantity: 4.8,
        unitType: 'rating',
        colorType: 'yellow',
    },
    {
        allowedRole: 'office',
        titleKey: 'DashboardPage.summary.activeMission.title',
        emoji: '🎮',
        quantity: 12,
        unitType: 'base',
        colorType: 'blue',
    },
    {
        allowedRole: 'office',
        titleKey: 'DashboardPage.summary.availablePilots.title',
        emoji: '👨‍✈️',
        quantity: 5,
        unitType: 'base',
        colorType: 'green',
    },
    {
        allowedRole: 'office',
        titleKey: 'DashboardPage.summary.unassigned.title',
        emoji: '⚠️',
        quantity: 3,
        unitType: 'base',
        colorType: 'red',
    },
    {
        allowedRole: 'office',
        titleKey: 'DashboardPage.summary.revenue.title',
        emoji: '💼',
        quantity: 12450,
        unitType: 'money',
        colorType: 'purple',
    },
];
