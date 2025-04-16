import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
    createLocationError,
    Location,
    LocationErrorType,
    mapGeolocationCoordinatesToLocation,
} from './actual-position.model';

@Injectable({
    providedIn: 'root',
})
export class ActualPositionService {
    /**
     * Get the current user location as an Observable
     * @param options Optional GeolocationPositionOptions
     * @returns Observable of Coordinates or throws LocationError
     */
    getLocation(options?: PositionOptions): Observable<Location> {
        // Check if geolocation is supported by the browser
        if (!this.isGeolocationSupported()) {
            return throwError(() =>
                createLocationError(
                    LocationErrorType.UNKNOWN,
                    'Geolocation is not supported by this browser.'
                )
            );
        }

        // Default options with sensible values if none provided
        const defaultOptions: PositionOptions = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        };

        const geolocationOptions = { ...defaultOptions, ...options };

        // Convert the callback-based API to an Observable
        return from(
            new Promise<GeolocationPosition>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    geolocationOptions
                );
            })
        ).pipe(
            map((position) =>
                mapGeolocationCoordinatesToLocation(position.coords)
            ),
            catchError((error: GeolocationPositionError) =>
                throwError(() => createLocationError(error.code, error.message))
            )
        );
    }

    // Pure function to check if geolocation is supported
    public isGeolocationSupported(): boolean {
        return 'geolocation' in navigator;
    }
}
