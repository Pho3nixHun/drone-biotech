import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationError, AuthState, User } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthenticationError = createSelector(
    selectAuthState,
    (auth: AuthState): AuthenticationError | null => auth.error
);

export const selectUser = createSelector(
    selectAuthState,
    (auth: AuthState) => auth.user
);

export const selectUserRole = createSelector(
    selectAuthState,
    (auth: AuthState) => {
        const user = auth.user;
        return user ? user.role : undefined;
    }
);

export const selectUserName = createSelector(
    selectAuthState,
    (auth: AuthState) => {
        const user = auth.user;
        return user ? user.name : undefined;
    }
);

export const selectUserRole = createSelector(
    selectAuthState,
    (auth: AuthState) => auth.user?.role
);

export const selectUserName = createSelector(
    selectAuthState,
    (auth: AuthState) => auth.user?.name
);
