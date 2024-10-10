import { Injectable, signal } from '@angular/core';
import { ProductsPageVM } from './products-page-vm.model';

const getVMSignal = signal<ProductsPageVM | undefined>(undefined);

@Injectable({
  providedIn: 'root',
})
class ProductsPageMockService {
  public getVM = () => getVMSignal;
}

export const provideProductsPageMockService = () => ({
    provide: 'ProductsPageService',
    useClass: ProductsPageMockService,
});

export const updateGetVMSignal = getVMSignal.set.bind(getVMSignal);
