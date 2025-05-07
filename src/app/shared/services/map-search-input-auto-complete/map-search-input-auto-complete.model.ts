import { Coordinates } from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';

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
