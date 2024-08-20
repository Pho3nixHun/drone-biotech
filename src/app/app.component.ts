import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/logo/logo.component';
import { NavComponent } from '@components/nav/nav.component';
import { LogoVM } from '@interfaces/logo-vm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LogoComponent, NavComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';

  logoVM = signal<LogoVM>({ imageSrc: 'assets/phoenix.jpg', routerLink: '' });
}
