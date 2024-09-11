import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  href = input<string | null>(null, { alias: 'href' });
}
