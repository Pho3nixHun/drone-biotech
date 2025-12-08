import { ButtonXVM } from '@components/button/button.model';
import { HeroVM } from '@components/hero/hero-vm.model';
import { PartnerLogoVM } from '@components/partner-list/components/partner-logo/partner-logo-vm.model';
import { TestimonialItemVM } from '@components/testimonial-item/testimonial-item-vm.model';
import { WithId } from '@interfaces/with-id.interface';
import { WithImage } from '@interfaces/with-image.interface';
import { WithLink } from '@interfaces/with-link.interface';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTitle } from '@interfaces/with-title.interface';
import { isObject } from '@utils/is-object.typeguard';

export interface ProductCardXVM
    extends WithRouterLink,
        WithId,
        WithTitle,
        WithImage {
    descriptionKey: string;
}

interface PartnerLogoXVM extends Partial<WithLink>, PartnerLogoVM {}

interface HeroXVM extends HeroVM {
    titleKey: string;
    descriptionKey: string;
    primaryButtonXVM: ButtonXVM<'withText'>;
    secondaryButtonXVM: ButtonXVM<'withText'>;
}

export interface WithPartnerLogos {
    partnerLogoXVMs: PartnerLogoXVM[];
}
export interface WithTestimonials {
    testimonialItemVMs: TestimonialItemVM[];
}
type FrameVM = WithTitle;

export interface ProductFrame extends FrameVM, WithId {
    type: 'productFrame';
    productCardXVMs: ProductCardXVM[];
}

export interface PartnerAndTestimonialFrame
    extends WithTitle,
        WithId,
        WithPartnerLogos,
        WithTestimonials {
    type: 'partnerAndTestimonialFrame';
}

export type FrameXVM = ProductFrame | PartnerAndTestimonialFrame;

export interface LandingPageVM {
    heroXVM?: HeroXVM;
    frameXVMs: FrameXVM[];
}

export enum FrameID {
    PRODUCTS = 'products',
    PARTNERS = 'partners',
}

export const isProductFrame = (obj: unknown): obj is ProductFrame =>
    isObject(obj) && 'type' in obj && obj.type === 'productFrame';

export const isPartnerAndTestimonialFrame = (
    obj: unknown
): obj is PartnerAndTestimonialFrame =>
    isObject(obj) && 'type' in obj && obj.type === 'partnerAndTestimonialFrame';
