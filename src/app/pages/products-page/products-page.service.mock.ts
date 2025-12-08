import { Injectable, Signal, signal } from '@angular/core';
import { ProductsPageVM } from './products-page.model';
import { ProductsPageService } from './products-page.service';

const getVMSignal = signal<ProductsPageVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class ProductsPageMockService {
    public getVM = (): Signal<ProductsPageVM | undefined> => getVMSignal;
}
export const provideProductsPageMockService = () => ({
    provide: ProductsPageService,
    useClass: ProductsPageMockService,
});

export const updateGetVMSignal = (vm: ProductsPageVM | undefined) =>
    getVMSignal.set(vm);
