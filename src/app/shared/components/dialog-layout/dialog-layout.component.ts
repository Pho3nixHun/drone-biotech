import { Component } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';
import { WithTitle } from '@interfaces/with-title.interface';

/**
 * DialogLayoutComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring the section of a dialog that contains dynamic content via content projection.
 * - Manages the overall layout and styling for the section.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable dialog layout.
 */
@Component({
    selector: 'app-dialog-layout',
    imports: [],
    templateUrl: './dialog-layout.component.html',
})
export class DialogLayoutComponent {}

export interface DialogLayoutXVM extends WithTitle {
    confirmButtonXVM: ButtonXVM;
    closeButtonXVM: ButtonXVM;
    cancelButtonXVM: ButtonXVM;
}
