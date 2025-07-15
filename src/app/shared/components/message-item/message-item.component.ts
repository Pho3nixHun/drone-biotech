import { Component } from '@angular/core';

/**
 * MessageItemComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering an individual message item.
 *
 * Out-of-Scope:
 * - Should not handle data fetching.
 * - Contains no business logic related to the item.
 * - Does not manage or transform the item's data.
 *
 * Purpose (optional):
 * To visually present an individual message item.
 */
@Component({
    selector: 'app-message-item',
    imports: [],
    templateUrl: './message-item.component.html',
})
export class MessageItemComponent {}
