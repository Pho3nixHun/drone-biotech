import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { summaries } from './summary.mock';
import {
    mapSummaryColorTypeToCSSTextColor,
    mapSummaryUnitTypeToTranslocoQuantityKey,
    SummaryXVM,
} from '@interfaces/with-base-dashboard-page.interface';
import { UserRole } from '@stores/auth/auth.model';

@Injectable({
    providedIn: 'root',
})
export class SummaryService {
    public getSummaries = (role: UserRole): Observable<SummaryXVM[]> =>
        of(summaries).pipe(
            map((summaries) =>
                summaries
                    .filter((summary) => summary.allowedRole === role)
                    .map((summary) => ({
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
        );
}
