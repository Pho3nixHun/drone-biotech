import { Component } from '@angular/core';

/**
 * FrameComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a section that contains dynamic content.
 * - It uses content projection to visualize the components.
 * - Manages the overall layout and styling for the section.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable section layout.
 * */
@Component({
    selector: 'app-progress-frame',
    imports: [],
    templateUrl: './progress-frame.component.html',
})
export class ProgressFrameComponent {}
