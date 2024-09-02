import { FrameVM } from '@components/frame/frame-vm';
import { ProductItemComponentVM } from '@components/product-item/product-item.component.vm';

export interface ProductsPageVM {
  frameVM: FrameVM;
  productItems: ProductItemComponentVM[];
}
