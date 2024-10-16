// auth.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

enum Auth {
  REGISTER_USER = '[Auth] Register User',
  REGISTER_USER_SUCCESS = '[Auth] Register User Success',
  REGISTER_USER_FAILURE = '[Auth] Register User Failure',
}

// Register User Actions
export const registerUser = createAction(
  Auth.REGISTER_USER,
  props<{ email: string; password: string }>(),
);

export const registerUserSuccess = createAction(
  Auth.REGISTER_USER_SUCCESS,
  props<{ user: User }>(),
);
export const registerUserFailure = createAction(
  Auth.REGISTER_USER_FAILURE,
  props<{ error: Error }>(),
);
