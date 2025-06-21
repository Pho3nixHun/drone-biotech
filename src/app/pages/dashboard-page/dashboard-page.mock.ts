import { DashboardPageConfig } from './dashboard-page.model';

export const dashboardPageConfig: DashboardPageConfig = {
    userHeaderVM: {
        titleKey: 'DashboardPage.userHeader.title',
        dateKey: 'DashboardPage.userHeader.dateValue',
        roleDashboardKey: 'DashboardPage.userHeader.roleDashboard',
        loginTextKey: 'DashboardPage.userHeader.loginText',
    },
};

export const enMock = {
    title: 'tit',
    date: 'dat',
    roleDashboard: 'role',
    loginText: 'login',
};

export const dashboardPageConfigMock: DashboardPageConfig = {
    userHeaderVM: {
        titleKey: enMock.title,
        dateKey: enMock.date,
        roleDashboardKey: enMock.roleDashboard,
        loginTextKey: enMock.loginText,
    },
};
