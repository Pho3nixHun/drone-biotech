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
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
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
    private readonly appService = inject(AppService);
    private readonly store = inject(Store);
    protected readonly vm = this.appService.getVM();
    protected headerCanBeShown = toSignal(
        this.store.select(selectHeaderCanBeShown),
        { initialValue: false }
    );
    protected readonly defaultRel = defaultRel;
    protected readonly defaultTarget = defaultTarget;
    protected readonly isWithLink = isWithLink;

    public signOut() {
        this.store.dispatch(AuthActions.signOut());
    }
}
