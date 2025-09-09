import { InjectionToken } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';

export interface MapAreaSelectFormControlVM {
    areaValueKey: string;
    addButtonXVM: ButtonXVM;
    editButtonXVM: ButtonXVM;
    deleteButtonXVM: ButtonXVM;
    coordinatesInputTextareaXVM: InputTextareaXVM;
}

export const POLYGON_OPTIONS = new InjectionToken<google.maps.PolygonOptions>(
    'Injection Token for Polygon options'
);

export const provideMockPolygonOptions = () => ({
    provide: POLYGON_OPTIONS,
    useValue: {},
});
export const INFO_WINDOW_OPTIONS =
    new InjectionToken<google.maps.InfoWindowOptions>(
        'Injection Token for Info Window options'
    );

export const provideMockInfoWindowOptions = () => ({
    provide: INFO_WINDOW_OPTIONS,
    useValue: {},
});
