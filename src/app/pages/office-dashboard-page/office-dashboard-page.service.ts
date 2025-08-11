import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OfficeDashboardPageVM } from './office-dashboard-page.model';
import { officeDashboardPageVM } from './office-dashboard-page.mock';

@Injectable({
    providedIn: 'root',
})
export class OfficeDashboardPageService {
    public getVM = (): Observable<OfficeDashboardPageVM | null> => this.vm$;

    private readonly vm$: Observable<OfficeDashboardPageVM | null> = of(
        officeDashboardPageVM
    );
}
