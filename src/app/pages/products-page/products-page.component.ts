import { Component, inject } from '@angular/core';
import { FrameComponent } from '@components/frame/frame.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductsPageService } from './products-page.service';
import { PageSectionComponent } from '../../shared/components/page-section/page-section.component';

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
    imports: [
        FrameComponent,
        ProductItemComponent,
        ProductListComponent,
        PageSectionComponent,
    ],
    templateUrl: './products-page.component.html'
})
export class ProductsPageComponent {
    private readonly productsPageService = inject(ProductsPageService);
    protected readonly vm = this.productsPageService.getVM();
}
