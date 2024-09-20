import { Component, input } from '@angular/core';
import { HeroVM } from './hero-vm.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  vm = input<HeroVM | null>(null, { alias: 'vm' });
}
