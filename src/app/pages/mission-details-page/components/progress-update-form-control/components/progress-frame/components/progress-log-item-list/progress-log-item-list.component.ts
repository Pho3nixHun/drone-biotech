import { Component } from '@angular/core';

/**
 * ProgressLogItemListComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a list of progress log items.
 * - Manages the layout and styling of the progress log item list.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to progress log item details.
 * - Should not be responsible for manipulating or transforming progress log item data.
 *
 * Purpose(optional):
 * - To create a simple layout that contains `ProgressLogItem`-s.
 */
@Component({
    selector: 'app-progress-log-item-list',
    imports: [],
    templateUrl: './progress-log-item-list.component.html',
})
export class ProgressLogItemListComponent {}
