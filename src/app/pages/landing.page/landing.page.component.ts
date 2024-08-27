import { Component, signal } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { LandingComponentVM } from './landing.component.vm';

@Component({
  selector: 'app-landing.page',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './landing.page.component.html',
})
export class LandingPageComponent {
  vm = signal<LandingComponentVM>({
    heroVM: {
      backgroundImageSrc: 'assets/farming.jpg',
      title: 'The future of irrigation is now',
      description: 'IRRIOT is a completely wireless precision irrigation automation system',
    },
  });
}
