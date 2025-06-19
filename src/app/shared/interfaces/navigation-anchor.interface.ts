import { WithRouterLink } from './with-router-link.interface';

export interface NavigationAnchor extends WithRouterLink {
    textKey: string;
    textColor: string;
}

export interface WithNavigationAnchor {
    navigationAnchor: NavigationAnchor;
}
