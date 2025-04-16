import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthenticationError, User } from './auth.model';

export const AuthActions = createActionGroup({
    source: 'Authentication',
    events: {
        retrieveUserSuccess: props<{ user: User }>(),
        retrieveUserFailure: emptyProps(),
        signIn: props<{ email: string; password: string }>(),
        signInSuccess: props<{ user: User }>(),
        signInFailure: props<{ error: AuthenticationError }>(),
        signOut: emptyProps(),
        signOutSuccess: emptyProps(),
        signOutFailure: props<{ error: AuthenticationError }>(),
    },
});
