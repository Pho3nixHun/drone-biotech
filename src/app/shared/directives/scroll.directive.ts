import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true,
})
export class ScrollDirective {
  @Input('appScroll') sectionId!: string;

  @HostListener('click') onClick() {
    this.scrollToSection();
  }

  private scrollToSection() {
    const element = document.getElementById(this.sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
