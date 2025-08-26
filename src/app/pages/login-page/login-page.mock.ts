import { LoginPageVM } from './login-page-vm.model';

export const enLoginPageMock = {
    title: 'tit',
    description: 'desc',
    button: 'butt',
};

export const loginPageVMMock: LoginPageVM = {
    loginFormXVM: {
        submitButtonVM: {
            type: 'withText',
            textKey: 'button',
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'title',
        emailLabelKey: 'email',
        passwordLabelKey: 'password',
        descriptionKey: 'description',
        passwordPlaceholderKey: 'password',
    },
};
export const loginPageVMDefault: LoginPageVM = {
    loginFormXVM: {
        submitButtonVM: {
            type: 'withText',
            textKey: 'LoginPage.loginForm.buttonTitle',
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        emailLabelKey: 'LoginPage.loginForm.emailLabel',
        passwordLabelKey: 'LoginPage.loginForm.passwordLabel',
        titleKey: 'LoginPage.loginForm.title',
        descriptionKey: 'LoginPage.loginForm.description',
        passwordPlaceholderKey: 'LoginPage.loginForm.passwordPlaceholder',
    },
};
