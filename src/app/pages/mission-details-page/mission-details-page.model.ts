import { Coordinates } from '@stores/location/location.model';

export interface MissionDetailsPageVM {
    mapFormControlXVM: MapFormControlXVM;
}

interface MapFormControlXVM {
    mapControl: MapControl;
}

export interface Mission {
    targetArea: Coordinates[];
    entryPoint: Coordinates;
}

export interface MapControl {
    targetArea: Coordinates[] | null;
    entryPoint: Coordinates | null;
}
