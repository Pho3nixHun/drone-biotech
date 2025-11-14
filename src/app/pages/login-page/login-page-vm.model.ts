import { ButtonXVM } from '@components/button/button.model';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { LoginFormVM } from 'src/app/pages/login-page/components/login-form/login-form-vm.model';

export interface LoginPageVM {
    loginFormXVM: LoginFormXVM;
}

export interface LoginFormXVM extends LoginFormVM {
    errorMessageKey: string | null;
    submitButtonXVM: ButtonXVM;
    requiredAssistiveTextKey: string;
    emailInputTextXVM: InputTextXVM;
    passwordInputTextXVM: InputTextXVM;
}
