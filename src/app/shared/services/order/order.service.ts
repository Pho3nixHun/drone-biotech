import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Order } from './order.service.model';
import { orders } from './order-mock';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public getOrder = (): Observable<Order> => of(orders[0]);

    public readonly getOrdersByName = (name: string): Observable<Order[]> =>
        of(orders).pipe(
            map((orders) =>
                orders.filter((order) => order.client.contact === name)
            )
        );

    public readonly getCompanyOrders = (
        name: string | undefined
    ): Observable<Order[]> =>
        of(orders).pipe(
            map((orders) =>
                orders.filter((order) => order.client.contact !== name)
            )
        );
}
