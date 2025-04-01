import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { ProductsPageVM } from './products-page-vm.model';
import { ProductsPageService } from './products-page.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { ProductsService } from '@services/products/products.service';
import { selectID } from 'src/app/stores/router/router.selectors';
import { ProductItemXVM } from '../landing-page/landing-page-vm.model';

const getVMSignal = signal<ProductsPageVM | undefined>(undefined);

@Injectable({
    providedIn: 'root',
})
class ProductsPageMockService {
    private readonly productsService = inject(ProductsService);
    private readonly store = inject(Store);
    private readonly idSignal = toSignal(this.store.select(selectID));
    private readonly productsSignal = computed<
        ProductItemXVM | ProductItemXVM[]
    >(() => {
        const id = this.idSignal();

        if (!id) return this.productsService.getAllProducts();

        return (
            this.productsService.getProductById(id) ??
            this.productsService.getAllProducts()
        );
    });

    private readonly computedVM = computed<ProductsPageVM | undefined>(() => {
        const products = this.productsSignal();
        const vm = getVMSignal();
        return vm
            ? {
                  productListFrame: {
                      ...vm.productListFrame,
                      productItemVMs: products,
                  },
              }
            : undefined;
    });

    public getVM = (): Signal<ProductsPageVM | undefined> => this.computedVM;
}

export const provideProductsPageMockService = () => ({
    provide: ProductsPageService,
    useClass: ProductsPageMockService,
});

export const updateGetVMSignal = (vm: ProductsPageVM | undefined) =>
    getVMSignal.set(vm);
