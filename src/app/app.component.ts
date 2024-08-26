import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppComponentInterfaces } from './app.component.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LogoComponent, NavComponent, NavItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';
  vm = signal<AppComponentInterfaces>({
    logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '' },
  });
}
