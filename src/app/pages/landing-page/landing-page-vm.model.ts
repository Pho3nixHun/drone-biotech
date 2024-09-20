import { FrameVM } from '@components/frame/frame-vm';
import { HeroVM } from '@components/hero/hero-vm.model';
import { PartnerLogoVM } from '@components/partner-list/components/partner-logo/partner-logo-vm.model';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { TestimonialItemVM } from '@components/testimonial-item/testimonial-item-vm.model';

export interface LandingPageVM {
  testimonialList: TestimonialItemVM[];
  heroVM: HeroVM;
  productList: { routerLink: string | string[]; productItemVM: ProductItemVM }[];
  frameVMs: FrameVM[];
  partnerList: PartnerLogoVM[];
}
