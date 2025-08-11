import { Coordinates } from '@stores/location/location.model';

export interface TargetAreaXVM {
    options: google.maps.PolygonOptions;
    coordinates: Coordinates[];
}
