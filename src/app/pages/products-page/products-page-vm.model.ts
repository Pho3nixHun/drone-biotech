import { ProductItemXVM } from '../landing-page/landing-page-vm.model';
import { FrameVM } from '@components/frame/frame.model';

type FrameXVM = FrameVM;

interface WithProductItemXVMs {
    productItemVMs: ProductItemXVM[] | null;
}

interface ProductListFrame extends FrameXVM, WithProductItemXVMs {}

export interface ProductsPageVM {
    productListFrame: ProductListFrame;
}
