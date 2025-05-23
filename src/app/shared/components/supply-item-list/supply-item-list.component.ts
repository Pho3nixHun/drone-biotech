import { Component } from '@angular/core';

/**
 * SupplyItemListComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a list of supply items.
 * - Manages the layout and styling of the supply item list.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to supply item details.
 * - Should not be responsible for manipulating or transforming supply item data.
 *
 * Purpose(optional):
 * - To create a simple layout that contains `SupplyItem`-s.
 */
@Component({
    selector: 'app-supply-item-list',
    imports: [],
    templateUrl: './supply-item-list.component.html',
})
export class SupplyItemListComponent {}
