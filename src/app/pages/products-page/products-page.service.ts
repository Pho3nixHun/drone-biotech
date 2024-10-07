import { Injectable, signal, Signal } from '@angular/core';
import { ProductsPageVM } from './products-page-vm.model';
import { productsPageVM } from './products-page.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsPageService {
  public getVM(): Signal<ProductsPageVM | null> {
    return signal(productsPageVM);
  }
}
