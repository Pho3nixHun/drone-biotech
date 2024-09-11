import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  public targetElementId = input<string>('', { alias: 'appScrollTo' });

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();

    const targetElementId = this.targetElementId();
    if (!targetElementId) {
      throw new Error("The ID can't be null!");
    }

    const target = document.getElementById(targetElementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      throw new Error("The ID that you provided doesn't exist.");
    }
  }
}
