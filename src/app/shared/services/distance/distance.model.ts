import { InjectionToken, signal } from '@angular/core';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { Location } from 'src/app/stores/location/location.model';

export const provideMockHeadOfficeLocation = () => ({
    provide: HEAD_OFFICE_LOCATION,
    useValue: headOfficeSignal(),
});

export const updateHeadOfficeLocation = (coordinates: Coordinates) =>
    headOfficeSignal.set(coordinates);
const headOfficeSignal = signal<Coordinates>({ lat: 12, lng: 12 });

export const HEAD_OFFICE_LOCATION = new InjectionToken<Coordinates>(
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

interface LocationWithLatLng {
    latLng: LatLng;
}
interface LatLng {
    latitude: number;
    longitude: number;
}

export interface WayPoint {
    location: LocationWithLatLng;
    vehicleStopover: boolean;
}

export interface RoutesRequest extends DistanceFromDestinationRequest {
    optimizeWaypointOrder: boolean;
    intermediates: {
        location: LocationWithLatLng;
    }[];
}

export interface DistanceFromDestinationRequest {
    origin: { location: LocationWithLatLng };
    destination: { location: LocationWithLatLng };
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
    wayPoint: Coordinates | Coordinates[]
): WayPoint[] =>
    Array.isArray(wayPoint)
        ? wayPoint.map((item) => ({
              location: { latLng: { latitude: item.lat, longitude: item.lng } },
              vehicleStopover: true,
          }))
        : [
              {
                  location: {
                      latLng: {
                          latitude: wayPoint.lat,
                          longitude: wayPoint.lng,
                      },
                  },
                  vehicleStopover: true,
              },
          ];
