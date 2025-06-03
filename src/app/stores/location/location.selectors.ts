import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Coordinates } from '@stores/location/location.model';
import { LocationState } from './location.model';

export const selectLocationState =
    createFeatureSelector<LocationState>('location');

export const selectActualPosition = createSelector(
    selectLocationState,
    (location: LocationState): Coordinates | null => {
        const loc = location.location;
        return loc ? { lat: loc.lat, lng: loc.lng } : null;
    }
);
