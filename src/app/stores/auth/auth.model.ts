import { JSONValue } from 'src/app/shared/interfaces/JSON-value.interface';

export interface User extends Record<string, JSONValue> {
    uid: string;
    photoURL: string | null;
    email: string | null;
    displayName: string | null;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: Error | null;
}
