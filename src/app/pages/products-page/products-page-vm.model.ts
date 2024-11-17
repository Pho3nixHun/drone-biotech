import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTitle } from '@interfaces/with-title.interface';

interface ProductItemXVM extends WithRouterLink, ProductItemVM {}

interface WithProductItemXVMs {
    productItemVMs: ProductItemXVM[];
}

interface ProductListFrame extends WithTitle, WithProductItemXVMs {}

export interface ProductsPageVM {
    productListFrame: ProductListFrame;
}
