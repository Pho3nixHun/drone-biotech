import { Injectable } from '@angular/core';
import { PilotDashboardPageVM } from './pilot-dashboard-page.model';
import { Observable, of } from 'rxjs';
import { pilotDashboardPageVM } from './pilot-dashboard-page.mock';

@Injectable({
    providedIn: 'root',
})
export class PilotDashboardPageService {
    public getVM = (): Observable<PilotDashboardPageVM | undefined> => this.vm$;

    private readonly vm$: Observable<PilotDashboardPageVM | undefined> =
        of(pilotDashboardPageVM);
}
