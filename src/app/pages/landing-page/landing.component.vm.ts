import { HeroComponentVM } from '@components/hero/hero.component.vm';
import { ProductsVM } from '@components/products/products-vm';

export interface LandingComponentVM {
  heroVM: HeroComponentVM;
  productsVM: ProductsVM;
}
