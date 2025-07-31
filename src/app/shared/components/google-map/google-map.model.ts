import { Coordinates } from '@stores/location/location.model';

export interface GoogleMapVM {
    height: GoogleMapHeight;
    center: Coordinates;
    mapOptions: google.maps.MapOptions;
}

export enum GoogleMapHeight {
    FIVE_HUNDRED_PX = 'height: 500px',
}
