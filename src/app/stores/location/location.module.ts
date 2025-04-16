import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as Effects from './location.effects';
import { locationFeature } from './location.state';

@NgModule({
    imports: [
        EffectsModule.forFeature([Effects]),
        StoreModule.forFeature(locationFeature),
    ],
})
export class LocationStoreModule {}

@NgModule({
    imports: [EffectsModule.forRoot([]), StoreModule.forRoot({})],
})
export class LocationStoreMockModule {}
