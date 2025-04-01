import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationError, AuthState } from './auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthenticationError = createSelector(
    selectAuthState,
    (auth: AuthState): AuthenticationError | null => auth.error
);
