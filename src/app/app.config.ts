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
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideTranslocoMessageformat } from '@jsverse/transloco-messageformat';
import { provideTranslocoPersistTranslations } from '@jsverse/transloco-persist-translations';
import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { provideTranslocoLocale } from '@jsverse/transloco-locale';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  provideRouterStore,
  RouterState,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { AuthStoreModule } from './stores/auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import {
  PersistentModule,
  PersistentModuleConfig,
} from './stores/persistent/persistent.module';
import { browserLocalPersistence, setPersistence } from 'firebase/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/*
import {
initializeAppCheck,
ReCaptchaEnterpriseProvider,
provideAppCheck,
} from '@angular/fire/app-check';
*/

const devMode = isDevMode();
const prodMode = !devMode;

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
      provideHttpClient(),
      provideTransloco({
          config: {
              availableLangs: ['en', 'hu'],
              defaultLang: 'en',
              reRenderOnLangChange: true,
              prodMode,
          },
          loader: TranslocoHttpLoader,
      }),
      provideTranslocoMessageformat(),
      provideTranslocoPersistTranslations({
          loader: TranslocoHttpLoader,
          storage: { useValue: localStorage },
      }),
      provideTranslocoPersistLang({
          storage: {
              useValue: localStorage,
          },
      }),
      provideTranslocoLocale(),
      provideStorage(() => getStorage()),
      {
          provide: PersistentModuleConfig,
          useValue: {
              storage: localStorage,
              root: 'persistentstore',
          },
      },
      importProvidersFrom(
          StoreModule.forRoot(
              {}
              /*{
        runtimeChecks: {
          strictStateImmutability: false, // Disable state immutability checks
          strictActionImmutability: false, // Disable action immutability checks
        },
      },*/
          ),
          EffectsModule.forRoot([]),
          AuthStoreModule,
          PersistentModule,
          StoreRouterConnectingModule.forRoot({
              stateKey: 'router', // Specify the key under which the router state will be stored
              routerState: RouterState.Full, // Use Full to store complete router state
          })
      ),
      provideRouterStore(),
      ...(devMode ? [provideStoreDevtools()] : []),
      provideAnimationsAsync(),

      /*
  

  provideAppCheck(() => {
  TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key );
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });}), 
  */
  ],
};
