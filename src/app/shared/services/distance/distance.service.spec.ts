import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DistanceService } from './distance.service';
import { lastValueFrom, of } from 'rxjs';
import { RoutesResponse } from './distance.model';
import { provideMockHeadOfficeLocation } from '@providers/google-maps-provider';

describe('DistanceService', () => {
    let service: DistanceService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideMockHeadOfficeLocation()],
        });
        service = TestBed.inject(DistanceService);
        httpClient = TestBed.inject(HttpClient);
    });

    it('should return the distance correctly with the getDistance() method', async () => {
        // Arrange
        const distance = 100;
        const mockResponse: RoutesResponse = {
            routes: [
                {
                    distanceMeters: distance,
                    optimizedIntermediateWaypointIndex: [],
                },
            ],
        };
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

        // Act
        const response = await lastValueFrom(
            service.getDistance({ lat: 10, lng: 10 })
        );

        // Assert
        expect(response).toBe(distance);
        expect(service.cache.size).toBe(1);
    });

    it('should send post request only once via the getDistance() method if the params are the same', async () => {
        // Arrange
        const distance = 100;
        const mockResponse: RoutesResponse = {
            routes: [
                {
                    distanceMeters: distance,
                    optimizedIntermediateWaypointIndex: [],
                },
            ],
        };
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

        // Act
        await lastValueFrom(service.getDistance({ lat: 10, lng: 10 }));
        await lastValueFrom(service.getDistance({ lat: 10, lng: 10 }));

        // Assert
        expect(service.cache.size).toBe(1);
    });

    it('should send post request twice via the getDistance() method if the params are not the same', async () => {
        // Arrange
        const distance = 100;
        const mockResponse: RoutesResponse = {
            routes: [
                {
                    distanceMeters: distance,
                    optimizedIntermediateWaypointIndex: [],
                },
            ],
        };
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

        // Act
        await lastValueFrom(service.getDistance({ lat: 10, lng: 10 }));
        await lastValueFrom(service.getDistance({ lat: 1, lng: 40 }));

        // Assert
        expect(service.cache.size).toBe(2);
    });

    it('should return the distance correctly with the getShortestDistanceWithWaypoints() method', async () => {
        // Arrange
        const distance = 100;
        const mockResponse: RoutesResponse = {
            routes: [
                {
                    distanceMeters: distance,
                    optimizedIntermediateWaypointIndex: [],
                },
            ],
        };
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

        // Act
        const response = await lastValueFrom(
            service.getShortestDistanceWithWaypoints({ lat: 10, lng: 10 })
        );

        // Assert
        expect(response).toBe(distance);
    });

    it('should send post request only once via the getShortestDistanceWithWaypoints() method if the params are the same', async () => {
        // Arrange
        const distance = 100;
        const mockResponse: RoutesResponse = {
            routes: [
                {
                    distanceMeters: distance,
                    optimizedIntermediateWaypointIndex: [],
                },
            ],
        };
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

        // Act
        await lastValueFrom(
            service.getShortestDistanceWithWaypoints([
                { lat: 10, lng: 10 },
                { lat: 20, lng: 20 },
                { lat: 30, lng: 30 },
            ])
        );
        await lastValueFrom(
            service.getShortestDistanceWithWaypoints([
                { lat: 20, lng: 20 },
                { lat: 30, lng: 30 },
                { lat: 10, lng: 10 },
            ])
        );

        // Assert
        expect(service.cache.size).toBe(1);
    });
    it('should send post request twice via the getShortestDistanceWithWaypoints() method if the params are different', async () => {
        // Arrange
        const distance = 100;
        const mockResponse: RoutesResponse = {
            routes: [
                {
                    distanceMeters: distance,
                    optimizedIntermediateWaypointIndex: [],
                },
            ],
        };
        jest.spyOn(httpClient, 'post').mockReturnValue(of(mockResponse));

        // Act
        await lastValueFrom(
            service.getShortestDistanceWithWaypoints([
                { lat: 10, lng: 10 },
                { lat: 20, lng: 20 },
                { lat: 30, lng: 30 },
            ])
        );

        // Assert
        await lastValueFrom(
            service.getShortestDistanceWithWaypoints([
                { lat: 20, lng: 20 },
                { lat: 30, lng: 30 },
                { lat: 15, lng: 15 },
            ])
        );
        expect(service.cache.size).toBe(2);
    });
});
