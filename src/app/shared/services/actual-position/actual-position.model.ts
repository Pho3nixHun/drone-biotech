// Domain model for location
export interface Location {
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

export const mapGeolocationCoordinatesToLocation = (
    coords: GeolocationCoordinates
): Location => {
    return {
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
    };
};

export const createLocationError = (
    code: number,
    message: string
): LocationError => {
    return { code, message };
};
