import { Component } from '@angular/core';

/**
 * ProductListComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a list of products.
 * - Manages the layout and styling of the product list.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to product details.
 * - Should not be responsible for manipulating or transforming product data.
 *
 * Purpose(optional):
 * - To create a simple layout that contains `ProductItem`-s.
 */

@Component({
    selector: 'app-product-list',
    imports: [],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {}
