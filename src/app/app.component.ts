import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '@components/logo/logo.component';
import { LogoVM } from '@interfaces/logo-vm';
import { NavComponent } from '@components/nav/nav.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, LogoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';

  logoVM = signal<LogoVM>({ imageSrc: 'assets/phoenix.jpg', routerLink: '' });
}
