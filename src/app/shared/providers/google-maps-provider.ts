import { inject, InjectionToken, provideAppInitializer } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { TranslocoService } from '@jsverse/transloco';

export const POLYGON_OPTIONS = new InjectionToken<google.maps.PolygonOptions>(
    'Injection Token for Polygon options'
);

export const provideMockPolygonOptions = () => ({
    provide: POLYGON_OPTIONS,
    useValue: {},
});

export const ACTIVE_MISSION_POLYGON_OPTIONS =
    new InjectionToken<google.maps.PolygonOptions>(
        'Polygon options for active mission'
    );

export const provideActiveMissionPolygonOptions = () => ({
    provide: ACTIVE_MISSION_POLYGON_OPTIONS,
    useValue: {},
});

export const COMPLETED_MISSION_POLYGON_OPTIONS =
    new InjectionToken<google.maps.PolygonOptions>(
        'Polygon options for completed mission'
    );

export const provideCompletedMissionPolygonOptions = () => ({
    provide: COMPLETED_MISSION_POLYGON_OPTIONS,
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

export const MAP_OPTIONS = new InjectionToken<MapOptions>(
    'Injection Token for Map options'
);

export const provideMockMapOptions = () => ({
    provide: MAP_OPTIONS,
    useValue: {},
});
export interface MapOptions {
    mapTypeId: 'roadmap';
    disableDoubleClickZoom: boolean;
    clickableIcons: boolean;
    mapId: 'DEMO_MAP_ID';
    zoom: number;
    streetViewControl: boolean;
}

export interface GoogleMapsLoaderConfig {
    url: string;
    key: string;
    version: string;
    region: string;
}

export const GOOGLE_MAPS_LOADER_CONFIG =
    new InjectionToken<GoogleMapsLoaderConfig>(
        'Injection Token for Google Maps Loader config'
    );

export const provideMockGoogleMapsLoaderConfig = () => ({
    provide: GOOGLE_MAPS_LOADER_CONFIG,
    useValue: {},
});

export const provideGoogleMapsLibraries = () =>
    provideAppInitializer(() => {
        const initializerFn = (
            (
                config = inject(GOOGLE_MAPS_LOADER_CONFIG),
                translocoService = inject(TranslocoService)
            ) =>
            () => {
                const loader = new Loader({
                    apiKey: config.key,
                    version: config.version,
                    url: config.url,
                    region: config.region,
                    language: translocoService.getActiveLang(),
                });

                return Promise.all([
                    loader.importLibrary('maps'),
                    loader.importLibrary('marker'),
                    loader.importLibrary('places'),
                ]);
            }
        )(inject(GOOGLE_MAPS_LOADER_CONFIG), inject(TranslocoService));
        return initializerFn();
    });
