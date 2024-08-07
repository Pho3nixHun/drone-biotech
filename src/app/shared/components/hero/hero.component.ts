import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ScrollDirective } from '@directives/scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ScrollDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
