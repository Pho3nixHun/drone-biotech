import {
    defaultRel,
    defaultTarget,
} from '@components/header/components/nav/components/nav-item/nav-item-vm';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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
export class AppComponent {
    protected title = 'drone-biotech-webapp';
    protected readonly vm = inject(AppService).getVM();
    private readonly authEvents = injectDispatch(authEvents);

    protected signOut() {
        this.authEvents.signOut();
    }

    protected readonly defaultRel = defaultRel;
    protected readonly defaultTarget = defaultTarget;
    protected readonly isWithLink = isWithLink;
}
