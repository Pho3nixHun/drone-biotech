import { Mission } from '@services/mission/mission.service.model';

export type OrderStatus = 'active' | 'pending' | 'completed';
export interface Order {
    id: string;
    status: OrderStatus;
    client: Client;
    summary: Summary;
    creationDate: Date;
    totalAreaInHa: number;
    missions: Mission[];
    messages: Message[];
    moneyValue: number;
}

type Role = 'customer' | 'office' | 'pilot';

export interface User {
    name: string;
    role: Role;
    photoUrl: string | null;
}

export interface Message {
    sender: User;
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
