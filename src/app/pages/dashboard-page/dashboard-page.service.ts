import {
    mapAuthUserToDashboardUser,
    User,
} from '@interfaces/with-base-dashboard-page.interface';
import { map, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { DashboardPageVM } from './dashboard-page.model';
import { dashboardPageConfig as config } from './dashboard-page.mock';
import { Store } from '@ngrx/store';
import { selectUser } from '@stores/auth/auth.selector';

@Injectable({
    providedIn: 'root',
})
export class DashboardPageService {
    private readonly store = inject(Store);

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
                      ...config,
                      userHeaderXVM: {
                          ...config.userHeaderVM,
                          user,
                      },
                  }
                : null
        )
    );
}
