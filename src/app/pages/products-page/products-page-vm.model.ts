import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';
import { WithId } from '@interfaces/with-id.interface';

interface ProductItemXVM extends WithId, ProductItemVM {}

interface WithProductItemXVMs {
    productItemVMs: ProductItemXVM[];
}

interface ProductListFrame extends FrameVM, WithProductItemXVMs {}

export interface ProductsPageVM {
    productListFrame: ProductListFrame;
}
