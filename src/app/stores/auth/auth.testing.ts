import { signal } from '@angular/core';
import { AuthStore } from './auth.store';
import { User } from '@angular/fire/auth';

class MockAuthStore {
    public user = signal<User | null>(null);
}

export const provideMockAuthStore = () => ({
    provide: AuthStore,
    useClass: MockAuthStore,
});
