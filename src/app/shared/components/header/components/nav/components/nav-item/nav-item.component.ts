import { Component, input } from '@angular/core';
import { NavItemVM } from './nav-item-vm.model';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  vm = input<NavItemVM | null>(null, { alias: 'vm' });
}
