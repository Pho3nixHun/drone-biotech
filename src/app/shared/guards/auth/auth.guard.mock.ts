// auth.guard.mock.ts
import { CanActivate, Router } from '@angular/router';
import { inject, Injectable, signal } from '@angular/core';
import { AuthGuard } from './auth.guard';

const isAuthenticatedSignal = signal<boolean>(false);

@Injectable({
    providedIn: 'root',
})
export class AuthGuardMock implements CanActivate {
    private readonly router = inject(Router);

    canActivate(): boolean {
        if (isAuthenticatedSignal()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

export const updateAuthenticated = (authState: boolean): void => {
    isAuthenticatedSignal.set(authState);
};

export const provideAuthGuard = () => ({
    provide: AuthGuard,
    useClass: AuthGuardMock,
});
