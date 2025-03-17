import { Component, inject, Signal } from '@angular/core';
import { NotFoundPageVM } from './not-found-page-vm.model';
import { NotFoundPageService } from './not-found-page.service';
import { MessageComponent } from '@components/message/message.component';

/**
 * NotFoundPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Responsible for rendering a not found message.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-message`.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */

@Component({
    selector: 'app-not-found-page',
    standalone: true,
    imports: [MessageComponent],
    templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
    private readonly notFoundPageService = inject(NotFoundPageService);
    protected vm: Signal<NotFoundPageVM> = this.notFoundPageService.getVM();
}
