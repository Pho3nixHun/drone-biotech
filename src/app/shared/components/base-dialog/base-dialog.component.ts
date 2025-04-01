import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseDialogVM } from './base-dialog.model';

/**
 * BaseDialogComponent
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
    selector: 'app-base-dialog',
    standalone: true,
    imports: [MatIconModule, TranslocoModule],
    templateUrl: './base-dialog.component.html',
})
export class BaseDialogComponent {
    public vm = input.required<BaseDialogVM>();
    public readonly cancelOnClick = output<void>();
    public onClick() {
        this.cancelOnClick.emit();
    }
}
