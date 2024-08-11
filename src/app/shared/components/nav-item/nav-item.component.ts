import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollDirective } from '@directives/scroll.directive';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [ScrollDirective, RouterLink],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {}
