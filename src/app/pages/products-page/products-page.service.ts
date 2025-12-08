import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { ProductsPageVM } from './products-page.model';
import { productsPageVMDefault } from './products-page.mock';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectID } from '@stores/router/router.selectors';

@Injectable({
    providedIn: 'root',
})
export class ProductsPageService {
    private readonly store = inject(Store);
    private readonly id = toSignal(this.store.select(selectID));
    private readonly vm: Signal<ProductsPageVM> = signal(productsPageVMDefault);

    private readonly computedVM = computed(() => {
        const id = this.id();
        const vm = this.vm();
        if (!id) return vm;

        const { productFrame } = vm;
        const { productCardXVMs } = productFrame;
        const productsPageVM: ProductsPageVM = {
            ...vm,
            productFrame: {
                ...productFrame,
                productCardXVMs: productCardXVMs.filter((x) => x.id === id),
            },
        };
        return productsPageVM;
    });

    public getVM = () => this.computedVM;
}
