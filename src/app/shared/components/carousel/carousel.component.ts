import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/**
 * CarouselComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a carousel that contains dynamic content.
 * - It uses content projection to handle slides.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * - To provide a flexible and reusable carousel layout that projects slides.
 */

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {}
