import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-indicator.component.html',
})
export class ScrollIndicatorComponent implements OnInit {
  sections = ['hero-section', 'product-section', 'partner-section', 'contact-section'];
  currentSectionIndex = 0;

  ngOnInit() {
    this.updateCurrentSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateCurrentSection();
  }

  scrollToSection(index: number) {
    const element = document.getElementById(this.sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.currentSectionIndex = index;
    }
  }

  private updateCurrentSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    this.currentSectionIndex = this.sections.findIndex((section, index) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        return scrollPosition >= top && scrollPosition < bottom;
      }
      return false;
    });
  }
}