import { inject, NgModule } from '@angular/core';
import { AuthStore } from './auth.store';
import { authEvents } from './auth.events';
import { injectDispatch } from '@ngrx/signals/events';

@NgModule({
    declarations: [],
    imports: [],
})
export class AuthModule {
    private readonly _ = inject(AuthStore);
    private readonly authEvents = injectDispatch(authEvents);
    private readonly retrieveUser = authEvents.retrieveUser();
}
