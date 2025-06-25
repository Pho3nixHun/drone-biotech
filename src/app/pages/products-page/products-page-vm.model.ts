import { WithTitle } from '@interfaces/with-title.interface';
import { ProductItemXVM } from '../landing-page/landing-page-vm.model';

type FrameXVM = WithTitle;

interface WithProductItemXVMs {
    productItemVMs: ProductItemXVM[] | null;
}

interface ProductListFrame extends WithProductItemXVMs {
    titleKey: string;
}
interface ProductListFrame extends FrameXVM, WithProductItemXVMs {}

export interface ProductsPageVM {
    productListFrame: ProductListFrame;
}
