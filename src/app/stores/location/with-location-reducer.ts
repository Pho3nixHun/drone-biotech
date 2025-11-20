import { signalStoreFeature } from '@ngrx/signals';
import { on, withReducer } from '@ngrx/signals/events';
import { locationEvents } from './location.events';

export function withLocationReducer() {
    return signalStoreFeature(
        withReducer(
            on(locationEvents.getLocation, () => ({
                loading: true,
                error: null,
            })),
            on(locationEvents.getLocationSuccess, ({ payload: location }) => ({
                location,
                loading: false,
                error: null,
            })),
            on(locationEvents.getLocationFailure, ({ payload: error }) => ({
                location: null,
                loading: false,
                error,
            }))
        )
    );
}
