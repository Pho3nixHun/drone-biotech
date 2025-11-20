/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, signal } from '@angular/core';
import { OrderDetailsPageService } from './order-details-page.service';
import { Message, OrderDetailsPageVM } from './order-details-page.model';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageServiceMock {
    public getVM() {
        return vm;
    }

    public sendMessage(_: Message) {}

    public closeOrder() {}
}

export const updateVMSignal = (obj: OrderDetailsPageVM | undefined) => {
    vm.set(obj);
};

const vm = signal<OrderDetailsPageVM | undefined>(undefined);

export const provideOrderDetailsPageServiceMock = () => ({
    provide: OrderDetailsPageService,
    useClass: OrderDetailsPageServiceMock,
});
