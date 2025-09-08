import { InjectionToken } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';

export const ENTRY_POINT_MARKER_OPTIONS =
    new InjectionToken<google.maps.marker.AdvancedMarkerElementOptions>(
        'Injection Token for entry point marker options'
    );

export const provideMockEntryPointMarkerOptions = () => ({
    provide: ENTRY_POINT_MARKER_OPTIONS,
    useValue: {},
});

export interface MapPointSelectFormControlVM {
    deleteButtonXVM: ButtonXVM;
    addButtonXVM: ButtonXVM;
}
