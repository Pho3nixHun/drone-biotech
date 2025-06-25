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
import { mapFormControlConfig } from './pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/components/map-form-control/map-form-control.config';
import { orderDetailsPageConfig } from './pages/order-details-page/order-details-page.config';

const devMode = isDevMode();

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
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
        mapFormControlConfig,
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
