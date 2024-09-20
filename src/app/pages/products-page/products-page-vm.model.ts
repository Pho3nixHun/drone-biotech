import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';

export interface ProductsPageVM {
  frameVM: FrameVM;
  productList: { routerLink: string | string[]; productItemVM: ProductItemVM }[];
}
