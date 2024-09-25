import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    translocoConfig: {
      availableLangs: ['en', 'hu'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
