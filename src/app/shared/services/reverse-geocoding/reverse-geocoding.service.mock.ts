import { computed, Injectable, signal } from '@angular/core';
import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { ReverseGeocodingService } from './reverse-geocoding.service';

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
