import { Component, input } from '@angular/core';
import { HeroComponentVM } from './hero.component.vm';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  vm = input<HeroComponentVM | null>(null, { alias: 'vm' });
}
