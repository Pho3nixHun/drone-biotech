import { AppRouteSegment } from 'src/app/app-route-segment';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRole } from '@stores/auth/auth.model';
import { DashboardPageRouteSegment } from '../../../pages/dashboard-page/dashboard-page-route-segment';
import { AuthStore } from '@stores/auth/auth.store';

const routes: Record<UserRole, DashboardPageRouteSegment> = {
    customer: DashboardPageRouteSegment.CUSTOMER,
    office: DashboardPageRouteSegment.OFFICE,
    pilot: DashboardPageRouteSegment.PILOT,
};

export const redirectGuard: CanActivateFn = async (
    route,
    state,
    router = inject(Router),
    store = inject(AuthStore)
) => {
    const user = store.user();
    if (!user) return false;

    const currentRole = user.role;

    const navigateToRoleDashboard: boolean | undefined =
        route.firstChild?.data?.['navigateToRoleDashboard'];

    const allowedRole: UserRole | undefined =
        route.firstChild?.data?.['allowedRole'];

    if (allowedRole != currentRole)
        return router.createUrlTree([AppRouteSegment.DASHBOARD, 'notfound']);

    if (navigateToRoleDashboard && allowedRole)
        return router.createUrlTree([
            AppRouteSegment.DASHBOARD,
            routes[allowedRole],
        ]);

    return true;
};
