import { InjectionToken } from '@angular/core';

export type GmpPolygonOptions = Pick<
    google.maps.PolygonOptions,
    'fillOpacity' | 'strokeOpacity' | 'strokeWeight'
>;

export const GMP_POLYGON_OPTIONS = new InjectionToken<GmpPolygonOptions>(
    'Injection Token for GMP Polygon options'
);

export const provideMockGmpPolygonOptions = () => ({
    provide: GMP_POLYGON_OPTIONS,
    useValue: {},
});
