import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { AppService } from './app.service';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { AuthActions } from './stores/auth/auth.actions';
import { Store } from '@ngrx/store';
import { NgTemplateOutlet } from '@angular/common';
import { isWithLink } from '@interfaces/with-link.interface';
import {
    defaultRel,
    defaultTarget,
} from '@components/header/components/nav/components/nav-item/nav-item-vm';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        LogoComponent,
        NavComponent,
        TranslocoModule,
        MatIconModule,
        RouterModule,
        NgTemplateOutlet,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected title = 'drone-biotech-webapp';
    protected readonly vm = inject(AppService).getVM();
    private readonly store = inject(Store);

    protected readonly defaultRel = defaultRel;
    protected readonly defaultTarget = defaultTarget;
    protected readonly isWithLink = isWithLink;

    public signOut() {
        this.store.dispatch(AuthActions.signOut());
    }
}
