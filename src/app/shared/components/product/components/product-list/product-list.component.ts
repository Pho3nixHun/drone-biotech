import { Component, input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { RouterLink } from '@angular/router';
import { ProductListComponentVM } from './product-list.component.vm';

/**
 * ProductListComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a list of products.
 * - Delegates the rendering of individual products to `ProductItem` components.
 * - Manages the layout and styling of the product list.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to product details.
 * - Should not be responsible for manipulating or transforming product data.
 * - No logic related to the individual `ProductItem` components' behavior.
 *
 * Purpose(optional):
 * To provide a clear and simple presentation of a list of products, utilizing `ProductItem` components
 * for each product's rendering.
 */

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, RouterLink],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  vm = input<ProductListComponentVM | null>(null, { alias: 'vm' });
}
