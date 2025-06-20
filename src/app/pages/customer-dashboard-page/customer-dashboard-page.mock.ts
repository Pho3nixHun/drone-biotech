import { AppRouteSegment } from 'src/app/app-route-segment';
import { CustomerDashboardPageConfig } from './customer-dashboard-page.model';
import { GridColsLength } from '@components/grid-section/components/grid/grid.model';
import { Order } from '@services/order/order.service.model';

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

export const twoOrders: Order[] = [
    {
        id: '1',
        requester: 'Raul',
        creationDate: new Date(),
        moneyValue: 10,
        status: 'active',
        totalAreaInHa: 100,
    },
    {
        id: '2',
        requester: 'Alex',
        creationDate: new Date(),
        moneyValue: 110,
        status: 'pending',
        totalAreaInHa: 20,
    },
];

export const fiveOrders: Order[] = [
    {
        id: '1',
        requester: 'Raul',
        creationDate: new Date(),
        moneyValue: 10,
        status: 'active',
        totalAreaInHa: 100,
    },
    {
        id: '2',
        requester: 'Alex',
        creationDate: new Date(),
        moneyValue: 110,
        status: 'pending',
        totalAreaInHa: 20,
    },
    {
        id: '3',
        requester: 'Alex',
        creationDate: new Date(),
        moneyValue: 110,
        status: 'pending',
        totalAreaInHa: 20,
    },
    {
        id: '4',
        requester: 'Alex',
        creationDate: new Date(),
        moneyValue: 110,
        status: 'pending',
        totalAreaInHa: 20,
    },
    {
        id: '5',
        requester: 'Raul',
        creationDate: new Date(),
        moneyValue: 110,
        status: 'pending',
        totalAreaInHa: 20,
    },
];

export const enMock = {
    creationDate: { title: 'ti', value: 'val' },
    areaInHa: { title: 'area' },
    id: { title: 'i' },
    status: { title: 'stat' },
    action: {
        details: {
            text: 'act',
        },
        title: 'action',
    },
    money: {
        title: 'mon',
        value: 'val',
    },
    requester: { title: 'request' },
    myOrders: {
        title: 'assigned',
        anchor: { text: 'anchor' },
    },
    companyOrders: {
        title: 'completed',
    },
};

export const customerDashboardPageConfigMock: CustomerDashboardPageConfig = {
    ordersConfig: {
        moneyValue: {
            titleKey: enMock.money.title,
            valueKey: enMock.money.value,
        },
        areaInHa: { titleKey: enMock.areaInHa.title },
        id: { titleKey: enMock.id.title },
        status: { titleKey: enMock.status.title },
        creationDate: {
            titleKey: enMock.creationDate.title,
            valueKey: enMock.creationDate.value,
        },
        requester: { titleKey: enMock.requester.title },
        action: {
            textKey: enMock.action.details.text,
            textColor: 'text-blue-500',
            routerLink: '',
        },
    },
    myOrdersGridConfig: {
        navigationAnchor: { textKey: enMock.myOrders.anchor.text },
        titleKey: enMock.myOrders.title,
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            enMock.id.title,
            enMock.creationDate.title,
            enMock.areaInHa.title,
            enMock.status.title,
            enMock.money.title,
            enMock.action.title,
        ],
    },
    companyOrdersGridConfig: {
        titleKey: enMock.companyOrders.title,
        gridColsLength: GridColsLength.SIX,
        headerKeys: [
            enMock.id.title,
            enMock.requester.title,
            enMock.creationDate.title,
            enMock.areaInHa.title,
            enMock.status.title,
            enMock.money.title,
        ],
    },
};
