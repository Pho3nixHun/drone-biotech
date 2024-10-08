import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemComponentVM } from '@components/product-item/product-item.component.vm';

export interface ProductsPageVM {
  frameVM: FrameVM;
  productList: { routerLink: string | string[]; productItemVM: ProductItemComponentVM }[];
}
