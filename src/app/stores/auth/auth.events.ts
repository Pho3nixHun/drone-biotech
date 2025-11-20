import { type } from '@ngrx/signals';
import { AuthenticationError, User } from './auth.model';
import { eventGroup } from '@ngrx/signals/events';

export const authEvents = eventGroup({
    source: 'Authentication events',
    events: {
        retrieveUser: type<void>(),
        retrieveUserSuccess: type<User>(),
        retrieveUserFailure: type<void>(),
        signIn: type<{ email: string; password: string }>(),
        signInSuccess: type<User>(),
        signInFailure: type<AuthenticationError>(),
        signOut: type<void>(),
        signOutSuccess: type<void>(),
        signOutFailure: type<AuthenticationError>(),
    },
});
