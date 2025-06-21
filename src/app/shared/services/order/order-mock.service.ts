import { Injectable, signal } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Order } from './order.service.model';
import { OrderService } from './order.service';

@Injectable({
    providedIn: 'root',
})
export class OrderMockService {
    public readonly getOrdersByName = (name: string): Observable<Order[]> =>
        of(orders()).pipe(
            map((orders) => orders.filter((order) => order.requester === name))
        );

    public readonly getCompanyOrders = (
        name: string | undefined
    ): Observable<Order[]> =>
        of(orders()).pipe(
            map((orders) => orders.filter((order) => order.requester !== name))
        );
}

const orders = signal<Order[]>([]);

export const updateOrders = (obj: Order[]) => orders.set(obj);

export const provideOrderMockService = () => ({
    provide: OrderService,
    useClass: OrderMockService,
});
