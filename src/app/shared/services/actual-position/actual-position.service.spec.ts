import { TestBed } from '@angular/core/testing';
import { ActualPositionService } from './actual-position.service';

describe('ActualPositionService', () => {
    let service: ActualPositionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ActualPositionService],
        });
        service = TestBed.inject(ActualPositionService);
    });

    it('should return an error when geolocation is not supported', (done) => {
        //Arrange
        jest.spyOn(service, 'isGeolocationSupported').mockReturnValue(false);

        //Act
        service.getLocation().subscribe({
            next: () => fail('Should not succeed'),
            error: (err) => {
                //Assert
                expect(err.message).toBe(
                    'Geolocation is not supported by this browser.'
                );
                done();
            },
        });
    });

    it('should return location when geolocation is supported', (done) => {
        // Arrange
        const [lat, lng] = [40.7128, -74.006];
        const mockPosition = {
            coords: {
                latitude: lat,
                longitude: lng,
                altitude: null,
                accuracy: 10,
                altitudeAccuracy: null,
                heading: null,
                speed: null,
            },
            timestamp: Date.now(),
        };

        // Act
        Object.defineProperty(navigator, 'geolocation', {
            value: {
                getCurrentPosition: jest.fn((success) => {
                    success(mockPosition);
                }),
            },
            configurable: true,
        });

        // Assert
        service.getLocation().subscribe({
            next: (val) => {
                expect(val.latitude).toBe(lat);
                expect(val.longitude).toBe(lng);
                done();
            },
            error: (err) => fail(err),
        });
    });

    it('should return an error when geolocation request fails', (done) => {
        // Arrange
        const mockError: GeolocationPositionError = {
            code: 1,
            message: 'Geolocation failed',
        } as GeolocationPositionError;

        // Act
        Object.defineProperty(navigator, 'geolocation', {
            value: {
                getCurrentPosition: jest.fn((success, error) =>
                    error(mockError)
                ),
            },
            configurable: true,
        });

        // Assert
        service.getLocation().subscribe({
            next: () => fail('Should not succeed'),
            error: (err) => {
                expect(err.message).toBe('Geolocation failed');
                done();
            },
        });
    });
});
