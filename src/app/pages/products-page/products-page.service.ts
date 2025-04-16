import { computed, inject, Injectable, Signal } from '@angular/core';
import { ProductsPageVM } from './products-page-vm.model';
import { productsPageVMDefault } from './products-page.mock';
import { ProductsService } from '@services/products/products.service';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectID } from 'src/app/stores/router/router.selectors';
import { ProductItemXVM } from '../landing-page/landing-page-vm.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsPageService {
    private readonly productsService = inject(ProductsService);
    private readonly store = inject(Store);
    private readonly idSignal = toSignal(this.store.select(selectID));
    private readonly productsSignal = computed<ProductItemXVM[] | null>(() => {
        const id = this.idSignal();
        if (!id) return this.productsService.getAllProducts();

        const productItem = this.productsService.getProductById(id);
        return productItem ? Array.of(productItem) : null;
    });

    private readonly computedVM = computed<ProductsPageVM>(() => {
        const products = this.productsSignal();

        return {
            productListFrame: {
                ...productsPageVMDefault.productListFrame,
                productItemVMs: products,
            },
        };
    });

    public getVM = (): Signal<ProductsPageVM> => this.computedVM;
}
