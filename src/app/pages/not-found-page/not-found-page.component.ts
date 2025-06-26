import { Component } from '@angular/core';
import { NotFoundMessageComponent } from './components/not-found-message/not-found-message.component';
import { notFoundPageVMDefault } from './not-found-page.mock';
import { PageLayoutComponent } from '@components/page-layout/page-layout.component';

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
    imports: [NotFoundMessageComponent, PageLayoutComponent],
    templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
    protected readonly vm = notFoundPageVMDefault;
}
