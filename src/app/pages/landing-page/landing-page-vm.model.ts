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
export type ExtendedHeroVMWithTitles = HeroVM & {
  titles: string[];
  buttonTitles: string[];
};

export type ExtendedFrameVM = FrameVM &
  ({ partnersVM: PartnersVM } | { productItemVMs: ExtendedProductItemVM[] });

export type ExtendedFrameVMWithPartnersVM = FrameVM & { partnersVM: PartnersVM };
export type ExtendedFrameVMWithExtendedProductItemVMs = FrameVM & {
  productItemVMs: ExtendedProductItemVM[];
};

export interface LandingPageVM {
  extendedHeroVMWithTitles: ExtendedHeroVMWithTitles;
  extendedFrameVMs: ExtendedFrameVM[];
}
