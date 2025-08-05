import { Coordinates } from '@stores/location/location.model';

export interface EntryPointXVM {
    options: google.maps.marker.AdvancedMarkerElementOptions;
    position: Coordinates;
}
