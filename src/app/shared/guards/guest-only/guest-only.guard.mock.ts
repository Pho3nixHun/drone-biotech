import { CanActivateFn, Router } from '@angular/router';
import { inject, signal } from '@angular/core';
import { guestOnlyGuard } from './guest-only.guard';
import { AppRouteSegment } from 'src/app/app-route-segment';

export const guestOnlyGuardMock: CanActivateFn = (
    route,
    state,
    router = inject(Router)
) => {
    if (!isUserLoggedIn()) {
        return true;
    } else {
        router.navigate([AppRouteSegment.LANDING]);
        return false;
    }
};

const isUserLoggedIn = signal<boolean>(false);

export const updateGuestOnlyGuard = (userLoggedIn: boolean) =>
    isUserLoggedIn.set(userLoggedIn);

export const provideGuestOnlyGuard = () => ({
    provide: guestOnlyGuard,
    useValue: guestOnlyGuardMock,
});
