import { Injectable } from '@angular/core';
import { OfficeDashboardPageService } from './office-dashboard-page.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { OfficeDashboardPageVM } from './office-dashboard-page.model';

@Injectable({
    providedIn: 'root',
})
export class OfficeDashboardPageMockService {
    public getVM = (): Observable<OfficeDashboardPageVM | null> => this.vm$;

    private readonly vm$: Observable<OfficeDashboardPageVM | null> =
        vmSubject.asObservable();
}

const vmSubject = new BehaviorSubject<OfficeDashboardPageVM | null>(null);

export const updateVMSubject = (vm: OfficeDashboardPageVM | null) =>
    vmSubject.next(vm);

export const provideOfficeDashboardPageMockService = () => ({
    provide: OfficeDashboardPageService,
    useClass: OfficeDashboardPageMockService,
});
