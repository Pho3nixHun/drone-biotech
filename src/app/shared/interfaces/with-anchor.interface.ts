import { WithRouterLink } from './with-router-link.interface';

export interface Anchor extends WithRouterLink {
    textKey: string;
}
export interface WithAnchor {
    anchor: Anchor;
}
