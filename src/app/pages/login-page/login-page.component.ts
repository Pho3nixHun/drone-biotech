import { Component, inject, Signal } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { Auth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { TranslocoModule } from '@jsverse/transloco';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { AuthActions } from 'src/app/stores/auth/auth.actions';
import { AuthState } from 'src/app/stores/auth/auth.model';
import { LoginPageService } from './login-page.service';
import { LoginPageVM } from './login-page-vm.model';

/**
 * LoginPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Responsible for rendering a form where the user can make an interaction with the application.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */
@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgClass,
        LoginFormComponent,
        TranslocoModule,
    ],
    templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
    private readonly store = inject(Store<AuthState>);
    private readonly auth = inject(Auth);
    private readonly loginService = inject(LoginPageService);
    protected vm: Signal<LoginPageVM> = this.loginService.getVM();

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    signIn() {
        const isFormValid = this.loginForm.valid;
        const emailValue = this.email?.value;
        const passwordValue = this.password?.value;

        const hasCredentials = !!emailValue && !!passwordValue;

        if (isFormValid && hasCredentials) {
            this.store.dispatch(
                AuthActions.signIn({
                    email: emailValue,
                    password: passwordValue,
                })
            );
        }
    }
}
