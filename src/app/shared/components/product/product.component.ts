import { Component } from '@angular/core';

/**
 * ProductComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a section that contains dynamic content.
 * - Allows for the insertion of a `h2` header and a `app-product-list` component using Angular's content projection.
 * - Manages the overall layout and styling for the section containing these elements.
 *
 * Out-of-Scope:
 * - Does not manage or modify the content within the `h2` or `app-product-list` component.
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable section layout.

 */

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
})
export class ProductComponent {}
