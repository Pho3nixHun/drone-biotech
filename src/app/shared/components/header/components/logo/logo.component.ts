import { Component, input } from '@angular/core';
import { LogoVM } from '@components/header/components/logo/logo-vm.model';

/**
 * LogoComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for visualizing a logo item.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the logo.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable logo item.
 */
@Component({
    selector: 'app-logo',
    imports: [],
    templateUrl: './logo.component.html'
})
export class LogoComponent {
    public vm = input.required<LogoVM>();
}
