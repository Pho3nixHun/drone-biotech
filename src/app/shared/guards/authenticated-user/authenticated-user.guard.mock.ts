import { signal, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authenticatedUserGuard } from './authenticated-user.guard';
import { AppRouteSegment } from 'src/app/app-route-segment';

export const authenticatedUserGuardMock: CanActivateFn = (
    route,
    state,
    router = inject(Router)
) => {
    if (isAuthenticatedSignal()) {
        return true;
    } else {
        router.navigate([AppRouteSegment.LOGIN]);
        return false;
    }
};

const isAuthenticatedSignal = signal<boolean>(false);

export const updateAuthenticatedUserGuard = (isUserAuthenticated: boolean) =>
    isAuthenticatedSignal.set(isUserAuthenticated);

export const provideAuthenticatedUserGuard = () => ({
    provide: authenticatedUserGuard,
    useValue: authenticatedUserGuardMock,
});
