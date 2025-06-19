import { Order } from './order.service.model';

export const orders: Order[] = [
    {
        id: 'B-78901',
        creationDate: new Date(),
        totalAreaInHa: 347.5,
        status: 'active',
        moneyValue: 34750,
        requester: 'Sarah Johnson',
    },
    {
        id: 'B-78902',
        creationDate: new Date(),
        totalAreaInHa: 125.8,
        status: 'completed',
        moneyValue: 12580,
        requester: 'Sarah Johnson',
    },
    {
        id: 'B-78903',
        creationDate: new Date(),
        totalAreaInHa: 89.2,
        status: 'pending',
        moneyValue: 8920,
        requester: 'Mike Thompson',
    },
    {
        id: 'B-78904',
        creationDate: new Date(),
        totalAreaInHa: 234.7,
        status: 'active',
        moneyValue: 23470,
        requester: 'Lisa Martinez',
    },
];
