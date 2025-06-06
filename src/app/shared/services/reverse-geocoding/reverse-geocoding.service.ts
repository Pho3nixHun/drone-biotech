import { Injectable } from '@angular/core';
import { Coordinates } from '@stores/location/location.model';

@Injectable({
    providedIn: 'root',
})
export class ReverseGeocodingService {
    public readonly cache = new Map<string, string>();
    private readonly geocoder = new google.maps.Geocoder();

    public async getAddressByCoordinates(
        coordinate: Coordinates
    ): Promise<string> {
        const cacheKey = JSON.stringify(coordinate);
        const cacheValue = this.cache.get(cacheKey);

        if (cacheValue) {
            return cacheValue;
        }

        const response = await this.geocoder.geocode({
            location: coordinate,
        });

        const address = response.results[0].formatted_address;
        this.cache.set(cacheKey, address);
        return address;
    }
}
