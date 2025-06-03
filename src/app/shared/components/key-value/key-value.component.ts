import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

/**
 * KeyValueComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering an individual KeyValue pair.
 * - Displays the label and a paragraph via content projection.
 * - Manages the styling and the layout of a KeyValue pair.
 *
 * Out-of-Scope:
 * - Should not handle data fetching.
 * - Contains no business logic related to the testimonial.
 * - Does not manage or transform testimonial data.
 *
 * Purpose (optional):
 * - To render an individual Key-Value par in a predefined layout.
 */

@Component({
    selector: 'app-key-value',
    imports: [TranslocoModule],
    templateUrl: './key-value.component.html'
})
export class KeyValueComponent {
    public label = input.required<string>();
}
