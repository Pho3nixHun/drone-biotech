import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private readonly httpClient = inject(HttpClient);

    getTranslation(lang: string) {
        return this.httpClient.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}
