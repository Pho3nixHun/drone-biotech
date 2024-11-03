import { Component, input } from '@angular/core';
import { MessageVM } from './message-vm.model';
import { TranslocoModule } from '@jsverse/transloco';

/**
 * MessageComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a message.
 * - Manages the layout and styling of a message.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to message.
 * - Should not be responsible for manipulating or transforming data.
 */

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './message.component.html',
})
export class MessageComponent {
  public vm = input.required<MessageVM>();
}
