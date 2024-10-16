import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.models';

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.registerUser, (state) => ({
    ...state,
    user: null,
    loading: true,
    error: null,
  })),
  on(AuthActions.registerUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(AuthActions.registerUserFailure, (state, { error }) => ({
    ...state,
    user: null,
    loading: false,
    error,
  })),
);
