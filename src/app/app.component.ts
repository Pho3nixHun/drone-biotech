import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { NavComponent } from '@components/nav/nav.component';
import { LogoComponent } from '@components/logo/logo.component';
import { NavItemComponent } from '@components/nav-item/nav-item.component';
import { ScrollDirective } from '@directives/scroll.directive';
import { NavItem } from '@interfaces/nav-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LogoComponent,
    NavItemComponent,
    ScrollDirective,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';

  navItems = signal<NavItem[]>([
    { link: 'product-section', text: 'Products' },
    { link: 'partner-section', text: 'Partners' },
    { link: 'contact-section', text: 'Contacts' },
  ]);
}
