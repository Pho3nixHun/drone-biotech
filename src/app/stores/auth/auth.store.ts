import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withState, withHooks } from '@ngrx/signals';
import { AuthState } from './auth.model';
import { withAuthEffects } from './with-auth-effects';
import { withAuthReducer } from './with-auth-reducer';
import { injectDispatch } from '@ngrx/signals/events';
import { authEvents } from './auth.events';

export const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withDevtools('auth'),
    withState<AuthState>(initialState),
    withAuthReducer(),
    withAuthEffects(),
    withHooks({
        onInit() {
            const events = injectDispatch(authEvents);
            events.retrieveUser();
        },
    })
);
