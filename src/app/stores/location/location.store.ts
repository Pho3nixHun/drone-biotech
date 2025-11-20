import { signalStore, withState, withComputed } from '@ngrx/signals';
import { LocationState } from './location.model';
import { withLocationEffects } from './with-location-effects';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withLocationReducer } from './with-location-reducer';

export const initialState: LocationState = {
    location: null,
    loading: false,
    error: null,
};

export const LocationStore = signalStore(
    { providedIn: 'root' },
    withDevtools('location'),
    withState<LocationState>(initialState),
    withComputed(({ location }) => ({
        actualPosition: () => {
            const loc = location();
            return loc ? { lat: loc.lat, lng: loc.lng } : null;
        },
    })),
    withLocationEffects(),
    withLocationReducer()
);
