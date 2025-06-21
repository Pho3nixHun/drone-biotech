import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { summaries } from './summary.mock';
import { UserRole } from '@stores/auth/auth.model';
import { Summary } from './summary.service.model';

@Injectable({
    providedIn: 'root',
})
export class SummaryService {
    public getSummaries = (role: UserRole): Observable<Summary[]> =>
        of(summaries).pipe(
            map((summaries) =>
                summaries.filter((summary) => summary.allowedRole === role)
            )
        );
}
