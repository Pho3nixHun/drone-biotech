import { ActionReducer, createFeature, createReducer, on } from '@ngrx/store';
import { PersistentActions } from './persistent.actions';
import { PersistentStoreState } from './persistent.model';

export const initialState: PersistentStoreState = {
  storage: {},
  error: null,
};

export const reducer: ActionReducer<PersistentStoreState> = createReducer(
  initialState,
  on(PersistentActions.saveKeyValue, (state) => ({
    ...state,
  })),

  on(PersistentActions.saveKeyValueSuccess, (state, { key, value }) => ({
    ...state,
    storage: {
      ...state.storage,
      [key]: value,
    },
  })),

  on(PersistentActions.saveKeyValueFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(PersistentActions.loadKeysSuccess, (state, { entries }) => ({
    ...state,
    storage: entries,
    error: null,
  })),

  on(PersistentActions.loadKeysFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);

export const persistentFeature = createFeature({
  name: 'persistent',
  reducer,
});
