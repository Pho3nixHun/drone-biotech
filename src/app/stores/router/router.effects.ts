import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { isNotUndefined } from '@utils/is-undefined.typeguard';
import { tap } from 'rxjs';

const INIT_FLYONUI_DELAY = 100;

export const initFlyonUIAfterNavigation$ = createEffect(
    (actions$ = inject(Actions)) =>
        actions$.pipe(
            ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
            tap(() =>
                setTimeout(() => {
                    if (isNotUndefined(window) && window.HSTabs) {
                        window.HSTabs.autoInit();
                    }
                }, INIT_FLYONUI_DELAY)
            )
        ),
    { functional: true, dispatch: false }
);
