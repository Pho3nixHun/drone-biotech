import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideTransloco } from '@jsverse/transloco';
import { provideTranslocoLocale } from '@jsverse/transloco-locale';
import { provideTranslocoMessageformat } from '@jsverse/transloco-messageformat';
import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { provideTranslocoPersistTranslations } from '@jsverse/transloco-persist-translations';
import { TranslocoHttpLoader } from '@modules/transloco/transloco-loader';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        provideTransloco({
            config: {
                availableLangs: ['en', 'hu'],
                defaultLang: 'en',
                reRenderOnLangChange: true,
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
    ],
})
export class TranslocoModule {}
