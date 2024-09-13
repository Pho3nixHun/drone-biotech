import { FrameVM } from '@components/frame/frame-vm';
import { HeroComponentVM } from '@components/hero/hero.component.vm';
import { PartnerLogoVM } from '@components/partner-list/components/partner-logo/partner-logo-vm';
import { ProductItemComponentVM } from '@components/product-item/product-item.component.vm';
import { TestimonialItemVM } from '@components/testimonial-item/testimonial-item-vm';

export interface LandingComponentVM {
  testimonialList: TestimonialItemVM[];
  heroVM: HeroComponentVM;
  productList: { routerLink: string | string[]; productItemVM: ProductItemComponentVM }[];
  frameVMs: FrameVM[];
  partnerList: PartnerLogoVM[];
}
