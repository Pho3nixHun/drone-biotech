import {
    mapAuthUserToDashboardUser,
    User,
} from '@interfaces/with-base-dashboard-page.interface';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import {
    DashboardPageVM,
    mapSummaryColorTypeToCSSTextColor,
    mapSummaryUnitTypeToTranslocoQuantityKey,
    SummaryXVM,
} from './dashboard-page.model';
import { Store } from '@ngrx/store';
import { selectUser } from '@stores/auth/auth.selector';
import { DASHBOARD_PAGE_CONFIG } from './dashboard-page.config';
import { SummaryService } from '@services/summary/summary.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardPageService {
    private readonly store = inject(Store);
    private readonly summaryService = inject(SummaryService);
    private readonly config = inject(DASHBOARD_PAGE_CONFIG);

    public getVM$(): Observable<DashboardPageVM | null> {
        return this.vm$;
    }

    private readonly user$: Observable<User | null> = this.store
        .select(selectUser)
        .pipe(map((user) => (user ? mapAuthUserToDashboardUser(user) : null)));

    private readonly filteredSummaryXVMs$: Observable<SummaryXVM[] | null> =
        this.user$.pipe(
            switchMap((user) =>
                user
                    ? this.summaryService.getSummaries(user.role).pipe(
                          map((summaries) =>
                              summaries.map((summary) => ({
                                  ...summary,
                                  color: mapSummaryColorTypeToCSSTextColor(
                                      summary.colorType
                                  ),
                                  quantity: summary.unitType
                                      ? {
                                            value: summary.quantity,
                                            valueKey:
                                                mapSummaryUnitTypeToTranslocoQuantityKey(
                                                    summary.unitType
                                                ),
                                        }
                                      : { value: summary.quantity },
                              }))
                          )
                      )
                    : of(null)
            )
        );

    private readonly vm$: Observable<DashboardPageVM | null> = combineLatest([
        this.user$,
        this.filteredSummaryXVMs$,
    ]).pipe(
        map(([user, summaries]) =>
            user && summaries
                ? {
                      ...this.config,
                      userHeaderXVM: {
                          ...this.config.userHeaderVM,
                          user,
                      },
                      summaryXVMs: summaries,
                  }
                : null
        )
    );
}
