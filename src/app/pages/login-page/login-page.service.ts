import { computed, inject, Injectable, Signal } from '@angular/core';
import { LoginPageVM } from './login-page-vm.model';
import { loginPageVMDefault } from './login-page.mock';
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
        const authError = this.authError();
        return {
            loginFormXVM: {
                ...loginPageVMDefault.loginFormXVM,
                errorMessageKey: authError,
            },
        };
    });

    public getVM(): Signal<LoginPageVM> {
        return this.vm;
    }
}
