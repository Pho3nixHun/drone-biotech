import { InjectionToken, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as Effects from './persistent.effects';
import { persistentFeature } from './persistent.state';
import { PersistentStoreConfig } from './persistent.model';

@NgModule({
  imports: [EffectsModule.forFeature([Effects]), StoreModule.forFeature(persistentFeature)],
})
export class PersistentModule {}

export const PersistentModuleConfig = new InjectionToken<PersistentStoreConfig>(
  'Configuration object for PersistentStore',
);
