import { AppRouteSegment } from 'src/app/app-route-segment';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserRole } from '@stores/auth/auth.selector';
import { UserRole } from '@stores/auth/auth.model';
import { firstValueFrom } from 'rxjs';
import { DashboardPageRouteSegment } from '../../../pages/dashboard-page/dashboard-page-route-segment';

const routes: Record<UserRole, DashboardPageRouteSegment> = {
    customer: DashboardPageRouteSegment.CUSTOMER,
    office: DashboardPageRouteSegment.OFFICE,
    pilot: DashboardPageRouteSegment.PILOT,
};

export const redirectGuard: CanActivateFn = async (
    route,
    state,
    router = inject(Router),
    store = inject(Store)
) => {
    const currentRole = await firstValueFrom(store.select(selectUserRole));

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
