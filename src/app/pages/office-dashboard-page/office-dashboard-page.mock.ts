import { GridColsLength } from '@components/grid-section/components/grid/grid.model';
import { OfficeDashboardPageConfig } from './office-dashboard-page.model';
import { AppRouteSegment } from 'src/app/app-route-segment';

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
