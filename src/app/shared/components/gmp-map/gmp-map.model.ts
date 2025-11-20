import { InjectionToken } from '@angular/core';

export interface GmpMapOptions
    extends Pick<
        google.maps.MapOptions,
        | 'mapId'
        | 'mapTypeId'
        | 'clickableIcons'
        | 'mapTypeControl'
        | 'streetViewControl'
        | 'disableDoubleClickZoom'
    > {
    mapId: 'DEMO_MAP_ID';
    mapTypeId: 'roadmap';
}

export const GMP_MAP_OPTIONS = new InjectionToken<GmpMapOptions>(
    'Injection Token for GMP Map options'
);

export const provideMockGmpMapOptions = () => ({
    provide: GMP_MAP_OPTIONS,
    useValue: {},
});
