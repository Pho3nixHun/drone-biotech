import { WithBackgroundImageSrc } from '@interfaces/with-background-image-src.interface';

export interface LoginFormVM extends WithBackgroundImageSrc {
    descriptionKey: string;
    titleKey: string;
}

export interface LoginFormXVM extends LoginFormVM {
    buttonTitleKey: string;
    emailLabelKey: string;
    passwordLabelKey: string;
    passwordPlaceholderKey: string;
}
