import { Component, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly scroll = inject(ScrollService);

  scrollToSection(sectionId: string) {
    this.scroll.scrollToSection(sectionId);
  }
}
