export type OrderStatusType = 'active' | 'pending' | 'completed';

export interface Order {
    id: string;
    creationDate: Date;
    totalAreaInHa: number;
    status: OrderStatusType;
    moneyValue: number;
    requester: string;
}

export type MyOrder = Omit<Order, 'requester'>;
export type CompanyOrder = Order;
