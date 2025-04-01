import {
    ApplicationConfig,
    provideZoneChangeDetection,
    isDevMode,
    importProvidersFrom,
    inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
    provideFirebaseApp,
    initializeApp,
    FirebaseApp,
} from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { AuthStoreModule } from './stores/auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { browserLocalPersistence, setPersistence } from 'firebase/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomRouterStateSerializer } from './stores/router/router-state-serializer';
import { environment } from 'src/environments/environment';
import {
    POLYGON_OPTIONS,
    MAP_OPTIONS,
} from './pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/components/map-area-select-form-control/map-area-select-form-control.model';
import { ENTRY_POINT_MARKER_OPTIONS } from './pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/components/map-point-select-form-control/map-point-select-form-control.model';
import { HEAD_OFFICE_LOCATION } from '@services/distance/distance.model';

import { TranslocoModule } from '@modules/transloco/transloco.module';
import {
    provideGoogleMapsLibraries,
    GOOGLE_MAPS_LOADER_CONFIG,
} from './shared/providers/google-maps-provider';

const devMode = isDevMode();

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => {
            const auth = getAuth(inject(FirebaseApp));
            setPersistence(auth, browserLocalPersistence);
            return auth;
        }),
        provideFirestore(() => getFirestore()),
        provideHttpClient(withJsonpSupport()),
        provideStorage(() => getStorage()),
        importProvidersFrom(
            StoreModule.forRoot({ router: routerReducer }),
            EffectsModule.forRoot([]),
            AuthStoreModule,
            TranslocoModule
        ),
        provideRouterStore({ serializer: CustomRouterStateSerializer }),
        ...(devMode ? [provideStoreDevtools()] : []),
        provideAnimationsAsync(),
        provideGoogleMapsLibraries(),
        {
            provide: POLYGON_OPTIONS,
            useValue: {
                clickable: true,
                draggable: true,
                editable: true,
                fillOpacity: 0.5,
                strokeColor: 'blue',
                fillColor: 'blue',
            },
        },
        {
            provide: MAP_OPTIONS,
            useValue: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
        },
        {
            provide: ENTRY_POINT_MARKER_OPTIONS,
            useValue: {
                gmpDraggable: true,
            },
        },
        {
            provide: GOOGLE_MAPS_LOADER_CONFIG,
            useValue: {
                url: 'https://maps.googleapis.com/maps/api/js?',
                key: environment.googleMapsConfig.apiKey,
                version: '3.59',
                region: 'HU',
            },
        },
        {
            provide: HEAD_OFFICE_LOCATION,
            useValue: { lat: 47.312498121576795, lng: 21.309304570654604 },
        },
    ],
};

/*
import {
initializeAppCheck,
ReCaptchaEnterpriseProvider,
provideAppCheck,
} from '@angular/fire/app-check';
  
provideAppCheck(() => {
get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key );
return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });}), 
*/
