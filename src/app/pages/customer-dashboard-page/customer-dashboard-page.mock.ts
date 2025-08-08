import { AppRouteSegment } from 'src/app/app-route-segment';
import {
    CustomerDashboardPageVM,
    Status,
} from './customer-dashboard-page.model';
import { OrdersRouteSegment } from '../orders-new-page/orders-route-segment';

export const customerDashboardPageVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: 'CustomerDashboardPage.myOrders.title',
            anchor: {
                routerLink: `/${AppRouteSegment.ORDERS}/${OrdersRouteSegment.NEW}`,
                textKey: 'CustomerDashboardPage.myOrders.anchor.text',
            },

            headerKeys: [
                'CustomerDashboardPage.id.header',
                'CustomerDashboardPage.creationDate.header',
                'CustomerDashboardPage.totalAreaInHa.header',
                'CustomerDashboardPage.status.header',
                'CustomerDashboardPage.price.header',
                'CustomerDashboardPage.actions.header',
            ],
            orderXVMs: [
                {
                    type: 'myOrder',
                    id: {
                        labelKey: 'CustomerDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78901',
                        },
                    },
                    creationDate: {
                        labelKey: 'CustomerDashboardPage.creationDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.creationDate.value',
                            params: { date: new Date() },
                        },
                    },
                    totalAreaInHa: {
                        labelKey: 'CustomerDashboardPage.totalAreaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 105.4,
                        },
                    },

                    status: {
                        labelKey: 'CustomerDashboardPage.status.label',
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: 'CustomerDashboardPage.status.active.text',
                        },
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.status.active.text',
                            params: {},
                        },
                    },
                    price: {
                        labelKey: 'CustomerDashboardPage.price.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.price.value',
                            params: {
                                price: 123000,
                            },
                        },
                    },

                    anchorXVM: {
                        labelKey: 'PilotDashboardPage.actions.label',
                        textKey: 'PilotDashboardPage.actions.mission.text',
                    },
                },
                {
                    type: 'myOrder',
                    id: {
                        labelKey: 'CustomerDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78902',
                        },
                    },
                    creationDate: {
                        labelKey: 'CustomerDashboardPage.creationDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.creationDate.value',
                            params: { date: new Date() },
                        },
                    },
                    totalAreaInHa: {
                        labelKey: 'CustomerDashboardPage.totalAreaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 86,
                        },
                    },

                    status: {
                        labelKey: 'CustomerDashboardPage.status.label',
                        badgeXVM: {
                            status: Status.COMPLETED,
                            textKey:
                                'CustomerDashboardPage.status.completed.text',
                        },
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.status.completed.text',
                            params: {},
                        },
                    },
                    price: {
                        labelKey: 'CustomerDashboardPage.price.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.price.value',
                            params: {
                                price: 353000,
                            },
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
            titleKey: 'CustomerDashboardPage.companyOrders.title',
            headerKeys: [
                'CustomerDashboardPage.id.header',
                'CustomerDashboardPage.requester.header',
                'CustomerDashboardPage.creationDate.header',
                'CustomerDashboardPage.totalAreaInHa.header',
                'CustomerDashboardPage.status.header',
                'CustomerDashboardPage.price.header',
            ],
            orderXVMs: [
                {
                    type: 'companyOrder',
                    id: {
                        labelKey: 'CustomerDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78903',
                        },
                    },
                    creationDate: {
                        labelKey: 'CustomerDashboardPage.creationDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.creationDate.value',
                            params: { date: new Date() },
                        },
                    },
                    totalAreaInHa: {
                        labelKey: 'CustomerDashboardPage.totalAreaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 9.4,
                        },
                    },

                    status: {
                        labelKey: 'CustomerDashboardPage.status.label',
                        badgeXVM: {
                            status: Status.PENDING,
                            textKey:
                                'CustomerDashboardPage.status.pending.text',
                        },
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.status.pending.text',
                            params: {},
                        },
                    },
                    price: {
                        labelKey: 'CustomerDashboardPage.price.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.price.value',
                            params: {
                                price: 43000,
                            },
                        },
                    },
                    requester: {
                        labelKey: 'CustomerDashboardPage.requester.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'Lisa Martinez',
                        },
                    },
                },
                {
                    type: 'companyOrder',
                    id: {
                        labelKey: 'CustomerDashboardPage.id.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'B-78904',
                        },
                    },
                    creationDate: {
                        labelKey: 'CustomerDashboardPage.creationDate.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.creationDate.value',
                            params: { date: new Date() },
                        },
                    },
                    totalAreaInHa: {
                        labelKey: 'CustomerDashboardPage.totalAreaInHa.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 320.1,
                        },
                    },

                    status: {
                        labelKey: 'CustomerDashboardPage.status.label',
                        badgeXVM: {
                            status: Status.COMPLETED,
                            textKey:
                                'CustomerDashboardPage.status.completed.text',
                        },
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.status.completed.text',
                            params: {},
                        },
                    },
                    price: {
                        labelKey: 'CustomerDashboardPage.price.label',
                        valueVM: {
                            type: 'withValueKey',
                            key: 'CustomerDashboardPage.price.value',
                            params: {
                                price: 1300000,
                            },
                        },
                    },
                    requester: {
                        labelKey: 'CustomerDashboardPage.requester.label',
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 'Mike Thompson',
                        },
                    },
                },
            ],
        },
    ],
};
export const enMock = {
    grid1: {
        anchor: {
            text: 't',
        },
        title: 'tit1',
        header: {
            key1: '1',
            key2: '2',
            key3: '3',
        },
        mission1: {
            requester: {
                label: 'requester1',
            },
            id: {
                label: 'id1',
            },
            totalAreaInHa: {
                label: 'area1',
            },
            anchor: {
                text: 'anchor1',
                label: 'lab1',
            },
            creation: {
                label: 'sched1',
            },
            completion: {
                label: 'complet',
            },
            status: {
                label: 'stat1',
                text: 'text1',
            },
            price: {
                label: 'stat1',
            },
        },
        mission2: {
            id: {
                label: 'id2',
            },
            totalAreaInHa: {
                label: 'area2',
            },
            anchor: {
                text: 'anchor2',
                label: 'lab2',
            },
            creation: {
                label: 'sched2',
            },
            status: {
                label: 'stat2',
                text: 'text2',
            },
            price: {
                label: 'price2',
            },
        },
        mission3: {
            creation: { label: 'creation3' },
            totalAreaInHa: {
                label: 'area3',
            },
            price: {
                label: 'price3',
            },
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
            completion: {
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

export const mockVM: CustomerDashboardPageVM = {
    gridXVMs: [],
};
export const mockVMWithoutGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [],
};
export const mockVMWithOneGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithAnchorInGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            anchor: { textKey: enMock.grid1.anchor.text },
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithoutAnchorInGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithThreeGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [],
        },
        {
            titleKey: enMock.grid2.title,
            headerKeys: [],
            orderXVMs: [],
        },
        {
            titleKey: enMock.grid3.title,
            headerKeys: [],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithoutHeaderKeysInGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithOneHeaderKeyInGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [enMock.grid1.header.key1],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithThreeHeaderKeysInGridXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [
                enMock.grid1.header.key1,
                enMock.grid1.header.key2,
                enMock.grid1.header.key3,
            ],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithoutOrderXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [],
        },
    ],
};
export const mockVMWithOneOrderXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission1.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission1.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission1.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission1.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithThreeOrderXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission1.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission1.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission1.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission1.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission3.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission3.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission3.anchor.text,
                        labelKey: enMock.grid1.mission3.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission3.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission3.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission3.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission3.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission2.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission2.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission2.anchor.text,
                        labelKey: enMock.grid1.mission2.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission2.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission2.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission2.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission2.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOneMyOrderXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission1.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission1.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission1.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission1.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOneCompanyOrderXVM: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [
                {
                    type: 'companyOrder',
                    id: {
                        labelKey: enMock.grid1.mission1.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission1.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    requester: {
                        labelKey: enMock.grid1.mission1.requester.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    creationDate: {
                        labelKey: enMock.grid1.mission1.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission1.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
export const mockVMWithOrderXVMsWithAllStatusTypes: CustomerDashboardPageVM = {
    gridXVMs: [
        {
            titleKey: enMock.grid1.title,
            headerKeys: [],
            orderXVMs: [
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission1.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission1.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission1.anchor.text,
                        labelKey: enMock.grid1.mission1.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission1.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission1.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission1.status.label,
                        badgeXVM: {
                            status: Status.ACTIVE,
                            textKey: enMock.grid1.mission1.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission3.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission3.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission3.anchor.text,
                        labelKey: enMock.grid1.mission3.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission3.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission3.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission3.status.label,
                        badgeXVM: {
                            status: Status.COMPLETED,
                            textKey: enMock.grid1.mission3.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
                {
                    type: 'myOrder',
                    id: {
                        labelKey: enMock.grid1.mission2.id.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    totalAreaInHa: {
                        labelKey: enMock.grid1.mission2.totalAreaInHa.label,
                        valueVM: {
                            type: 'withoutValueKey',
                            value: 1,
                        },
                    },
                    anchorXVM: {
                        textKey: enMock.grid1.mission2.anchor.text,
                        labelKey: enMock.grid1.mission2.anchor.label,
                    },

                    creationDate: {
                        labelKey: enMock.grid1.mission2.creation.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    price: {
                        labelKey: enMock.grid1.mission2.price.label,
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                    status: {
                        labelKey: enMock.grid1.mission2.status.label,
                        badgeXVM: {
                            status: Status.PENDING,
                            textKey: enMock.grid1.mission2.status.text,
                        },
                        valueVM: { type: 'withoutValueKey', value: 1 },
                    },
                },
            ],
        },
    ],
};
