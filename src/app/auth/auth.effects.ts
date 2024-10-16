import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AuthActions from '../auth/auth.actions';
import { FirebaseError } from 'firebase/app';

@Injectable()
export class AuthEffects {
  private readonly auth = inject(Auth);
  private readonly actions$ = inject(Actions);

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      mergeMap(({ email, password }) =>
        from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
          map((userCredential) => AuthActions.registerUserSuccess({ user: userCredential.user })),
          catchError((error: FirebaseError) => of(AuthActions.registerUserFailure({ error }))),
        ),
      ),
    ),
  );
}
