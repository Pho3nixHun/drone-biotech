import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as Effects from './auth.effects';
import { authFeature } from './auth.state';
import { AuthModule } from '@angular/fire/auth';

@NgModule({
    imports: [
        AuthModule,
        EffectsModule.forFeature([Effects]),
        StoreModule.forFeature(authFeature),
    ],
})
export class AuthStoreModule {}
