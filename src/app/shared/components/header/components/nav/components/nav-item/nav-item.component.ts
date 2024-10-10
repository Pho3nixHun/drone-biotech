import { Component, input } from '@angular/core';
import { NavItemVM } from './nav-item-vm';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  vm = input.required<NavItemVM>();
}
