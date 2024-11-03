import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from './auth.model';

export const AuthActions = createActionGroup({
  source: 'Authentication',
  events: {
    retrieveUserSuccess: props<{ user: User }>(),
    retrieveUserFailure: emptyProps(),
    signIn: props<{ email: string; password: string }>(),
    signInSuccess: props<{ user: User }>(),
    signInFailure: props<{ error: Error }>(),
    signOut: emptyProps(),
    signOutSuccess: emptyProps(),
    signOutFailure: props<{ error: Error }>(),
  },
});
