import {
    mapAuthUserToDashboardUser,
    User,
} from '@interfaces/with-base-dashboard-page.interface';
import { map, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { DashboardPageVM } from './dashboard-page.model';
import { Store } from '@ngrx/store';
import { selectUser } from '@stores/auth/auth.selector';
import { DASHBOARD_PAGE_CONFIG } from './dashboard-page.config';

@Injectable({
    providedIn: 'root',
})
export class DashboardPageService {
    private readonly store = inject(Store);
    private readonly config = inject(DASHBOARD_PAGE_CONFIG);

    public getVM$(): Observable<DashboardPageVM | null> {
        return this.vm$;
    }

    private readonly user$: Observable<User | null> = this.store
        .select(selectUser)
        .pipe(map((user) => (user ? mapAuthUserToDashboardUser(user) : null)));

    private readonly vm$: Observable<DashboardPageVM | null> = this.user$.pipe(
        map((user) =>
            user
                ? {
                      ...this.config,
                      userHeaderXVM: {
                          ...this.config.userHeaderVM,
                          user,
                      },
                  }
                : null
        )
    );
}
