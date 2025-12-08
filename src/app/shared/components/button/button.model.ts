import { MatIcon } from '@interfaces/mat-icon.enum';

type Variant = 'fill' | 'ghost' | 'outline';

export interface ButtonVM {
    variant: Variant;
    secondary?: boolean;
}
type ButtonKind = 'withText' | 'withIcon' | 'withTextAndIcon';

export type ButtonXVM<T extends ButtonKind = ButtonKind> = (T extends 'withText'
    ? ButtonVM & { textKey: string }
    : T extends 'withIcon'
      ? ButtonVM & { icon: MatIcon }
      : T extends 'withTextAndIcon'
        ? ButtonVM & { icon: MatIcon; textKey: string }
        : never) & { hidden?: boolean };
