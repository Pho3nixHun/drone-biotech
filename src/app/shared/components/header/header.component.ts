import { Component } from '@angular/core';

/**
 * HeaderComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a header section
 * - It uses content projection to visualize the components.
 * - Manages the overall layout and styling for the section.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable header section layout.
 */
@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html'
})
export class HeaderComponent {}
