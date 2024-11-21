import { Component, inject, OnInit } from '@angular/core';
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
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { isWithLink } from '@interfaces/with-link.interface';
import {
    defaultRel,
    defaultTarget,
} from '@components/header/components/nav/components/nav-item/nav-item-vm';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
import { Observable, of } from 'rxjs';

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
export class AppComponent implements OnInit {
    protected title = 'drone-biotech-webapp';
    private readonly appService = inject(AppService);
    private readonly store = inject(Store);
    protected vm = this.appService.getVM();
    protected headerCanBeShown$: Observable<boolean> = of(false);

    defaultRel = defaultRel;
    defaultTarget = defaultTarget;
    isWithLink = isWithLink;

    signOut() {
        this.store.dispatch(AuthActions.signOut());
    }

    ngOnInit(): void {
        this.headerCanBeShown$ = this.store.select(selectHeaderCanBeShown);
    }
}
