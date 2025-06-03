import { inject, InjectionToken, provideAppInitializer } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { TranslocoService } from '@jsverse/transloco';
import { Coordinates } from '@stores/location/location.model';

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

export const provideMockHeadOfficeLocation = (
    coordinates: Coordinates = { lat: 90, lng: 90 }
) => ({
    provide: HEAD_OFFICE_LOCATION,
    useValue: coordinates,
});

export const HEAD_OFFICE_LOCATION = new InjectionToken<Coordinates>(
    'Config for the location of the headOffice'
);

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

export const ENTRY_POINT_MARKER_OPTIONS =
    new InjectionToken<google.maps.marker.AdvancedMarkerElementOptions>(
        'Injection Token for entry point marker options'
    );

export const provideMockEntryPointMarkerOptions = () => ({
    provide: ENTRY_POINT_MARKER_OPTIONS,
    useValue: {},
});

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
