import { Component } from '@angular/core';

/**
 * PartnerListComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a layout that contains dynamic content.
 * - It uses content projection to visualize the PartnerLogoComponent.
 * - Manages the overall layout and styling for the list.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * - To provide a flexible and reusable layout that contains PartnerLogoComponent-s.
 */
@Component({
  selector: 'app-partner-list',
  standalone: true,
  imports: [],
  templateUrl: './partner-list.component.html',
})
export class PartnerListComponent {}
