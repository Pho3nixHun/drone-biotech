import { JSONValue } from 'src/app/shared/interfaces/JSON-value.interface';

export enum UserRole {
    CUSTOMER = 'customer',
    PILOT = 'pilot',
    OFFICE = 'office',
}
export interface User extends Record<string, JSONValue> {
    uid: string;
    photoURL: string | null;
    email: string | null;
    displayName: string;
    role: UserRole;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: AuthenticationError | null;
}

export interface AuthenticationError extends Error {
    code: string;
}
