import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { DashboardPageRouteSegment } from '../../../pages/dashboard-page/dashboard-page-route-segment';
import { Store } from '@ngrx/store';
import { selectUserRole } from '@stores/auth/auth.selector';
import { firstValueFrom } from 'rxjs';
import { UserRole } from '@stores/auth/auth.model';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { selectURL } from '@stores/router/router.selectors';

const routes: Record<UserRole, DashboardPageRouteSegment> = {
    customer: DashboardPageRouteSegment.CUSTOMER,
    office: DashboardPageRouteSegment.OFFICE,
    pilot: DashboardPageRouteSegment.PILOT,
};

// Navigates if the url is /dashboard
export const redirectGuard: CanActivateFn = async (
    route,
    state,
    router = inject(Router),
    store = inject(Store)
) => {
    const url = await firstValueFrom(store.select(selectURL));
    const role = await firstValueFrom(store.select(selectUserRole));

    if (!role) return false;

    if (url === `/${AppRouteSegment.DASHBOARD}`)
        router.navigate([AppRouteSegment.DASHBOARD, routes[role]]);

    return true;
};

// Navigates to the specified role page if the url is /dashboard
export const redirectChildGuard: CanActivateChildFn = async (
    route,
    state,
    router = inject(Router),
    store = inject(Store)
) => {
    const role = await firstValueFrom(store.select(selectUserRole));
    const routeConfig = route.routeConfig;

    if (!routeConfig || !role) return false;

    const path = routeConfig.path;
    if (role !== path)
        await router.navigate([AppRouteSegment.DASHBOARD, routes[role]]);

    return true;
};
