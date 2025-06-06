import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coordinates } from '@stores/location/location.model';
import {
    DistanceFromDestinationRequest,
    HEAD_OFFICE_LOCATION,
    mapCoordinatesToWaypoints,
    RoutesRequest,
    RoutesResponse,
} from './distance.model';

@Injectable({
    providedIn: 'root',
})
export class DistanceService {
    private readonly httpClient = inject(HttpClient);
    private readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);
    public readonly cache = new Map<string, number>();
    private readonly apiUrl =
        'https://routes.googleapis.com/directions/v2:computeRoutes';

    public getDistance(destination: Coordinates): Observable<number> {
        const cacheKey = JSON.stringify(destination);
        const cacheValue = this.cache.get(cacheKey);

        if (cacheValue) {
            return of(cacheValue);
        }

        if (destination === this.headOfficeLocation) {
            this.cache.set(cacheKey, 0);
            return of(0);
        }

        const request: DistanceFromDestinationRequest = {
            origin: {
                location: {
                    latLng: {
                        latitude: this.headOfficeLocation.lat,
                        longitude: this.headOfficeLocation.lng,
                    },
                },
            },
            destination: {
                location: {
                    latLng: {
                        latitude: destination.lat,
                        longitude: destination.lng,
                    },
                },
            },
            travelMode: 'DRIVE',
            computeAlternativeRoutes: false,
            routeModifiers: {
                avoidTolls: false,
                avoidHighways: false,
                avoidFerries: false,
            },
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Goog-FieldMask': 'routes.distanceMeters',
            'X-Goog-Api-Key': environment.googleMapsConfig.apiKey,
        });

        return this.httpClient
            .post<RoutesResponse>(this.apiUrl, request, { headers })
            .pipe(
                map((response) => {
                    const distance = response.routes[0].distanceMeters;
                    this.cache.set(cacheKey, distance);
                    return distance;
                })
            );
    }

    public getShortestDistanceWithWaypoints(
        wayPoints: Coordinates | Coordinates[]
    ): Observable<number> {
        const cacheKey = JSON.stringify(
            Array.isArray(wayPoints)
                ? wayPoints.sort((a, b) => a.lat - b.lat || a.lng - b.lng)
                : [wayPoints]
        );

        const cacheValue = this.cache.get(cacheKey);
        if (cacheValue) {
            return of(cacheValue);
        }

        const request: RoutesRequest = {
            origin: {
                location: {
                    latLng: {
                        latitude: this.headOfficeLocation.lat,
                        longitude: this.headOfficeLocation.lng,
                    },
                },
            },
            destination: {
                location: {
                    latLng: {
                        latitude: this.headOfficeLocation.lat,
                        longitude: this.headOfficeLocation.lng,
                    },
                },
            },
            travelMode: 'DRIVE',
            intermediates: mapCoordinatesToWaypoints(wayPoints),
            computeAlternativeRoutes: false,
            routeModifiers: {
                avoidTolls: false,
                avoidHighways: false,
                avoidFerries: false,
            },
            optimizeWaypointOrder: true,
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Goog-FieldMask': `routes.optimized_intermediate_waypoint_index,routes.distanceMeters,routes.legs`,
            'X-Goog-Api-Key': environment.googleMapsConfig.apiKey,
        });

        return this.httpClient
            .post<RoutesResponse>(this.apiUrl, request, { headers })
            .pipe(
                map((response) => {
                    const distance = response.routes[0].distanceMeters;
                    this.cache.set(cacheKey, distance);
                    return distance;
                })
            );
    }
}
