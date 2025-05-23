import { Location } from 'src/app/stores/location/location.model';
import { Coordinates } from '@stores/location/location.model';

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
