import { LoginPageVM } from './login-page-vm.model';

export const enMock = {
    title: 'tit',
    description: 'desc',
    errorMessage: 'error',
    button: 'butt',
    requiredAssistiveText: 'required',
    email: {
        label: 'elab',
        placeholder: 'eplace',
    },
    password: {
        label: 'plab',
        placeholder: 'pplace',
    },
};

export const mockLoginPageVM: LoginPageVM = {
    loginFormXVM: {
        requiredAssistiveTextKey: enMock.requiredAssistiveText,
        submitButtonXVM: {
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: enMock.title,
        emailInputTextXVM: {
            labelKey: enMock.email.label,
            placeholderKey: enMock.email.placeholder,
            id: 'email',
            autocomplete: 'email',
            readonly: false,
            type: 'email',
        },
        passwordInputTextXVM: {
            autocomplete: 'current-password',
            id: 'password',
            readonly: false,
            type: 'password',
            labelKey: enMock.password.label,
            placeholderKey: enMock.password.placeholder,
        },
        descriptionKey: enMock.description,
    },
};
export const mockLoginPageVMWithButtonText: LoginPageVM = {
    loginFormXVM: {
        requiredAssistiveTextKey: enMock.requiredAssistiveText,
        submitButtonXVM: {
            textKey: enMock.button,
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: enMock.title,
        emailInputTextXVM: {
            labelKey: enMock.email.label,
            placeholderKey: enMock.email.placeholder,
            id: 'email',
            autocomplete: 'email',
            readonly: false,
            type: 'email',
        },
        passwordInputTextXVM: {
            autocomplete: 'current-password',
            id: 'password',
            readonly: false,
            type: 'password',
            labelKey: enMock.password.label,
            placeholderKey: enMock.password.placeholder,
        },
        descriptionKey: enMock.description,
    },
};
export const mockLoginPageVMWithoutButtonText: LoginPageVM = {
    loginFormXVM: {
        requiredAssistiveTextKey: enMock.requiredAssistiveText,
        submitButtonXVM: {
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: enMock.title,
        emailInputTextXVM: {
            labelKey: enMock.email.label,
            placeholderKey: enMock.email.placeholder,
            id: 'email',
            autocomplete: 'email',
            readonly: false,
            type: 'email',
        },
        passwordInputTextXVM: {
            autocomplete: 'current-password',
            id: 'password',
            readonly: false,
            type: 'password',
            labelKey: enMock.password.label,
            placeholderKey: enMock.password.placeholder,
        },
        descriptionKey: enMock.description,
    },
};
export const mockLoginPageVMWithoutErrorMessage: LoginPageVM = {
    loginFormXVM: {
        requiredAssistiveTextKey: enMock.requiredAssistiveText,
        submitButtonXVM: {
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: enMock.title,
        emailInputTextXVM: {
            labelKey: enMock.email.label,
            placeholderKey: enMock.email.placeholder,
            id: 'email',
            autocomplete: 'email',
            readonly: false,
            type: 'email',
        },
        passwordInputTextXVM: {
            autocomplete: 'current-password',
            id: 'password',
            readonly: false,
            type: 'password',
            labelKey: enMock.password.label,
            placeholderKey: enMock.password.placeholder,
        },
        descriptionKey: enMock.description,
    },
};
export const mockLoginPageVMWithErrorMessage: LoginPageVM = {
    loginFormXVM: {
        requiredAssistiveTextKey: enMock.requiredAssistiveText,
        submitButtonXVM: {
            variant: 'fill',
        },
        errorMessageKey: enMock.errorMessage,
        backgroundImageSrc: 'assets/farming.jpg',
        titleKey: enMock.title,
        emailInputTextXVM: {
            labelKey: enMock.email.label,
            placeholderKey: enMock.email.placeholder,
            id: 'email',
            autocomplete: 'email',
            readonly: false,
            type: 'email',
        },
        passwordInputTextXVM: {
            autocomplete: 'current-password',
            id: 'password',
            readonly: false,
            type: 'password',
            labelKey: enMock.password.label,
            placeholderKey: enMock.password.placeholder,
        },
        descriptionKey: enMock.description,
    },
};

export const loginPageVM: LoginPageVM = {
    loginFormXVM: {
        requiredAssistiveTextKey: 'Required',
        submitButtonXVM: {
            textKey: 'LoginPage.loginForm.buttonTitle',
            variant: 'fill',
        },
        errorMessageKey: null,
        backgroundImageSrc: 'assets/farming.jpg',
        emailInputTextXVM: {
            labelKey: 'LoginPage.loginForm.emailLabel',
            placeholderKey: 'LoginPage.loginForm.emailPlaceholder',
            id: 'email',
            autocomplete: 'email',
            readonly: false,
            type: 'email',
        },
        passwordInputTextXVM: {
            autocomplete: 'current-password',
            id: 'password',
            readonly: false,
            type: 'password',
            labelKey: 'LoginPage.loginForm.passwordLabel',
            placeholderKey: 'LoginPage.loginForm.passwordPlaceholder',
        },
        titleKey: 'LoginPage.loginForm.title',
        descriptionKey: 'LoginPage.loginForm.description',
    },
};
