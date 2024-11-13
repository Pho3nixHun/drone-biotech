import { Injectable, signal, Signal } from '@angular/core';
import { LoginPageServiceModel } from './login-page.service.model';
import { LoginPageVM } from './login-page-vm.model';
import { loginPageVMDefault } from './login-page.mock';

@Injectable({
  providedIn: 'root',
})
export class LoginPageService extends LoginPageServiceModel {
  override getVM(): Signal<LoginPageVM> {
    return signal(loginPageVMDefault);
  }
}
