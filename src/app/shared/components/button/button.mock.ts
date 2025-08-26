import { MatIcon } from '@interfaces/mat-icon.enum';
import { ButtonVM } from './button.model';

export const enMock = {
    text: 'txt',
};

export const mockPrimaryButton: ButtonVM = {
    type: 'withText',
    textKey: enMock.text,
    variant: 'fill',
};

export const mockSecondaryButton: ButtonVM = {
    type: 'withText',
    textKey: enMock.text,
    variant: 'outline',
    secondary: true,
};

export const mockFillButton: ButtonVM = {
    type: 'withText',
    textKey: enMock.text,
    variant: 'ghost',
};
export const mockGhostButton: ButtonVM = {
    type: 'withText',
    textKey: enMock.text,
    variant: 'ghost',
};
export const mockOutlineButton: ButtonVM = {
    type: 'withText',
    textKey: enMock.text,
    variant: 'outline',
};

export const mockTextButton: ButtonVM = {
    type: 'withText',
    textKey: enMock.text,
    variant: 'outline',
};
export const mockIconButton: ButtonVM = {
    type: 'withIcon',
    icon: MatIcon.ADD,
    variant: 'outline',
};
