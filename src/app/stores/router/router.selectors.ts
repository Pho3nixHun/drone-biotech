import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterState } from './router.state';

export const selectRouterState =
    createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectURL = createSelector(
    selectRouterState,
    (router): string | undefined => router?.state.url
);
export const selectHeaderCanBeShown = createSelector(
    selectRouterState,
    (router): boolean | undefined => router?.state.data['headerCanBeShown']
);

export const selectID = createSelector(
    selectRouterState,
    (router): string => router?.state.params['id']
);
