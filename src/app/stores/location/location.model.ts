export interface LocationState {
    location: Location | null;
    loading: boolean;
    error: Error | null;
}

export interface Location {
    lat: number;
    lng: number;
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
}

export enum LocationErrorType {
    PERMISSION_DENIED = 'Permission denied',
    POSITION_UNAVAILABLE = 'Position unavailable',
    TIMEOUT = 'Timeout',
    UNKNOWN = 'Unknown',
}

export class LocationError extends Error {
    constructor(type: LocationErrorType) {
        super(`Failed to get location cause: ${type}`, { cause: type });
    }
}
