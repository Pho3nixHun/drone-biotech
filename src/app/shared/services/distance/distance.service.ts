import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
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
    private readonly headOfficeLocation = inject(HEAD_OFFICE_LOCATION);
    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl =
        'https://routes.googleapis.com/directions/v2:computeRoutes';

    private readonly cache = new Map<string, number>();

    public getDistance(destination: Coordinates) {
        const cacheKey = JSON.stringify(destination);
        const cacheValue = this.cache.get(cacheKey);

        if (cacheValue) {
            return of(cacheValue);
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
            'X-Goog-FieldMask': `routes.distanceMeters`,
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

    public getTotalShortestDistance(
        wayPoints: Coordinates | Coordinates[]
    ): Observable<number> {
        const cacheKey = JSON.stringify(
            Array.isArray(wayPoints)
                ? wayPoints.sort((a, b) => a.lat - b.lat || a.lng - b.lng)
                : Array.of(wayPoints)
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
