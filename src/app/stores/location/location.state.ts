import { ActionReducer, createFeature, createReducer, on } from '@ngrx/store';
import { LocationState } from './location.model';
import { LocationActions } from './location.actions';

export const initialState: LocationState = {
    location: null,
    loading: false,
    error: null,
};

export const reducer: ActionReducer<LocationState> = createReducer(
    initialState,
    on(LocationActions.getLocation, () => ({
        location: null,
        loading: true,
        error: null,
    })),
    on(LocationActions.getLocationSuccess, (state, { location }) => ({
        ...state,
        location,
        loading: false,
        error: null,
    })),
    on(LocationActions.getLocationFailure, ({ error }) => ({
        location: null,
        loading: false,
        error,
    }))
);

export const locationFeature = createFeature({
    name: 'location',
    reducer,
});
