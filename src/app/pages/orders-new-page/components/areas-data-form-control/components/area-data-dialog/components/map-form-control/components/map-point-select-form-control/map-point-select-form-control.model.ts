import { InjectionToken } from '@angular/core';

export const ENTRY_POINT_MARKER_OPTIONS =
    new InjectionToken<google.maps.marker.AdvancedMarkerElementOptions>(
        'Injection Token for entry point marker options'
    );

export const provideMockEntryPointMarkerOptions = () => ({
    provide: ENTRY_POINT_MARKER_OPTIONS,
    useValue: {},
});

export interface MapPointSelectFormControlVM {
    deleteButtonTextKey: string;
    addButtonTextKey: string;
}
