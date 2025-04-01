import { ReverseGeocodingService } from './reverse-geocoding.service';

describe('ReverseGeocodingService', () => {
    let service: ReverseGeocodingService;
    const formatted_address = 'New York, NY, USA';

    beforeAll(() => {
        globalThis.google = {
            maps: {
                Geocoder: jest.fn().mockImplementation(() => ({
                    geocode: jest.fn().mockImplementation(() => ({
                        results: [{ formatted_address: formatted_address }],
                    })),
                })),
            },
        } as never;
    });

    beforeEach(() => {
        service = new ReverseGeocodingService();
    });

    it('should fetch address using geocoder and cache the result', async () => {
        // Arrange
        // Act
        await service.getAddressByCoordinates({
            lat: 40,
            lng: -74,
        });
        // Assert
        expect(service.cache.size).toBe(1);
    });

    it('should fetch two different address and cache both results if the coordinates are different', async () => {
        // Arrange
        // Act
        await service.getAddressByCoordinates({
            lat: 40,
            lng: -74,
        });
        await service.getAddressByCoordinates({
            lat: 20,
            lng: -34,
        });
        // Assert
        expect(service.cache.size).toBe(2);
    });

    it('should fetch two different address and cache both results if the coordinates are different', async () => {
        // Arrange
        // Act
        await service.getAddressByCoordinates({
            lat: 40,
            lng: -74,
        });
        await service.getAddressByCoordinates({
            lat: 40,
            lng: -74,
        });
        // Assert
        expect(service.cache.size).toBe(1);
    });

    it('should return the fetched address', async () => {
        // Arrange
        // Act
        const address = await service.getAddressByCoordinates({
            lat: 40,
            lng: -74,
        });

        // Assert
        expect(address).toBe(formatted_address);
    });
});
