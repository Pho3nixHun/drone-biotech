import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, Observable, of } from 'rxjs';
import {
    Auth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from '@angular/fire/auth';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthActions } from './auth.actions';
import { mapFirebaseUser } from './auth.mapping';
import { Router } from '@angular/router';

export const retrieveUser = createEffect(
    (auth = inject(Auth)) =>
        new Observable<User | null>((subscriber) =>
            onAuthStateChanged(auth, subscriber)
        ).pipe(
            map((user) => {
                if (user) {
                    const currentUser = mapFirebaseUser(user);
                    return AuthActions.retrieveUserSuccess({
                        user: currentUser,
                    });
                }
                return AuthActions.retrieveUserFailure();
            })
        ),
    { functional: true }
);

export const navigateAfterSignIn = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) =>
        actions$.pipe(
            ofType(AuthActions.signInSuccess),
            tap(() => {
                router.navigate(['']);
            })
        ),
    { functional: true, dispatch: false }
);

export const navigateAfterSignOut = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) =>
        actions$.pipe(
            ofType(AuthActions.signOutSuccess),
            tap(() => {
                router.navigate(['/login']);
            })
        ),
    { functional: true, dispatch: false }
);

export const signInUser$ = createEffect(
    (actions$ = inject(Actions), auth = inject(Auth)) =>
        actions$.pipe(
            ofType(AuthActions.signIn),
            switchMap(({ email, password }) =>
                from(signInWithEmailAndPassword(auth, email, password)).pipe(
                    map((userCredential) =>
                        AuthActions.signInSuccess({
                            user: mapFirebaseUser(userCredential.user),
                        })
                    ),
                    catchError((error) =>
                        of(AuthActions.signInFailure({ error }))
                    )
                )
            )
        ),
    { functional: true }
);

export const signOutUser$ = createEffect(
    (actions$ = inject(Actions), auth = inject(Auth)) =>
        actions$.pipe(
            ofType(AuthActions.signOut),
            switchMap(() =>
                from(signOut(auth)).pipe(
                    map(() => AuthActions.signOutSuccess()),
                    catchError((error) =>
                        of(AuthActions.signOutFailure({ error }))
                    )
                )
            )
        ),
    { functional: true }
);
