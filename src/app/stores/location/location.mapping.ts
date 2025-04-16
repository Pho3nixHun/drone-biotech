import { Location, LocationErrorType } from './location.model';

export const isGeolocationSupported = (): boolean => 'geolocation' in navigator;

export const mapNumberToLocationErrorType = (
    number: number
): LocationErrorType =>
    [
        LocationErrorType.PERMISSION_DENIED,
        LocationErrorType.POSITION_UNAVAILABLE,
        LocationErrorType.TIMEOUT,
    ][number - 1] ?? LocationErrorType.UNKNOWN;

export const mapToLocation = (coords: GeolocationCoordinates): Location => {
    return {
        lat: coords.latitude,
        lng: coords.longitude,
        accuracy: coords.accuracy,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
    };
};
