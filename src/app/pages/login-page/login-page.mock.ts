import { LoginPageVM } from './login-page-vm.model';

export const enLoginPageMock = {
    title: 'tit',
    description: 'desc',
    button: 'butt',
};

export const loginPageVMMock: LoginPageVM = {
    loginFormXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'title',
        emailLabelKey: 'email',
        passwordLabelKey: 'password',
        descriptionKey: 'description',
        buttonTitleKey: 'button',
        passwordPlaceholderKey: 'password',
    },
};
export const loginPageVMDefault: LoginPageVM = {
    loginFormXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        emailLabelKey: 'LoginPage.loginForm.emailLabel',
        passwordLabelKey: 'LoginPage.loginForm.passwordLabel',
        titleKey: 'LoginPage.loginForm.title',
        descriptionKey: 'LoginPage.loginForm.description',
        buttonTitleKey: 'LoginPage.loginForm.buttonTitle',
        passwordPlaceholderKey: 'LoginPage.loginForm.passwordPlaceholder',
    },
};
