export interface LoginFormVM {
  backgroundImageSrc: string;
}

export interface ExtendedLoginFormVM {
  loginFormVM: LoginFormVM;
  titleKey: string;
  descriptionKey: string;
  buttonTitleKey: string;
}
