import { inject, InjectionToken, provideAppInitializer } from '@angular/core';
import { Library, Loader } from '@googlemaps/js-api-loader';

export const GOOGLE_MAPS_API_KEY = new InjectionToken<string>(
    'GOOGLE_MAPS_API_KEY'
);
export const GOOGLE_MAPS_VERSION = new InjectionToken<string>(
    'GOOGLE_MAPS_VERSION'
);

export const GOOGLE_MAPS_LOADER = new InjectionToken<Loader>(
    'GOOGLE_MAPS_LOADER'
);

export const provideGoogleMapsApiKey = (apiKey: string) => {
    return { provide: GOOGLE_MAPS_API_KEY, useValue: apiKey };
};

export const provideGoogleMapsVersion = (version: string) => {
    return { provide: GOOGLE_MAPS_VERSION, useValue: version };
};

export const provideGoogleMapsLoader = () => {
    return {
        provide: GOOGLE_MAPS_LOADER,
        useFactory: () => {
            const apiKey = inject(GOOGLE_MAPS_API_KEY);
            const version = inject(GOOGLE_MAPS_VERSION);
            return new Loader({
                apiKey,
                version,
            });
        },
    };
};

export const provideGoogleMapsInitializer = (
    libraries: Library[] = ['drawing']
) => {
    return provideAppInitializer(async () => {
        const loader = inject(GOOGLE_MAPS_LOADER);

        // Preload only selected libraries during app bootstrap
        const loadedLibraries = await Promise.all(
            libraries.map((lib) => loader.importLibrary(lib))
        );

        return loadedLibraries;
    });
};
