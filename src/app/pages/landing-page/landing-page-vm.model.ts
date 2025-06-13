import { HeroVM } from '@components/hero/hero-vm.model';
import { PartnerLogoVM } from '@components/partner-list/components/partner-logo/partner-logo-vm.model';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { TestimonialItemVM } from '@components/testimonial-item/testimonial-item-vm.model';
import { isWithId, WithId } from '@interfaces/with-id.interface';
import { WithLink } from '@interfaces/with-link.interface';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTitle } from '@interfaces/with-title.interface';

// We use `interface` here because it's semantically appropriate
// for extending object structures and ensures clear intent for others.
export interface ProductItemXVM extends WithRouterLink, ProductItemVM, WithId {}
interface PartnerLogoXVM extends Partial<WithLink>, PartnerLogoVM {}

interface HeroXVM extends HeroVM {
    titleKey: string;
    descriptionKey: string;
    primaryButtonLabelKey: string;
    secondaryButtonLabelKey: string;
}

export interface WithPartnerLogos {
    partnerLogoXVMs: PartnerLogoXVM[];
}
export interface WithTestimonials {
    testimonialItemVMs: TestimonialItemVM[];
}

export interface WithProductItemXVMs {
    productItemXVMs: ProductItemXVM[];
}

export const isWithProductItemXVMs = (
    obj: object
): obj is WithProductItemXVMs => {
    return 'productItemXVMs' in obj;
};

export interface ProductFrame extends WithTitle, WithId, WithProductItemXVMs {}

export const isProductFrame = (frame: FrameXVM): frame is ProductFrame => {
    return isWithId(frame) && isWithProductItemXVMs(frame);
};

export interface PartnerFrame extends WithTitle, WithId, WithPartnerLogos {}
export interface TestimonialFrame extends WithTitle, WithId, WithTestimonials {}
export interface PartnerAndTestimonialFrame
    extends WithTitle,
        WithId,
        WithPartnerLogos,
        WithTestimonials {}

// We use`type` here because it's more appropriate when you need to define a union or more complex type,
// as `interface` cannot represent a variable that can hold multiple distinct types.
export type FrameXVM =
    | ProductFrame
    | PartnerFrame
    | TestimonialFrame
    | PartnerAndTestimonialFrame;

export interface LandingPageVM {
    heroXVM?: HeroXVM;
    frameXVMs: FrameXVM[];
}

export enum FrameID {
    PRODUCTS = 'products',
    PARTNERS = 'partners',
}
