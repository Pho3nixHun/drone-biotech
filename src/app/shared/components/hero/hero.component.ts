import { Component, input } from '@angular/core';
import { HeroVM } from './hero-vm.model';

/**
 * HeroComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for rendering a hero section.
 * - Manages the layout and styling of hero section.
 *
 * Out-of-Scope:
 * - Should not handle the data fetching or business logic related to hero.
 * - Should not be responsible for manipulating or transforming data.
 */

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  vm = input<HeroVM | null>(null, { alias: 'vm' });
}
