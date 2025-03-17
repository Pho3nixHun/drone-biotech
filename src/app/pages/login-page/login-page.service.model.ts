import { Signal } from '@angular/core';
import { LoginPageVM } from './login-page-vm.model';

export abstract class LoginPageServiceModel {
    abstract getVM(): Signal<LoginPageVM | undefined>;
}
