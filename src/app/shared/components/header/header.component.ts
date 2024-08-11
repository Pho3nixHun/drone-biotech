import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ScrollDirective } from '@directives/scroll.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeroComponent, ScrollDirective],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
