import { NgModule } from '@angular/core';
import { routerReducer, provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { CustomRouterStateSerializer } from '@stores/router/router-state-serializer';

@NgModule({
    providers: [
        provideStore({
            router: routerReducer,
        }),
        provideRouterStore({
            serializer: CustomRouterStateSerializer,
        }),
    ],
})
export class RouterStoreModule {}
