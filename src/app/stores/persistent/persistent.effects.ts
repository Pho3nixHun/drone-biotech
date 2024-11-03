import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of } from 'rxjs';
import { PersistentActions } from './persistent.actions';
import { inject } from '@angular/core';
import { PersistentModuleConfig } from './persistent.module';
import { JSONValue } from 'src/app/shared/interfaces/json.interface';

export const loadKeyValue = createEffect(
  (config = inject(PersistentModuleConfig)) =>
    of(true).pipe(
      map(() => {
        const entries = Object.keys(config.storage)
          .filter((key) => typeof key === 'string' && key.startsWith(config.root))
          .reduce((accumulator, key) => {
            const valueRaw = config.storage.getItem(key);
            const value: JSONValue = valueRaw ? JSON.parse(valueRaw) : null;
            return { ...accumulator, [key]: value };
          }, {});
        return PersistentActions.loadKeysSuccess({ entries });
      }),
    ),
  { functional: true },
);

export const saveKeyValue = createEffect(
  (actions$ = inject(Actions), config = inject(PersistentModuleConfig)) =>
    actions$.pipe(
      ofType(PersistentActions.saveKeyValue),
      map(({ key, value }) => {
        const relativeKey = `${config.root}.${key}`;
        try {
          config.storage.setItem(relativeKey, JSON.stringify(value));
          return PersistentActions.saveKeyValueSuccess({
            key: relativeKey,
            value: value,
          });
        } catch (err) {
          const error = err instanceof Error ? err : new Error('Unknown error');
          return PersistentActions.saveKeyValueFailure({ error });
        }
      }),
    ),
  { functional: true },
);
