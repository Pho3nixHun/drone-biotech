import { Mission } from '@services/mission/mission.service.model';

export type OrderStatus = 'active' | 'pending' | 'completed';
export interface Order {
    id: string;
    status: OrderStatus;
    client: Client;
    summary: Summary;
    createdDate: Date;
    totalArea: number;
    missions: Mission[];
    messages: Message[];
}

interface Message {
    sender: string;
    sendingDate: Date;
    message: string;
}

interface Summary {
    treatment: string;
    averageDose: number;
    totalSupply: number;
    orderValue: number;
}

interface Client {
    client: string;
    contact: string;
    email: string;
    phone: string;
    address: string;
}
