import { importProvidersFrom, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { CustomRouterStateSerializer } from '@stores/router/router-state-serializer';
import * as routerEffects from '@stores/router/router.effects';

@NgModule({
    providers: [
        provideStore({
            router: routerReducer,
        }),
        provideRouterStore({
            serializer: CustomRouterStateSerializer,
        }),
        importProvidersFrom([EffectsModule.forRoot(routerEffects)]),
    ],
})
export class RouterStoreModule {}
