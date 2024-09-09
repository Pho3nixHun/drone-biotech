import { FrameVM } from '@components/frame/frame-vm';
import { HeroComponentVM } from '@components/hero/hero.component.vm';
import { ProductItemComponentVM } from '@components/product-item/product-item.component.vm';

export interface LandingComponentVM {
  heroVM: HeroComponentVM;
  productList: { routerLink: string | string[]; productItemVM: ProductItemComponentVM }[];
  frameVMs: FrameVM[];
}
