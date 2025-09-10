import { Component, inject } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { LoginFormComponent } from 'src/app/pages/login-page/components/login-form/login-form.component';
import { LoginPageService } from './login-page.service';
import { injectDispatch } from '@ngrx/signals/events';
import { authEvents } from '@stores/auth/auth.events';
import { ButtonComponent } from '@components/button/button.component';
import { InputTextComponent } from '@components/input-text/input-text.component';

const PASSWORD_MIN_LENGTH = 6;
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
        LoginFormComponent,
        TranslocoModule,
        ButtonComponent,
        InputTextComponent,
    ],
    templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
    private readonly fb = inject(FormBuilder);
    private readonly authEvents = injectDispatch(authEvents);
    protected readonly vm = inject(LoginPageService).getVM();
    private readonly passwordMinLength = PASSWORD_MIN_LENGTH;

    public readonly formGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
            '',
            [Validators.required, Validators.minLength(this.passwordMinLength)],
        ],
    });

    protected signIn() {
        if (this.formGroup.invalid) return;
        const { email, password } = this.formGroup.value;

        if (!email || !password) return;
        this.authEvents.signIn({ email, password });
    }
}
