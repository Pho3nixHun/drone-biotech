import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FrameComponent } from '@components/frame/frame.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductsPageService } from './products-page.service';
import { Store } from '@ngrx/store';
import { selectID } from 'src/app/stores/router/router.selectors';

/**
 * ProductsPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Conditionally renders a section with a product or with a list of products based on the URL.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-product-list`, <app-product-item> components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */
@Component({
    selector: 'app-products-page',
    standalone: true,
    imports: [FrameComponent, ProductItemComponent, ProductListComponent],
    templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
    private readonly productsPageService = inject(ProductsPageService);
    private readonly store = inject(Store);
    protected vm = this.productsPageService.getVM();
    protected id = signal<string | null>(null);
    public filteredItemVM = computed(() => {
        return this.vm().productListFrame.productItemVMs.find((item) =>
            item.id === this.id() ? this.id() : null
        );
    });
    ngOnInit(): void {
        this.store
            .select(selectID)
            .subscribe((data) => {
                this.id.set(data);
            })
            .unsubscribe();
    }
}
