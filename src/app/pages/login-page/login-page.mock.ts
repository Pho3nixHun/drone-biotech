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
        descriptionKey: 'description',
        buttonTitleKey: 'button',
    },
};
export const loginPageVMDefault: LoginPageVM = {
    loginFormXVM: {
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: 'LoginPage.loginForm.title',
        descriptionKey: 'LoginPage.loginForm.description',
        buttonTitleKey: 'LoginPage.loginForm.buttonTitle',
    },
};
