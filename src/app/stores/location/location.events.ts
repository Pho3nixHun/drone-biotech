import { Location } from './location.model';
import { eventGroup } from '@ngrx/signals/events';
import { type } from '@ngrx/signals';

export const locationEvents = eventGroup({
    source: 'Location events',
    events: {
        getLocation: type<void>(),
        getLocationSuccess: type<Location>(),
        getLocationFailure: type<string>(),
    },
});
