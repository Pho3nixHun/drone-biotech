// auth.guard.mock.ts
import { CanActivate, Router } from '@angular/router';
import { Injectable, inject, signal } from '@angular/core';
import { LoginGuard } from './login.guard';

const isAuthenticatedSignal = signal<boolean>(false);

@Injectable({
    providedIn: 'root',
})
export class LoginGuardMock implements CanActivate {
    private readonly router = inject(Router);

    canActivate(): boolean {
        if (!isAuthenticatedSignal()) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}

export const updateLoggedIn = (authState: boolean): void => {
    isAuthenticatedSignal.set(authState);
};

export const provideLoginGuard = () => ({
    provide: LoginGuard,
    useClass: LoginGuardMock,
});
