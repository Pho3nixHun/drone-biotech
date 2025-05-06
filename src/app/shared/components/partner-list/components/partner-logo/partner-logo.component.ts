import { Component, input } from '@angular/core';
import { PartnerLogoVM } from './partner-logo-vm.model';
import { TranslocoModule } from '@jsverse/transloco';

/**
 * PartnerLogoComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for displaying the input data.
 * - Responsible for providing a layout related to the PartnerLogo.
 *
 * Out-of-Scope:
 * - It doesn't contain business logic.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * - It provides a flexible and reusable layout that visualize the logos of the partners.
 */

@Component({
    selector: 'app-partner-logo',
    imports: [TranslocoModule],
    templateUrl: './partner-logo.component.html'
})
export class PartnerLogoComponent {
    public vm = input.required<PartnerLogoVM>();
}
