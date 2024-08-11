import { Component, input } from '@angular/core';
import { ScrollDirective } from '@directives/scroll.directive';
import { NavItem } from '@interfaces/nav-item';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ScrollDirective, CommonModule, NavItemComponent],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  navItems = input<NavItem[]>();
}
