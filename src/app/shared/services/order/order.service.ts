import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Order } from './order.service.model';
import { orders } from './order.service.mock';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public getOrder = (): Observable<Order> => this.order.asObservable();

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

    private readonly order = new BehaviorSubject<Order>(orders[0]);

    public setOrder = (order: Order) => this.order.next(order);
}
