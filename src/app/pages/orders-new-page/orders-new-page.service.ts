import { Injectable, Signal, signal } from '@angular/core';
import { OrdersNewPageVM } from './orders-new-page-vm.model';
import { ordersNewPageVMDefault } from './orders-new-page.mock';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageService {
    public getVM(): Signal<OrdersNewPageVM> {
        return signal<OrdersNewPageVM>(ordersNewPageVMDefault);
    }
}
