import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { NotFoundMessageVM } from './not-found-message.model';
import { RouterModule } from '@angular/router';

/**
 * NotFoundMessageComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a not found message component that contains dynamic content.
 * - Manages the overall layout and styling for the message component.
 *
 * Out-of-Scope:
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable not found message component layout.
 */
@Component({
    selector: 'app-not-found-message',
    imports: [TranslocoModule, RouterModule],
    templateUrl: './not-found-message.component.html'
})
export class NotFoundMessageComponent {
    public vm = input.required<NotFoundMessageVM>();
}
