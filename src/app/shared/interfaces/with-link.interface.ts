import { isNotNull } from '../utils/is-null.typeguard';

export enum Rel {
    NoOpener = 'noopener',
    NoReferrer = 'noreferrer',
}

export interface WithLink {
    link: {
        href: HTMLAnchorElement['href'];
        target?: '_blank' | '_self' | '_parent' | '_top';
        rel?: Rel[];
    };
}

export const isWithLink = (obj: unknown): obj is WithLink =>
    typeof obj === 'object' && isNotNull(obj) && 'link' in obj;
