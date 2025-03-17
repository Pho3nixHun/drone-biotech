import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { AppService } from './app.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { AuthActions } from './stores/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { isWithLink } from '@interfaces/with-link.interface';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
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
        AsyncPipe,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected title = 'drone-biotech-webapp';
    private readonly appService = inject(AppService);
    private readonly store = inject(Store);
    protected vm = this.appService.getVM();
    protected headerCanBeShown$ = this.store.select(selectHeaderCanBeShown);
    private readonly ser = inject(TranslocoService);
    asd = this.ser.setActiveLang('en');

    defaultRel = defaultRel;
    defaultTarget = defaultTarget;
    isWithLink = isWithLink;

    signOut() {
        this.store.dispatch(AuthActions.signOut());
    }
}
