import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { DialogLayoutVM } from './dialog-layout.model';
import { ButtonComponent } from '@components/button/button.component';

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
    imports: [MatIconModule, TranslocoModule, ButtonComponent],
    templateUrl: './dialog-layout.component.html',
})
export class DialogLayoutComponent {
    public vm = input.required<DialogLayoutVM>();
    public readonly close = output<void>();
    public onClick() {
        this.close.emit();
    }
}
