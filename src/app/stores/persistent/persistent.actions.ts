import { createActionGroup, props } from '@ngrx/store';
import { PersistentStoreStorage } from './persistent.model';

export const PersistentActions = createActionGroup({
  source: 'Persistent',
  events: {
    saveKeyValue: props<{ key: string; value: PersistentStoreStorage }>(),
    saveKeyValueSuccess: props<{ key: string; value: PersistentStoreStorage }>(),
    saveKeyValueFailure: props<{ error: Error }>(),
    loadKeysSuccess: props<{ entries: Record<string, PersistentStoreStorage> }>(),
    loadKeysFailure: props<{ error: Error }>(),
  },
});
