import { ProductItemComponentVM } from '@components/products/product-item/product-item.component.vm';

export interface ProductsVM {
  title: string;
  link?: string;
  productItems: ProductItemComponentVM[];
}
