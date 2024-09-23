import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {}
