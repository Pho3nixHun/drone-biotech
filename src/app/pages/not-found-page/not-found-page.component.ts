import { Component, inject } from '@angular/core';
import { NotFoundPageService } from './not-found-page.service';
import { PageSectionComponent } from '@components/page-section/page-section.component';
import { NotFoundMessageComponent } from './components/not-found-message/not-found-message.component';

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
 * - Does not handle the internal logic or styling of the `app-not-found-message`.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */

@Component({
    selector: 'app-not-found-page',
    standalone: true,
    imports: [PageSectionComponent, NotFoundMessageComponent],
    templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
    protected readonly vm = inject(NotFoundPageService).getVM();
}
