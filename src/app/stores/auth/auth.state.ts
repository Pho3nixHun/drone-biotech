import { ActionReducer, createFeature, createReducer, on } from '@ngrx/store';
import { AuthState } from './auth.model';
import { AuthActions } from './auth.actions';

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const reducer: ActionReducer<AuthState> = createReducer(
  initialState,
  on(AuthActions.retrieveUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(AuthActions.retrieveUserFailure, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(AuthActions.signIn, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.signInSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(AuthActions.signInFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuthActions.signOut, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.signOutSuccess, () => ({
    ...initialState,
  })),
  on(AuthActions.signOutFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

export const authFeature = createFeature({
  name: 'auth',
  reducer,
});
