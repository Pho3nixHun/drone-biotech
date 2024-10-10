import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';

interface ExtendedProductItemVM {
  routerLink: string | string[];
  productItemVM: ProductItemVM;
}
type ExtendedFrameVMWithExtendedProductItemVMs = FrameVM & {
  productItemVMs: ExtendedProductItemVM[];
};

export interface ProductsPageVM {
  extendedFrameVMWithExtendedProductItemVMs: ExtendedFrameVMWithExtendedProductItemVMs;
}
