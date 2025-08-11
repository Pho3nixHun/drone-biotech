import { DashboardPageVM } from './dashboard-page.model';

export const dashboardPageVM: DashboardPageVM = {
    userHeaderXVM: {
        type: 'customer',
        title: {
            type: 'withValueKey',
            key: 'DashboardPage.userHeader.title',
            params: { name: 'Sarah Johnson' },
        },
        role: {
            type: 'withValueKey',
            key: 'DashboardPage.userHeader.role',
            params: { role: 'Customer' },
        },
        lastLoginDate: {
            type: 'withValueKey',
            key: 'DashboardPage.userHeader.lastLoginDateValue',
            params: {
                date: new Date(),
            },
        },
        lastLoginDateTextKey: 'DashboardPage.userHeader.lastLoginDateText',
    },
    summaryItemListXVM: {
        summaryItemXVMs: [
            {
                type: 'blue',
                titleKey: 'DashboardPage.summary.activeOrder.title',
                emoji: '📋',
                valueVM: {
                    type: 'withoutValueKey',
                    value: 2,
                },
            },
            {
                type: 'green',
                titleKey: 'DashboardPage.summary.totalArea.title',
                emoji: '🌾',
                valueVM: {
                    type: 'withoutValueKey',
                    value: 145,
                },
            },
            {
                type: 'purple',
                titleKey: 'DashboardPage.summary.spending.title',
                emoji: '💰',
                valueVM: {
                    type: 'withoutValueKey',
                    value: 125000,
                },
            },
            {
                type: 'yellow',
                titleKey: 'DashboardPage.summary.pending.title',
                emoji: '⏳',
                valueVM: {
                    type: 'withoutValueKey',
                    value: 3,
                },
            },
        ],
    },
};

export const enMock = {
    titleVal: 'title',
    roleVal: 'role',
    lastLogin: 'last',
    lastLoginText: 'lastText',
    summaries: {
        summary1: {
            text: 'sum1',
        },
        summary2: {
            text: 'sum2',
        },
        summary3: {
            text: 'sum3',
        },
        summary4: {
            text: 'sum4',
        },
        summary5: {
            text: 'sum5',
        },
        summary6: {
            text: 'sum6',
        },
    },
};

export const mockVM: DashboardPageVM = {
    userHeaderXVM: {
        type: 'customer',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [],
    },
};

export const mockVMWithCustomer: DashboardPageVM = {
    userHeaderXVM: {
        type: 'customer',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [],
    },
};
export const mockVMWithPilot: DashboardPageVM = {
    userHeaderXVM: {
        type: 'pilot',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [],
    },
};
export const mockVMWithOffice: DashboardPageVM = {
    userHeaderXVM: {
        type: 'office',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [],
    },
};
export const mockVMWithoutSummary: DashboardPageVM = {
    userHeaderXVM: {
        type: 'office',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [],
    },
};
export const mockVMWithOneSummary: DashboardPageVM = {
    userHeaderXVM: {
        type: 'office',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [
            {
                type: 'blue',
                emoji: '*',
                titleKey: enMock.summaries.summary1.text,
                valueVM: { type: 'withoutValueKey', value: 1 },
            },
        ],
    },
};
export const mockVMWithThreeSummary: DashboardPageVM = {
    userHeaderXVM: {
        type: 'office',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [
            {
                type: 'blue',
                emoji: '*',
                titleKey: enMock.summaries.summary1.text,
                valueVM: { type: 'withoutValueKey', value: 1 },
            },
            {
                type: 'blue',
                emoji: '*',
                titleKey: enMock.summaries.summary2.text,
                valueVM: { type: 'withoutValueKey', value: 1 },
            },
            {
                type: 'blue',
                emoji: '*',
                titleKey: enMock.summaries.summary3.text,
                valueVM: { type: 'withoutValueKey', value: 1 },
            },
        ],
    },
};
export const mockVMWithAllSummaryTypes: DashboardPageVM = {
    userHeaderXVM: {
        type: 'office',
        title: {
            type: 'withoutValueKey',
            value: enMock.titleVal,
        },
        role: {
            type: 'withoutValueKey',
            value: enMock.roleVal,
        },
        lastLoginDate: {
            type: 'withoutValueKey',
            value: enMock.lastLogin,
        },
        lastLoginDateTextKey: enMock.lastLoginText,
    },
    summaryItemListXVM: {
        summaryItemXVMs: [
            {
                type: 'blue',
                emoji: '*',
                titleKey: enMock.summaries.summary1.text,
                valueVM: { type: 'withoutValueKey', value: 1 },
            },
            {
                type: 'green',
                emoji: '*',
                titleKey: enMock.summaries.summary2.text,
                valueVM: { type: 'withoutValueKey', value: 2 },
            },
            {
                type: 'purple',
                emoji: '*',
                titleKey: enMock.summaries.summary3.text,
                valueVM: { type: 'withoutValueKey', value: 3 },
            },
            {
                type: 'purple',
                emoji: '*',
                titleKey: enMock.summaries.summary4.text,
                valueVM: { type: 'withoutValueKey', value: 4 },
            },
            {
                type: 'blue',
                emoji: '*',
                titleKey: enMock.summaries.summary5.text,
                valueVM: { type: 'withoutValueKey', value: 5 },
            },
            {
                type: 'green',
                emoji: '*',
                titleKey: enMock.summaries.summary6.text,
                valueVM: { type: 'withoutValueKey', value: 6 },
            },
        ],
    },
};
