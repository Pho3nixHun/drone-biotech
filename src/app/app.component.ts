import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppService } from './app.service';
import { TranslocoModule } from '@jsverse/transloco';
import { Store } from '@ngrx/store';
import * as AuthActions from './auth/auth.actions';
import { AuthState } from './auth/auth.models';

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
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'drone-biotech-webapp';
  private readonly appService = inject(AppService);
  protected vm = this.appService.getVM();

  constructor(private readonly store: Store<AuthState>) {}

  register(email: string, password: string) {
    this.store.dispatch(AuthActions.registerUser({ email, password }));
  }
}
