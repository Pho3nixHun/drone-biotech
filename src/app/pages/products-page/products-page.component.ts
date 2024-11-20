import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FrameComponent } from '@components/frame/frame.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductsPageService } from './products-page.service';

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
    imports: [
        FrameComponent,
        ProductItemComponent,
        ProductListComponent,
        RouterLink,
    ],
    templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
    private readonly productsPageService = inject(ProductsPageService);
    private readonly activatedRoute = inject(ActivatedRoute);
    public vm = this.productsPageService.getVM();
    public filteredVM = computed(() => {
        return this.vm().productListFrame.productItemVMs.find(
            (item) =>
                item.routerLink === this.activatedRoute.snapshot.params['id']
        );
    });
}
