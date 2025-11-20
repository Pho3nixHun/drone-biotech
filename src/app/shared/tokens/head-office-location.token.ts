import { InjectionToken } from '@angular/core';
import { Coordinates } from '@stores/location/location.model';

export const HEAD_OFFICE_LOCATION = new InjectionToken<Coordinates>(
    'Config for the location of the head office'
);
