import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppComponentVM } from './app-vm.model';
import { ScrollToDirective } from '@directives/scroll-to/scroll-to.directive';
import { TranslocoModule } from '@jsverse/transloco';
import { AppRouteSegment } from './app-route-segment';
import { CommonModule } from '@angular/common';

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
    TranslocoModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';
  vm = signal<AppComponentVM>({
    logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
    navItemVMs: [
      { titleKey: 'AppComponent.navItems.0.title' },
      { titleKey: 'AppComponent.navItems.1.title', sectionID: AppRouteSegment.PRODUCT },
      { titleKey: 'AppComponent.navItems.2.title', sectionID: AppRouteSegment.PARTNERS },
      { titleKey: 'AppComponent.navItems.3.title' },
    ],
  });
}
