import { APP_INITIALIZER, inject, InjectionToken } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { TranslocoService } from '@jsverse/transloco';

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

export const provideGoogleMapsLibraries = () => ({
    provide: APP_INITIALIZER,
    multi: true,
    useFactory:
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
            ]);
        },
    deps: [GOOGLE_MAPS_LOADER_CONFIG, TranslocoService],
});
