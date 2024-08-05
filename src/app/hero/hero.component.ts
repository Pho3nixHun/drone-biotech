import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly scroll = inject(ScrollService);

  scrollToSection(sectionId: string) {
    this.scroll.scrollToSection(sectionId);
  }
}
