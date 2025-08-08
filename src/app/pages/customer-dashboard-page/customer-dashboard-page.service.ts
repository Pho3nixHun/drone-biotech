import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerDashboardPageVM } from './customer-dashboard-page.model';
import { customerDashboardPageVM } from './customer-dashboard-page.mock';

@Injectable({
    providedIn: 'root',
})
export class CustomerDashboardPageService {
    public getVM = (): Observable<CustomerDashboardPageVM | null> => this.vm$;

    private readonly vm$: Observable<CustomerDashboardPageVM | null> = of(
        customerDashboardPageVM
    );
}
