import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Order } from './order.service.model';
import { orders } from './order.service.mock';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public getOrder = () => of(orders);

    public readonly getOrdersByName = (name: string): Observable<Order[]> =>
        of(orders).pipe(
            map((orders) => orders.filter((order) => order.requester === name))
        );

    public readonly getCompanyOrders = (
        name: string | undefined
    ): Observable<Order[]> =>
        of(orders).pipe(
            map((orders) => orders.filter((order) => order.requester !== name))
        );
}
