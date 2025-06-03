import { computed, Injectable, signal } from '@angular/core';
import { ReverseGeocodingService } from './reverse-geocoding.service';
import { Coordinates } from '@stores/location/location.model';

@Injectable({
    providedIn: 'root',
})
export class ReverseGeocodingServiceMock {
    public async getAddressByCoordinates(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        coordinate: Coordinates
    ): Promise<string> {
        return await addressPromise();
    }
}

const addressSignal = signal<string>('');

const addressPromise = computed<Promise<string>>(async () => addressSignal());

export const updateAddressSignal = (address: string) =>
    addressSignal.set(address);

export const provideMockReverseGeocodingService = () => ({
    provide: ReverseGeocodingService,
    useClass: ReverseGeocodingServiceMock,
});
