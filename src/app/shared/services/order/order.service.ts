import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order.service.model';
import { orders } from './order.service.mock';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public readonly getOrders = (): Observable<Order[]> => of(orders);
}
