import { MatIcon } from '@interfaces/mat-icon.enum';

type Variant = 'fill' | 'ghost' | 'outline';

export interface ButtonVM {
    variant: Variant;
    secondary?: boolean;
}

export interface ButtonXVM extends ButtonVM {
    icon?: MatIcon;
    textKey?: string;
}
