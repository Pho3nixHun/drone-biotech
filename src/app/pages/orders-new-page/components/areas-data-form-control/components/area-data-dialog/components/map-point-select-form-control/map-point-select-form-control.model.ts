import { InjectionToken } from '@angular/core';
import { Coordinates } from '../../area-data-dialog.model';

export const ENTRY_POINT_MARKER_OPTIONS =
    new InjectionToken<google.maps.marker.AdvancedMarkerElementOptions>(
        'Injection Token for entry point marker options'
    );

export interface MapPointSelectFormControlVM {
    defaultCenter: Coordinates | null;
    deleteButtonTextKey: string;
    addButtonTextKey: string;
}
