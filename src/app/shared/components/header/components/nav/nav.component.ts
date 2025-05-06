import { Component } from '@angular/core';

/**
 * NavComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a navbar
 * - It uses content projection to visualize the components.
 * - Manages the overall layout and styling for the nav.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable navbar.
 */
@Component({
    selector: 'app-nav',
    imports: [],
    templateUrl: './nav.component.html'
})
export class NavComponent {}
