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
import {
    browserLocalPersistence,
    getAuth,
    provideAuth,
} from '@angular/fire/auth';
import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from 'src/environments/environment';
import { TranslocoModule } from '@modules/transloco/transloco.module';
import { pilotDashboardPageConfig } from './pages/pilot-dashboard-page/pilot-dashboard-page.config';
import { dashboardPageConfig } from './pages/dashboard-page/dashboard-page.config';
import { customerDashboardPageConfig } from './pages/customer-dashboard-page/customer-dashboard-page.config';
import { officeDashboardPageConfig } from './pages/office-dashboard-page/office-dashboard-page.config';
import { orderDetailsPageConfig } from './pages/order-details-page/order-details-page.config';
import { AuthModule } from '@stores/auth/auth.module';
import { GoogleMapsModule } from '@modules/google-maps/google-maps.module';
import {
    provideGoogleMapsApiKey,
    provideGoogleMapsVersion,
    provideGoogleMapsLoader,
    provideGoogleMapsInitializer,
} from '@providers/google-maps-provider';
import { RouterStoreModule } from '@stores/router/router-store.module';

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
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => {
            const auth = getAuth(inject(FirebaseApp));
            auth.setPersistence(browserLocalPersistence);
            return auth;
        }),
        provideHttpClient(withJsonpSupport()),
        provideGoogleMapsApiKey(environment.googleMaps.apiKey),
        provideGoogleMapsVersion(environment.googleMaps.version),
        provideGoogleMapsLoader(),
        provideGoogleMapsInitializer(environment.googleMaps.libraries),
        importProvidersFrom([
            RouterStoreModule,
            TranslocoModule,
            AuthModule,
            GoogleMapsModule,
        ]),
        ...(devMode ? [provideStoreDevtools()] : []),
        provideAnimationsAsync(),
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
