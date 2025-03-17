import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationState } from './location.model';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';

export const selectLocationState =
    createFeatureSelector<LocationState>('location');

export const selectActualPosition = createSelector(
    selectLocationState,
    (location: LocationState): Coordinates | null => {
        const loc = location.location;
        if (!loc) return null;
        console.log({ lat: loc.lat, lng: loc.lng });
        return { lat: loc.lat, lng: loc.lng };
    }
);
