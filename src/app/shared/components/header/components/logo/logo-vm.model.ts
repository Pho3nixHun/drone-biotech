import { WithRouterLink } from '@interfaces/with-router-link.interface';

export interface LogoVM extends Partial<WithRouterLink> {
    imageSrc: string;
    altText: string;
}
