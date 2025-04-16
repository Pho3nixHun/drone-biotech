import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Location } from './location.model';

export const LocationActions = createActionGroup({
    source: 'Location',
    events: {
        getLocation: emptyProps(),
        getLocationSuccess: props<{ location: Location }>(),
        getLocationFailure: props<{ error: Error }>(),
    },
});
