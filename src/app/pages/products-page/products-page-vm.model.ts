import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemXVM } from '../landing-page/landing-page-vm.model';

interface WithProductItemXVMs {
    productItemVMs: ProductItemXVM | ProductItemXVM[] | undefined;
}

interface ProductListFrame extends FrameVM, WithProductItemXVMs {}

export interface ProductsPageVM {
    productListFrame: ProductListFrame;
}
