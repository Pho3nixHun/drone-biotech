import { Injectable, signal } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OrderService } from './order.service';
import { Order } from './order.service.model';

@Injectable({
    providedIn: 'root',
})
export class OrderMockService {
    public readonly getOrdersByName = (name: string): Observable<Order[]> =>
        of(orders()).pipe(
            map((orders) =>
                orders.filter((order) => order.client.contact === name)
            )
        );

    public readonly getCompanyOrders = (
        name: string | undefined
    ): Observable<Order[]> =>
        of(orders()).pipe(
            map((orders) =>
                orders.filter((order) => order.client.contact !== name)
            )
        );
}

const orders = signal<Order[]>([]);

export const updateOrders = (obj: Order[]) => orders.set(obj);

export const provideOrderMockService = () => ({
    provide: OrderService,
    useClass: OrderMockService,
});
