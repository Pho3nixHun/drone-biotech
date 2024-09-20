import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import en from 'src/assets/i18n/en.json';
import hu from 'src/assets/i18n/hu.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, hu },
    translocoConfig: {
      availableLangs: ['en', 'hu'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
