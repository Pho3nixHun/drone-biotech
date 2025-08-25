import { signalStoreFeature } from '@ngrx/signals';
import { switchMap, of, Observable, map, catchError } from 'rxjs';
import { locationEvents } from './location.events';
import {
    isGeolocationSupported,
    mapToLocation,
    mapNumberToLocationErrorType,
} from './location.mapping';
import { LocationError, LocationErrorType } from './location.model';
import { Events, withEffects } from '@ngrx/signals/events';
import { inject } from '@angular/core';

export function withLocationEffects() {
    return signalStoreFeature(
        withEffects(() => {
            const events = inject(Events);
            return {
                retrieveUser$: events.on(locationEvents.getLocation).pipe(
                    switchMap(() =>
                        !isGeolocationSupported()
                            ? of(
                                  locationEvents.getLocationFailure(
                                      new LocationError(
                                          LocationErrorType.UNKNOWN
                                      ).message
                                  )
                              )
                            : new Observable<GeolocationPosition>(
                                  (observer) => {
                                      navigator.geolocation.getCurrentPosition(
                                          (position) => {
                                              observer.next(position);
                                              observer.complete();
                                          },
                                          (error) => {
                                              observer.error(error);
                                          },
                                          {
                                              enableHighAccuracy: true,
                                              timeout: 10000,
                                              maximumAge: 0,
                                          }
                                      );
                                  }
                              ).pipe(
                                  map((position) =>
                                      locationEvents.getLocationSuccess(
                                          mapToLocation(position.coords)
                                      )
                                  ),
                                  catchError((error) =>
                                      of(
                                          locationEvents.getLocationFailure(
                                              new LocationError(
                                                  mapNumberToLocationErrorType(
                                                      error.code
                                                  )
                                              ).message
                                          )
                                      )
                                  )
                              )
                    )
                ),
            };
        })
    );
}
