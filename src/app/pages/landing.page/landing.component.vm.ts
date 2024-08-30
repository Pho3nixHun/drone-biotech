import { HeroComponentVM } from '@components/hero/hero.component.vm';
import { ProductListComponentVM } from '@components/product/components/product-list/product-list.component.vm';

export interface LandingComponentVM {
  heroVM: HeroComponentVM;
  productListVM: ProductListComponentVM;
}
