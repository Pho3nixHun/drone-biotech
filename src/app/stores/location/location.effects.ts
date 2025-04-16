import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocationActions } from './location.actions';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { LocationError, LocationErrorType } from './location.model';
import {
    isGeolocationSupported,
    mapToLocation,
    mapNumberToLocationErrorType,
} from './location.mapping';

export const getLocation$ = createEffect(
    (actions$ = inject(Actions)) =>
        actions$.pipe(
            ofType(LocationActions.getLocation),
            switchMap(() => {
                if (!isGeolocationSupported()) {
                    return of(
                        LocationActions.getLocationFailure({
                            error: new LocationError(LocationErrorType.UNKNOWN),
                        })
                    );
                }

                const defaultOptions: PositionOptions = {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                };

                const geolocationOptions = { ...defaultOptions };

                return new Observable<GeolocationPosition>((observer) => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            observer.next(position);
                            observer.complete();
                        },
                        (error) => {
                            observer.error(error);
                        },
                        geolocationOptions
                    );
                }).pipe(
                    map((position) => {
                        const location = mapToLocation(position.coords);
                        return LocationActions.getLocationSuccess({ location });
                    }),
                    catchError((error) =>
                        of(
                            LocationActions.getLocationFailure({
                                error: new LocationError(
                                    mapNumberToLocationErrorType(error.code)
                                ),
                            })
                        )
                    )
                );
            })
        ),
    { functional: true }
);
