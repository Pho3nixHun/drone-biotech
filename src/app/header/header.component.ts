import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
