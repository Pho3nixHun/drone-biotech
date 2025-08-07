import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PilotDashboardPageVM } from './pilot-dashboard-page.model';
import { pilotDashboardPageVM } from './pilot-dashboard-page.mock';
import { PilotDashboardPageService } from './pilot-dashboard-page.service';

@Injectable({
    providedIn: 'root',
})
export class PilotDashboardPageMockService {
    public getVM = (): Observable<PilotDashboardPageVM | undefined> => this.vm$;

    private readonly vm$: Observable<PilotDashboardPageVM | undefined> =
        vmSubject.asObservable();
}

const vmSubject = new BehaviorSubject<PilotDashboardPageVM | undefined>(
    pilotDashboardPageVM
);

export const updateVMSubject = (vm: PilotDashboardPageVM | undefined) =>
    vmSubject.next(vm);

export const providePilotDashboardPageMockService = () => ({
    provide: PilotDashboardPageService,
    useClass: PilotDashboardPageMockService,
});
