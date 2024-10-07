import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    NavItemComponent,
    TranslocoModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'drone-biotech-webapp';
  appService = inject(AppService);

  vm = this.appService.getVM();
}
