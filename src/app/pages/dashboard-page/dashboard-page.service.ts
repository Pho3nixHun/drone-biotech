import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardPageVM } from './dashboard-page.model';
import { dashboardPageVM } from './dashboard-page.mock';

@Injectable({
    providedIn: 'root',
})
export class DashboardPageService {
    public getVM$(): Observable<DashboardPageVM | null> {
        return this.vm$;
    }
    private readonly vm$: Observable<DashboardPageVM | null> =
        of(dashboardPageVM);
}
