import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Domain model for location
export interface Coordinates {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
}

export interface LocationError {
    code: number;
    message: string;
}

// Enum for error types to make them more meaningful in the domain
export enum LocationErrorType {
    PERMISSION_DENIED = 1,
    POSITION_UNAVAILABLE = 2,
    TIMEOUT = 3,
    UNKNOWN = 4,
}

@Injectable({
    providedIn: 'root',
})
export class ActualPositionService {
    /**
     * Get the current user location as an Observable
     * @param options Optional GeolocationPositionOptions
     * @returns Observable of Coordinates or throws LocationError
     */
    getLocation(options?: PositionOptions): Observable<Coordinates> {
        // Check if geolocation is supported by the browser
        if (!this.isGeolocationSupported()) {
            return throwError(() =>
                this.createLocationError(
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
            map((position) => {
                const value = this.mapToCoordinates(position.coords);
                return value;
            }),
            catchError((error) => this.handleLocationError(error))
        );
    }

    /**
     * Watch for location changes and emit new coordinates when the user moves
     * @param options Optional GeolocationPositionOptions
     * @returns Observable that emits Coordinates whenever location changes
     */
    watchLocation(options?: PositionOptions): Observable<Coordinates> {
        if (!this.isGeolocationSupported()) {
            return throwError(() =>
                this.createLocationError(
                    LocationErrorType.UNKNOWN,
                    'Geolocation is not supported by this browser.'
                )
            );
        }

        const defaultOptions: PositionOptions = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        };

        const geolocationOptions = { ...defaultOptions, ...options };

        return new Observable<Coordinates>((observer) => {
            // Start watching position
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    observer.next(this.mapToCoordinates(position.coords));
                },
                (error) => {
                    observer.error(
                        this.createLocationError(error.code, error.message)
                    );
                },
                geolocationOptions
            );

            // Return teardown logic to stop watching when unsubscribed
            return () => {
                navigator.geolocation.clearWatch(watchId);
            };
        });
    }

    // Pure function to check if geolocation is supported
    private isGeolocationSupported(): boolean {
        return 'geolocation' in navigator;
    }

    // Pure function to map browser coordinates to our domain model
    private mapToCoordinates(coords: GeolocationCoordinates): Coordinates {
        return {
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy,
            heading: coords.heading,
            speed: coords.speed,
        };
    }

    // Pure function to handle location errors
    private handleLocationError(
        error: GeolocationPositionError
    ): Observable<never> {
        return throwError(() =>
            this.createLocationError(error.code, error.message)
        );
    }

    // Pure function to create a location error
    private createLocationError(code: number, message: string): LocationError {
        return { code, message };
    }
}
