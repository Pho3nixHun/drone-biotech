import { InjectionToken } from '@angular/core';

export interface MapsConfigVM {
    mapOptions: google.maps.MapOptions;
    drawingControlOptions: google.maps.drawing.DrawingControlOptions;
    polygonOptions: google.maps.PolygonOptions;
}

export const DRAWING_CONTROL_OPTIONS =
    new InjectionToken<google.maps.PolygonOptions>(
        'Injection Token for Drawing Control Options'
    );
export const POLYGON_OPTIONS = new InjectionToken<google.maps.PolygonOptions>(
    'Injection Token for Polygon Options'
);
export const MAP_OPTIONS = new InjectionToken<google.maps.MapOptions>(
    'Injection Token for Map Options'
);

export const provideMockDrawingControlOptions = () => ({
    provide: DRAWING_CONTROL_OPTIONS,
    useValue: {},
});
export const provideMockMapOptions = () => ({
    provide: MAP_OPTIONS,
    useValue: {},
});
export const provideMockPolygonOptions = () => ({
    provide: POLYGON_OPTIONS,
    useValue: {},
});
