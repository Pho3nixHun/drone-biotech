import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { order } from './order.service.mock';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public getOrder = () => of(order);
}
