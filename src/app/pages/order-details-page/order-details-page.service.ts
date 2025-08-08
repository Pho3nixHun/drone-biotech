import { Injectable } from '@angular/core';
import { BehaviorSubject, noop, Observable } from 'rxjs';
import { OrderDetailsPageVM } from './order-details-page.model';
import { orderDetailsPageVM } from './order-details-page.mock';
import { Message } from './order-details-page.service.model';

@Injectable({
    providedIn: 'root',
})
export class OrderDetailsPageService {
    public getVM() {
        return this.vm$;
    }

    public closeOrder = () => noop;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public sendMessage = (message: Message) => noop;

    private readonly vm$: Observable<OrderDetailsPageVM> =
        vmSubject.asObservable();
}

const vmSubject = new BehaviorSubject(orderDetailsPageVM);

export const updateVMSubject = (vm: OrderDetailsPageVM) => vmSubject.next(vm);
