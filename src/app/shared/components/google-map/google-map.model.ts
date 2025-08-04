import { Coordinates } from '@stores/location/location.model';

export interface GoogleMapVM {
    center: Coordinates;
    mapOptions: google.maps.MapOptions;
}
