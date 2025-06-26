import { isNotNull } from '../utils/is-null.typeguard';

export interface WithRouterLink {
    routerLink?: string | string[] | null;
    fragment?: string;
}

export const isWithRouterLink = (obj: unknown): obj is WithRouterLink =>
    typeof obj === 'object' && isNotNull(obj) && 'routerLink' in obj;
