import { Component, inject } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { TranslocoModule } from '@jsverse/transloco';
import { LoginFormComponent } from 'src/app/pages/login-page/components/login-form/login-form.component';
import { AuthActions } from 'src/app/stores/auth/auth.actions';
import { LoginPageService } from './login-page.service';

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
    imports: [
        ReactiveFormsModule,
        NgClass,
        LoginFormComponent,
        TranslocoModule,
    ],
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
    protected readonly vm = inject(LoginPageService).getVM();
    private readonly store = inject(Store);
    private readonly fb = inject(FormBuilder);

    public readonly loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    signIn() {
        if (this.loginForm.invalid) return;

        const { email, password } = this.loginForm.value;

        if (email && password) {
            this.store.dispatch(
                AuthActions.signIn({
                    email,
                    password,
                })
            );
        }
    }
}
