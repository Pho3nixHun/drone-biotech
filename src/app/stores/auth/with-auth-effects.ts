import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    AuthError,
    signOut,
    Auth,
    User,
} from '@angular/fire/auth';
import { signalStoreFeature } from '@ngrx/signals';
import { Events, withEffects } from '@ngrx/signals/events';
import { Observable, map, switchMap, from, catchError, of } from 'rxjs';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { authEvents } from './auth.events';
import { mapFirebaseUser, mapFirebaseError } from './auth.mapping';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function withAuthEffects() {
    return signalStoreFeature(
        withEffects(() => {
            const auth = inject(Auth);
            const events = inject(Events);
            const router = inject(Router);
            return {
                retrieveUser$: events.on(authEvents.retrieveUser).pipe(
                    switchMap(
                        () =>
                            new Observable<User | null>((subscriber) =>
                                onAuthStateChanged(auth, subscriber)
                            )
                    ),
                    map((user) =>
                        user
                            ? authEvents.retrieveUserSuccess(
                                  mapFirebaseUser(user)
                              )
                            : authEvents.retrieveUserFailure()
                    )
                ),

                signInUser$: events.on(authEvents.signIn).pipe(
                    switchMap(({ payload }) =>
                        from(
                            signInWithEmailAndPassword(
                                auth,
                                payload.email,
                                payload.password
                            )
                        ).pipe(
                            map((userCredential) =>
                                authEvents.signInSuccess(
                                    mapFirebaseUser(userCredential.user)
                                )
                            ),
                            catchError((error: AuthError) =>
                                of(
                                    authEvents.signInFailure(
                                        mapFirebaseError(error)
                                    )
                                )
                            )
                        )
                    )
                ),

                signOutUser$: events.on(authEvents.signOut).pipe(
                    switchMap(() =>
                        from(signOut(auth)).pipe(
                            map(() => {
                                router.navigate([AppRouteSegment.LOGIN]);
                                authEvents.signOutSuccess();
                            }),
                            catchError((error) =>
                                of(authEvents.signOutFailure(error))
                            )
                        )
                    )
                ),
            };
        })
    );
}
