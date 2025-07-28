import { WithRouterLink } from './with-router-link.interface';

export interface Anchor extends WithRouterLink {
    textKey: string;
    textColor?: string;
}

export interface WithAnchor {
    anchor: Anchor;
}
