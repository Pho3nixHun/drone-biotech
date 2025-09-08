import { MatIcon } from '@interfaces/mat-icon.enum';
import { WithRouterLink } from '@interfaces/with-router-link.interface';

type Variant = 'fill' | 'ghost' | 'outline';

export interface ButtonVM {
    variant: Variant;
    secondary?: boolean;
}

export interface ButtonXVM extends ButtonVM {
    icon?: MatIcon;
    textKey?: string;
}

export type ButtonXVMWithRouterLink = ButtonXVM & WithRouterLink;
