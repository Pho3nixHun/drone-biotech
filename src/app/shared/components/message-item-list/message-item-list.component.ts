import { Component } from '@angular/core';

/**
 * MessageItemListComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a list of message items.
 * - Manages the layout and styling of the message item list.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to message item details.
 * - Should not be responsible for manipulating or transforming message item data.
 *
 * Purpose(optional):
 * - To create a simple layout that contains `MessageItem`-s.
 */
@Component({
    selector: 'app-message-item-list',
    imports: [],
    templateUrl: './message-item-list.component.html',
})
export class MessageItemListComponent {}
