import { GridColsLength } from '@components/grid-section/components/grid/grid.model';
import { PilotDashboardPageConfig } from './pilot-dashboard-page.model';

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
