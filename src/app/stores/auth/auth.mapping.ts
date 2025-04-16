import { AuthError, User as FirebaseUser } from '@angular/fire/auth';
import { AuthenticationError, User } from './auth.model';

export const mapFirebaseUser = (user: FirebaseUser): User => ({
    uid: user.uid,
    photoURL: user.photoURL,
    email: user.email,
    displayName: user.displayName,
});

export const mapFirebaseError = (error: AuthError): AuthenticationError => {
    return {
        code: error.code,
        message: error.message,
        name: error.name,
        cause: error.cause,
        stack: error.stack,
    };
};

export const mapErrorCodeToTranslocoKey = (code: string): string =>
    ({
        'auth/invalid-credential': 'LoginPage.error.invalid',
        'auth/too-many-requests': 'LoginPage.error.many',
    })[code] ?? 'LoginPage.error.unknown';
