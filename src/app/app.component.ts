import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppService } from './app.service';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { AuthActions } from './stores/auth/auth.actions';
import { Store } from '@ngrx/store';

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
    MatIconModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'drone-biotech-webapp';
  private readonly appService = inject(AppService);
  private readonly store = inject(Store);
  protected vm = this.appService.getVM();

  signOut() {
    this.store.dispatch(AuthActions.signOut());
  }
}
