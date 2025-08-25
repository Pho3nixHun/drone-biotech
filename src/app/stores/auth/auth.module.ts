import { inject, NgModule } from '@angular/core';
import { AuthStore } from './auth.store';

@NgModule()
export class AuthModule {
    private readonly _ = inject(AuthStore);
}
