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


export type OrderStatus = 'active';

type MissionStatus = 'scheduled' | 'preparing' | 'completed';

interface Message {
    sender: string;
    sendingDate: Date;
    message: string;
}

export interface Mission {
    id: string;
    fieldName: string;
    areaInHa: number;
    scheduledDate: Date;
    status: MissionStatus;
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
