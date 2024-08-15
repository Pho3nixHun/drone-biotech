import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  navItems = input<NavItem[]>();
}
