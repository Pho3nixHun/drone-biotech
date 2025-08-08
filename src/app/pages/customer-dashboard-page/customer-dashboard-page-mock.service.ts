import { Injectable } from '@angular/core';
import { CustomerDashboardPageService } from './customer-dashboard-page.service';
import { CustomerDashboardPageVM } from './customer-dashboard-page.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { customerDashboardPageVM } from './customer-dashboard-page.mock';

@Injectable({
    providedIn: 'root',
})
export class CustomerDashboardPageMockService {
    public getVM = (): Observable<CustomerDashboardPageVM | undefined> =>
        this.vm$;

    private readonly vm$: Observable<CustomerDashboardPageVM | undefined> =
        vmSubject.asObservable();
}
const vmSubject = new BehaviorSubject<CustomerDashboardPageVM | undefined>(
    customerDashboardPageVM
);

export const updateVMSubject = (vm: CustomerDashboardPageVM | undefined) =>
    vmSubject.next(vm);

export const provideCustomerDashboardPageMockService = () => ({
    provide: CustomerDashboardPageService,
    useClass: CustomerDashboardPageMockService,
});
