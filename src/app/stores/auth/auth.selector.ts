import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationError, AuthState, User } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthenticationError = createSelector(
    selectAuthState,
    (auth: AuthState): AuthenticationError | null => auth.error
);

export const selectUser = createSelector(
    selectAuthState,
    (auth: AuthState): User | null => auth.user
);
