import { Injectable } from '@angular/core';
import { OrdersNewPageVM } from './orders-new-page.model';
import { OrdersNewPageService } from './orders-new-page.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageMockService {
    public getVM(): Observable<OrdersNewPageVM> {
        return vm$;
    }
}

const vm$ = new Subject<OrdersNewPageVM>();

export const updateVMSignal = (vm: OrdersNewPageVM) => vm$.next(vm);

export const provideOrdersNewPageMockService = () => ({
    provide: OrdersNewPageService,
    useClass: OrdersNewPageMockService,
});
