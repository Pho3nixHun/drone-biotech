import { Component, input } from '@angular/core';
import { LoginFormVM } from './login-form-vm.model';
/**
 * LoginFormComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering the LoginForm.
 * - Manages the layout and styling of the LoginForm.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic.
 * - Should not be responsible for manipulating or transforming data.
 *
 * Purpose(optional):
 * - To create a simple layout, a form where the user can login.
 */

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public vm = input.required<LoginFormVM>();
}
