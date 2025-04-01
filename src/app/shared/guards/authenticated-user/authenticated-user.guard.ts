import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { AppRouteSegment } from 'src/app/app-route-segment';

export const authenticatedUserGuard: CanActivateFn = (
    route,
    state,
    auth = inject(Auth),
    router = inject(Router)
) =>
    new Promise((resolve) =>
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(true);
            } else {
                router.navigate([AppRouteSegment.LOGIN]);
                resolve(false);
            }
        })
    );
