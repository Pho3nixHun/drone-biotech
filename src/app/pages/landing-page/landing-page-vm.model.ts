import { HeroVM } from '@components/hero/hero-vm.model';
import { PartnerLogoVM } from '@components/partner-list/components/partner-logo/partner-logo-vm.model';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { TestimonialItemVM } from '@components/testimonial-item/testimonial-item-vm.model';
import { WithBackgroundImageSrc } from '@interfaces/with-background-image-src.interface';
import { WithId } from '@interfaces/with-id.interace';
import { WithLink } from '@interfaces/with-link.interface';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTitle } from '@interfaces/with-title.interface';

// We use `interface` here because it's semantically appropriate
// for extending object structures and ensures clear intent for others.
interface ProductItemXVM extends WithRouterLink, ProductItemVM {}
interface PartnerLogoXVM extends Partial<WithLink>, PartnerLogoVM {}
interface ContactFormXVM {
    nameKey: string;
    messageKey: string;
    subjectKey: string;
    buttonTitleKey: string;
}

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
export interface WithContactForm {
    contactFormXVM: ContactFormXVM;
}

export const isWithProductItemXVMs = (
    obj: object
): obj is WithProductItemXVMs => {
    return 'productItemXVMs' in obj;
};

export interface ProductFrame extends WithTitle, WithId, WithProductItemXVMs {
    type: 'productFrame';
}
export interface PartnerFrame extends WithTitle, WithId, WithPartnerLogos {
    type: 'partnerFrame';
}
export interface TestimonialFrame extends WithTitle, WithId, WithTestimonials {
    type: 'testimonialFrame';
}
export interface PartnerAndTestimonialFrame
    extends WithTitle,
        WithId,
        WithPartnerLogos,
        WithTestimonials {
    type: 'partnerAndTestimonialFrame';
}
export interface ContactFrame
    extends WithTitle,
        WithId,
        WithContactForm,
        WithBackgroundImageSrc {
    type: 'contactFrame';
}

// We use`type` here because it's more appropriate when you need to define a union or more complex type,
// as `interface` cannot represent a variable that can hold multiple distinct types.
export type FrameXVM =
    | ProductFrame
    | PartnerFrame
    | TestimonialFrame
    | PartnerAndTestimonialFrame
    | ContactFrame;

export interface LandingPageVM {
    heroXVM?: HeroXVM;
    frameXVMs: FrameXVM[];
}

export enum FrameID {
    PRODUCT = 'products',
    PARTNERS = 'partners',
    CONTACT = 'contact',
}
