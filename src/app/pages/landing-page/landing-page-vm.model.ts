import { FrameVM } from '@components/frame/frame-vm';
import { HeroVM } from '@components/hero/hero-vm.model';
import { PartnerLogoVM } from '@components/partner-list/components/partner-logo/partner-logo-vm.model';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { TestimonialItemVM } from '@components/testimonial-item/testimonial-item-vm.model';

interface ExtendedProductItemVM {
  routerLink?: string | string[];
  productItemVM: ProductItemVM;
}

interface PartnersVM {
  partnerLogoVMs: PartnerLogoVM[];
  testimonialItemVMs: TestimonialItemVM[];
}

type ExtendedFrameVMWithPartnersVM = FrameVM & { id: string; partnersVM: PartnersVM };
export type ExtendedFrameVMWithExtendedProductItemVMs = FrameVM & {
  id: string;
  productItemVMs: ExtendedProductItemVM[];
};

export type ExtendedFrameVM =
  | ExtendedFrameVMWithPartnersVM
  | ExtendedFrameVMWithExtendedProductItemVMs;

type ExtendedHeroVMWithTitles = HeroVM & {
  titleKey: string;
  descriptionKey: string;
  primaryButtonLabelKey: string;
  secondaryButtonLabelKey: string;
};

export interface LandingPageVM {
  extendedHeroVMWithTitles: ExtendedHeroVMWithTitles;
  extendedFrameVMs: ExtendedFrameVM[];
}
