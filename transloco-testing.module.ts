import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';

const defaultTranslocoTestingOptions: TranslocoTestingOptions = {
  langs: { en: {} },
  translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
  preloadLangs: true,
};

export const getTranslocoModule = (options: TranslocoTestingOptions = {}) => 
  TranslocoTestingModule.forRoot({
    ...defaultTranslocoTestingOptions,
    ...options
  });
