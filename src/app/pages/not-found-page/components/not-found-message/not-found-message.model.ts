import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';

interface NavItemVM extends WithRouterLink, WithTextNode {}

export interface NotFoundMessageVM {
    titleKey: string;
    descriptionKey: string;
    navItem: NavItemVM;
}
