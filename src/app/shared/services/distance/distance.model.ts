import { InjectionToken } from '@angular/core';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { Location } from 'src/app/stores/location/location.model';

export const HEAD_OFFICE_LOCATION = new InjectionToken<Location>(
    'Config for the location of the headOffice'
);

export const mapLocationToCoordinates = (
    location: Location | null,
    fallback: Location
): Coordinates =>
    location
        ? {
              lat: location.lat,
              lng: location.lng,
          }
        : fallback;

export interface WayPoint {
    location: { latLng: { latitude: number; longitude: number } };
    vehicleStopover: boolean;
}

export interface RoutesRequest extends DistanceFromDestinationRequest {
    optimizeWaypointOrder: boolean;
    intermediates: {
        location: { latLng: { latitude: number; longitude: number } };
    }[];
}

export interface DistanceFromDestinationRequest {
    origin: {
        location: { latLng: { latitude: number; longitude: number } };
    };
    destination: {
        location: { latLng: { latitude: number; longitude: number } };
    };
    travelMode: 'DRIVE';
    computeAlternativeRoutes: boolean;
    routeModifiers: {
        avoidTolls: boolean;
        avoidHighways: boolean;
        avoidFerries: boolean;
    };
}

export interface RoutesResponse {
    routes: {
        distanceMeters: number;
        optimizedIntermediateWaypointIndex: number[];
    }[];
}

export const mapCoordinatesToWaypoints = (
    wayPoints: Coordinates | Coordinates[]
): WayPoint[] => {
    if (Array.isArray(wayPoints)) {
        const way: WayPoint[] = wayPoints.map((item) => ({
            location: { latLng: { latitude: item.lat, longitude: item.lng } },
            vehicleStopover: true,
        }));
        return way;
    }
    return [
        {
            location: {
                latLng: { latitude: wayPoints.lat, longitude: wayPoints.lng },
            },
            vehicleStopover: true,
        },
    ];
};
