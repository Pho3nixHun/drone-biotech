import { Component, HostBinding, input } from '@angular/core';
import { ProductItemVM } from './product-item-vm.model';
import { TranslocoModule } from '@jsverse/transloco';

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
  imports: [TranslocoModule],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @HostBinding('class') hostClass = 'h-full';

  vm = input<ProductItemVM | null>(null, { alias: 'vm' });
}
