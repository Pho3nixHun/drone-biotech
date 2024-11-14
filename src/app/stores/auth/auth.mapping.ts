import { User as FirebaseUser } from '@firebase/auth';
import { User } from './auth.model';

export const mapFirebaseUser = (user: FirebaseUser): User => ({
    uid: user.uid,
    photoURL: user.photoURL,
    email: user.email,
    displayName: user.displayName,
});
