import {
    ApplicationConfig,
    provideZoneChangeDetection,
    isDevMode,
    importProvidersFrom,
    inject,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
    provideFirebaseApp,
    initializeApp,
    FirebaseApp,
} from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
    browserLocalPersistence,
    getAuth,
    provideAuth,
} from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { StoreModule } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { AuthStoreModule } from './stores/auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomRouterStateSerializer } from './stores/router/router-state-serializer';
import { environment } from 'src/environments/environment';
import { TranslocoModule } from '@modules/transloco/transloco.module';
import {
    GOOGLE_MAPS_LOADER_CONFIG,
    HEAD_OFFICE_LOCATION,
    provideGoogleMapsLibraries,
} from './shared/providers/google-maps-provider';
import { pilotDashboardPageConfig } from './pages/pilot-dashboard-page/pilot-dashboard-page.config';
import { dashboardPageConfig } from './pages/dashboard-page/dashboard-page.config';
import { customerDashboardPageConfig } from './pages/customer-dashboard-page/customer-dashboard-page.config';
import { officeDashboardPageConfig } from './pages/office-dashboard-page/office-dashboard-page.config';
import { orderDetailsPageConfig } from './pages/order-details-page/order-details-page.config';

const devMode = isDevMode();

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            })
        ),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => {
            const auth = getAuth(inject(FirebaseApp));
            auth.setPersistence(browserLocalPersistence);
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
        pilotDashboardPageConfig,
        officeDashboardPageConfig,
        dashboardPageConfig,
        customerDashboardPageConfig,
        orderDetailsPageConfig,
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
