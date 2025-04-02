import { computed, inject, Injectable, Signal } from '@angular/core';
import { LoginPageVM } from './login-page-vm.model';
import { loginPageVMDefault } from './login-page.mock';
import { Store } from '@ngrx/store';
import { selectAuthenticationError } from 'src/app/stores/auth/auth.selector';
import { toSignal } from '@angular/core/rxjs-interop';
import { mapErrorCodeToTranslocoKey } from 'src/app/stores/auth/auth.mapping';

@Injectable({
    providedIn: 'root',
})
export class LoginPageService {
    private readonly store = inject(Store);
    private readonly selectedAuthError = toSignal(
        this.store.select(selectAuthenticationError),
        { initialValue: null }
    );
    private readonly authError = computed<string | null>(() => {
        const error = this.selectedAuthError();
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
