import { InjectionToken } from '@angular/core';
import { Coordinates } from '../../area-data-dialog.model';

export interface MapAreaSelectFormControlVM {
    addButtonTextKey: string;
    deleteButtonTextKey: string;
    defaultCenter: Coordinates | null;
}

export const POLYGON_OPTIONS = new InjectionToken<google.maps.PolygonOptions>(
    'Injection Token for Polygon options'
);
export const MAP_OPTIONS = new InjectionToken<google.maps.MapOptions>(
    'Injection Token for Map options'
);

export const provideMockMapOptions = () => ({
    provide: MAP_OPTIONS,
    useValue: {},
});
export const provideMockPolygonOptions = () => ({
    provide: POLYGON_OPTIONS,
    useValue: {},
});
