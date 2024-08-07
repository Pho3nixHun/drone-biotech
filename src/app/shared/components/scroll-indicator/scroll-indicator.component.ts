import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirective } from '@directives/scroll.directive';

@Component({
  selector: 'app-scroll-indicator',
  standalone: true,
  imports: [CommonModule, ScrollDirective],
  templateUrl: './scroll-indicator.component.html',
})
export class ScrollIndicatorComponent {
  sections = ['hero-section', 'product-section', 'partner-section', 'contact-section'];
}
