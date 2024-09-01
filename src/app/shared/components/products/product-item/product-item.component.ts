import { Component, input } from '@angular/core';
import { ProductItemComponentVM } from './product-item.component.vm';

/**
 * ProductItemComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering an individual Product Item.
 * - Displays the product's image, name, price, and other relevant details.
 * - Manages the styling and layout necessary for the product's presentation.
 *
 * Out-of-Scope:
 * - Should not handle data fetching.
 * - Contains no business logic related to the product.
 * - Does not manage or transform product data.
 *
 * Purpose (optional):
 * To visually present an individual product.
 */

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  vm = input<ProductItemComponentVM | null>(null, { alias: 'vm' });
}
