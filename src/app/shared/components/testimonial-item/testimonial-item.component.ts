import { Component, input } from '@angular/core';
import { TestimonialItemVM } from './testimonial-item-vm';

/**
 * TestimonialItemComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering an individual Testimonial Item.
 * - Displays the testimonial's message, name and location.
 * - Manages the styling and the layout of the Testimonial Item.
 *
 * Out-of-Scope:
 * - Should not handle data fetching.
 * - Contains no business logic related to the testimonial.
 * - Does not manage or transform testimonial data.
 *
 * Purpose (optional):
 * - To render an individual Testimonial Item in a predefined layout.
 */

@Component({
  selector: 'app-testimonial-item',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-item.component.html',
})
export class TestimonialItemComponent {
  vm = input<TestimonialItemVM | null>(null, { alias: 'vm' });
}
