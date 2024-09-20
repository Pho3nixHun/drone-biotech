import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppComponentVM } from './app.component.vm';
import { ScrollToDirective } from '@directives/scroll-to/scroll-to.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    NavItemComponent,
    ScrollToDirective,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';
  vm = signal<AppComponentVM>({
    logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
    navItems: [
      { titleKey: 'AppComponent.navItems.0.title' },
      { titleKey: 'AppComponent.navItems.1.title' },
      { titleKey: 'AppComponent.navItems.2.title' },
      { titleKey: 'AppComponent.navItems.3.title' },
    ],
  });
}
