import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { FrameVM } from './frame.model';

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
 */
@Component({
    selector: 'app-frame',
    imports: [TranslocoModule],
    templateUrl: './frame.component.html',
    imports: [],
})
export class FrameComponent {
    public vm = input<FrameVM | null>(null);
}
