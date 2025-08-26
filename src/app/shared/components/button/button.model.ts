import { WithMatIcon } from '@interfaces/mat-icon.enum';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';

export type State = 'active' | 'disabled' | 'default';
type Variant = 'fill' | 'ghost' | 'outline';

export interface BaseButtonVM {
    variant: Variant;
    state?: State;
    secondary?: boolean;
}

interface ButtonVMWithTextNode extends BaseButtonVM, WithTextNode {
    type: 'withText';
}
interface ButtonVMWithMatIcon extends BaseButtonVM, WithMatIcon {
    type: 'withIcon';
}

export type ButtonVM = ButtonVMWithTextNode | ButtonVMWithMatIcon;

export type ButtonVMWithRouterLink = ButtonVM & WithRouterLink;
