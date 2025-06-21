import { ProductItemXVM } from '../landing-page/landing-page-vm.model';

interface WithProductItemXVMs {
    productItemVMs: ProductItemXVM[] | null;
}

interface ProductListFrame extends WithProductItemXVMs {
    titleKey: string;
}

export interface ProductsPageVM {
    productListFrame: ProductListFrame;
}
