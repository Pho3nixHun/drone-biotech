import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { NavItem } from './shared/interfaces/nav-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LogoComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'drone-biotech-webapp';

  navItems = signal<NavItem[]>([
    { link: 'product-section', text: 'Products' },
    { link: 'partner-section', text: 'Partners' },
    { link: 'contact-section', text: 'Contacts' },
  ]);
}
