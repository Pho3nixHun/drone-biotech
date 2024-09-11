import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true,
})
export class ScrollDirective {
  @HostListener('click', ['$event'])
  handleClick(event: Event): void {
    event.preventDefault();

    const targetId = (event.target as HTMLAnchorElement)?.getAttribute('href')?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;

    targetElement?.scrollIntoView({ behavior: 'smooth' });
  }
}
