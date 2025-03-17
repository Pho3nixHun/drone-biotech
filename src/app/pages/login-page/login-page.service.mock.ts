import { Injectable, signal } from '@angular/core';
import { LoginPageService } from './login-page.service';
import { LoginPageVM } from './login-page-vm.model';
import { LoginPageServiceModel } from './login-page.service.model';

const getVMSignal = signal<LoginPageVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class LoginPageMockService extends LoginPageServiceModel {
    public getVM = () => getVMSignal;
}

export const provideLoginPageMockService = () => ({
    provide: LoginPageService,
    useClass: LoginPageMockService,
});

export const updateGetVMSignal = getVMSignal.set.bind(getVMSignal);
