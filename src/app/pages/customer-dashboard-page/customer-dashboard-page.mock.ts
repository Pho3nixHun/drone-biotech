import { AppRouteSegment } from 'src/app/app-route-segment';
import { CustomerDashboardPageConfig } from './customer-dashboard-page.model';
import { GridColsLength } from '@components/grid-section/components/grid/grid.model';

export const customerDashboardPageConfig: CustomerDashboardPageConfig = {
    ordersConfig: {
        id: { titleKey: 'DashboardPage.id.title' },
        creationDate: {
            titleKey: 'DashboardPage.creationDate.title',
            valueKey: 'DashboardPage.creationDate.dateValue',
        },
        areaInHa: {
            titleKey: 'DashboardPage.areaInHa.title',
        },
        status: { titleKey: 'DashboardPage.status.title' },
        moneyValue: {
            titleKey: 'DashboardPage.moneyValue.title',
            valueKey: 'DashboardPage.moneyValue.value',
        },
        requester: {
            titleKey: 'DashboardPage.requester.title',
        },
        action: {
            textKey: 'DashboardPage.customer.action.details.text',
            textColor: 'text-blue-500',
            routerLink: [AppRouteSegment.ORDERS],
        },
    },
    myOrdersGridConfig: {
        titleKey: 'DashboardPage.customer.myOrders.title',
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.creationDate.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.status.title',
            'DashboardPage.moneyValue.title',
            'DashboardPage.actions.title',
        ],
        navigationAnchor: {
            textKey: 'DashboardPage.customer.myOrders.anchor.text',
            routerLink: [AppRouteSegment.LANDING],
        },
    },
    companyOrdersGridConfig: {
        titleKey: 'DashboardPage.customer.companyOrders.title',
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            'DashboardPage.id.title',
            'DashboardPage.requester.title',
            'DashboardPage.creationDate.title',
            'DashboardPage.areaInHa.title',
            'DashboardPage.status.title',
            'DashboardPage.moneyValue.title',
        ],
    },
};
