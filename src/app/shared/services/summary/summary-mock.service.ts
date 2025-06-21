import { Injectable, signal } from '@angular/core';
import { UserRole } from '@stores/auth/auth.model';
import { Observable, of, map } from 'rxjs';
import { Summary } from './summary.service.model';
import { SummaryService } from './summary.service';

@Injectable({
    providedIn: 'root',
})
export class SummaryMockService {
    public getSummaries = (role: UserRole): Observable<Summary[]> =>
        of(summaries()).pipe(
            map((summaries) =>
                summaries.filter((summary) => summary.allowedRole === role)
            )
        );
}

const summaries = signal<Summary[]>([]);

export const updateSummaries = (obj: Summary[]) => summaries.set(obj);

export const provideSummaryMockService = () => ({
    provide: SummaryService,
    useClass: SummaryMockService,
});
