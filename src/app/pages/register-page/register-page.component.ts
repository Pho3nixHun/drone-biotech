import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/auth/auth.models';
import * as AuthActions from 'src/app/auth/auth.actions';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  private readonly store = inject(Store<AuthState>);

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;
      if (email && password) this.store.dispatch(AuthActions.registerUser({ email, password }));
    }
  }
}
