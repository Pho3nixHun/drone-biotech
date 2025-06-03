import { Coordinates } from '@stores/location/location.model';
export interface AutoCompleteRequest {
    input: string;
    includedRegionCodes: string[];
    origin?: Coordinates;
}

export interface Place {
    placeId: string;
    distance: number | null;
    description: string;
}
