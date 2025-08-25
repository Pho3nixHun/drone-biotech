import { signalStoreFeature } from '@ngrx/signals';
import { on, withReducer } from '@ngrx/signals/events';
import { authEvents } from './auth.events';
import { initialState } from './auth.store';

export function withAuthReducer() {
    return signalStoreFeature(
        withReducer(
            on(authEvents.retrieveUser, () => ({
                user: null,
                loading: true,
                error: null,
            })),
            on(authEvents.retrieveUserSuccess, ({ payload: user }) => ({
                user,
                loading: false,
                error: null,
            })),
            on(authEvents.retrieveUserFailure, () => initialState),
            on(authEvents.signIn, () => ({
                user: null,
                loading: true,
                error: null,
            })),
            on(authEvents.signInSuccess, ({ payload: user }) => ({
                user,
                loading: false,
                error: null,
            })),
            on(authEvents.signInFailure, ({ payload: error }) => ({
                loading: false,
                error,
            })),
            on(authEvents.signOut, () => ({
                loading: true,
                error: null,
            })),
            on(authEvents.signOutSuccess, () => initialState),
            on(authEvents.signOutFailure, ({ payload: error }) => ({
                loading: false,
                error,
            }))
        )
    );
}
