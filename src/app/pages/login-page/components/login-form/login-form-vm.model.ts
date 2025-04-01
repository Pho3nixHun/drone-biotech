export interface LoginFormVM {
    backgroundImageSrc: string;
    descriptionKey: string;
    titleKey: string;
}

export interface LoginFormXVM extends LoginFormVM {
    buttonTitleKey: string;
    emailLabelKey: string;
    passwordLabelKey: string;
    passwordPlaceholderKey: string;
}
