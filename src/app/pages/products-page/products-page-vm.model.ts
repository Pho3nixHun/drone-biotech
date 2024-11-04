import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { WithRouterLink } from '@interfaces/with-router-link.interface';

interface ProductItemXVM extends WithRouterLink, ProductItemVM {}

interface WithProductItemXVMs {
  productItemVMs: ProductItemXVM[];
}

interface ProductListFrame extends FrameVM, WithProductItemXVMs {}

export interface ProductsPageVM {
  productListFrame: ProductListFrame;
}
