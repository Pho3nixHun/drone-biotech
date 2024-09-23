import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppComponentVM } from './app.component.vm';
import { ScrollToDirective } from '@directives/scroll-to/scroll-to.directive';
import { TranslocoModule } from '@jsverse/transloco';

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
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';
  vm = signal<AppComponentVM>({
    logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
    sectionIDs: ['products', 'partners'],
  });
}
