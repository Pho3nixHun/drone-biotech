import { JSONValue } from 'src/app/shared/interfaces/JSON-value.interface';

export type UserRole = 'customer' | 'pilot' | 'office';

export interface User extends Record<string, JSONValue> {
    uid: string;
    photoURL: string | null;
    email: string | null;
    displayName: string | null;
    role: UserRole;
    name: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: AuthenticationError | null;
}

export interface AuthenticationError extends Error {
    code: string;
}
