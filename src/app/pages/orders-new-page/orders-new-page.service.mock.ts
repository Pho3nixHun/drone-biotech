import { Injectable, Signal, signal } from '@angular/core';
import { OrdersNewPageVM } from './orders-new-page-vm.model';
import { OrdersNewPageService } from './orders-new-page.service';

@Injectable({
    providedIn: 'root',
})
export class OrdersNewPageMockService {
    public getVM(): Signal<OrdersNewPageVM | undefined> {
        return vmSignal;
    }
}

export const updateVMSignal = (vm: OrdersNewPageVM | undefined) => {
    vmSignal.set(vm);
};

const vmSignal = signal<OrdersNewPageVM | undefined>(undefined);

export const provideOrdersNewPageMock = () => ({
    provide: OrdersNewPageService,
    useClass: OrdersNewPageMockService,
});
