import {
    defaultRel,
    defaultTarget,
} from '@components/header/components/nav/components/nav-item/nav-item-vm';
import { Component, inject, OnInit } from '@angular/core';
import {
    NavigationEnd,
    Router,
    RouterModule,
    RouterOutlet,
    Event,
} from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { AppService } from './app.service';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { NgTemplateOutlet } from '@angular/common';
import { isWithLink } from '@interfaces/with-link.interface';
import { injectDispatch } from '@ngrx/signals/events';
import { authEvents } from '@stores/auth/auth.events';
import { ButtonComponent } from '@components/button/button.component';
import { isNotUndefined } from '@utils/is-undefined.typeguard';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        LogoComponent,
        NavComponent,
        TranslocoModule,
        MatIconModule,
        RouterModule,
        NgTemplateOutlet,
        ButtonComponent,
    ],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    protected title = 'drone-biotech-webapp';
    private readonly router = inject(Router);
    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                setTimeout(() => {
                    if (isNotUndefined(window) && window.HSStaticMethods) {
                        window.HSStaticMethods.autoInit();
                    }
                }, 100);
            }
        });
    }

    protected readonly vm = inject(AppService).getVM();
    private readonly authEvents = injectDispatch(authEvents);

    protected signOut() {
        this.authEvents.signOut();
    }

    protected readonly defaultRel = defaultRel;
    protected readonly defaultTarget = defaultTarget;
    protected readonly isWithLink = isWithLink;
}
