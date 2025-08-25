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
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from 'src/environments/environment';
import { TranslocoModule } from '@modules/transloco/transloco.module';
import { mapFormControlConfig } from './pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/components/map-form-control/map-form-control.config';
import { pilotDashboardPageConfig } from './pages/pilot-dashboard-page/pilot-dashboard-page.config';
import { dashboardPageConfig } from './pages/dashboard-page/dashboard-page.config';
import { customerDashboardPageConfig } from './pages/customer-dashboard-page/customer-dashboard-page.config';
import { officeDashboardPageConfig } from './pages/office-dashboard-page/office-dashboard-page.config';
import { orderDetailsPageConfig } from './pages/order-details-page/order-details-page.config';
import { CustomRouterStateSerializer } from '@stores/router/router-state-serializer';
import { AuthModule } from '@stores/auth/auth.module';

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
        provideStore({
            router: routerReducer,
        }),
        provideRouterStore({
            serializer: CustomRouterStateSerializer,
        }),
        importProvidersFrom([TranslocoModule, AuthModule]),
        ...(devMode ? [provideStoreDevtools()] : []),
        provideAnimationsAsync(),
        mapFormControlConfig,
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
