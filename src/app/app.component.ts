import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { NavItemComponent } from '@components/header/components/nav/components/nav-item/nav-item.component';
import { AppService } from './app.service';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { AuthActions } from './stores/auth/auth.actions';
import { Store } from '@ngrx/store';
import { NgTemplateOutlet } from '@angular/common';
import { isWithLink } from '@interfaces/with-link.interface';

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
        RouterModule,
        NgTemplateOutlet,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected title = 'drone-biotech-webapp';
    private readonly appService = inject(AppService);
    private readonly store = inject(Store);
    protected vm = this.appService.getVM();

    isWithLink = isWithLink;

    signOut() {
        this.store.dispatch(AuthActions.signOut());
    }
}
