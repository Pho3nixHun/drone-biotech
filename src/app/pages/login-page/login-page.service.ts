import { computed, inject, Injectable, Signal } from '@angular/core';
import { LoginPageVM } from './login-page-vm.model';
import { loginPageVM } from './login-page.mock';
import { mapErrorCodeToTranslocoKey } from 'src/app/stores/auth/auth.mapping';
import { AuthStore } from '@stores/auth/auth.store';

@Injectable({
    providedIn: 'root',
})
export class LoginPageService {
    private readonly store = inject(AuthStore);
    private readonly authError = computed<string | null>(() => {
        const error = this.store.error();
        return error ? mapErrorCodeToTranslocoKey(error.code) : null;
    });

    private readonly vm = computed<LoginPageVM>(() => {
        const errorMessageKey = this.authError();
        return {
            loginFormXVM: {
                ...loginPageVM.loginFormXVM,
                errorMessageKey,
            },
        };
    });

    public getVM(): Signal<LoginPageVM | undefined> {
        return this.vm;
    }
}
