import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { LogoComponentInterfaces } from '@components/header/components/logo/logo.component.interfaces';
import { NavItemComponent } from "@components/header/components/nav/components/nav-item/nav-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LogoComponent, NavComponent, NavItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';
  logoVM = signal<LogoComponentInterfaces>({ imageSrc: 'assets/phoenix.jpg', routerLink: '' });
}