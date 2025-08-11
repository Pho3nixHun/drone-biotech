import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardPageVM } from './dashboard-page.model';
import { DashboardPageService } from './dashboard-page.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardPageMockService {
    public getVM$(): Observable<DashboardPageVM | null> {
        return this.vm$;
    }
    private readonly vm$: Observable<DashboardPageVM | null> =
        vmSubject.asObservable();
}

const vmSubject = new BehaviorSubject<DashboardPageVM | null>(null);

export const updateVMSubject = (vm: DashboardPageVM | null) =>
    vmSubject.next(vm);

export const provideDashboardPageMockService = () => ({
    provide: DashboardPageService,
    useClass: DashboardPageMockService,
});
