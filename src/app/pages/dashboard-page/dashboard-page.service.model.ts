export type SummaryItemColorType =
    | 'blue'
    | 'green'
    | 'purple'
    | 'yellow'
    | 'red';
export type SummaryItemUnitType =
    | 'hectare'
    | 'money'
    | 'rating'
    | 'hour'
    | 'base';

export interface SummaryItem {
    allowedRole: Role;
    emoji: string;
    titleKey: string;
    quantity: number;
    colorType: SummaryItemColorType;
    unitType: SummaryItemUnitType;
}

export type Role = 'customer' | 'pilot' | 'office';
export interface User {
    role: Role;
    name: string;
    lastLoginDate: Date;
}

interface Mission {
    id: string;
    fieldName: string;
    areaInHa: number;
    client: string;
    pilot: string | null;
}

export type ActiveMission = Mission & {
    status: MissionStatusType;
    scheduledDate: Date;
};

export type CompletedMission = Mission & {
    performance: MissionPerformanceType;
    completionDate: Date;
};

export type MissionStatusType = 'scheduled' | 'preparing' | 'pending';
export type MissionPerformanceType = 'excellent' | 'good';

export type MissionType = ActiveMission | CompletedMission;

export const isActiveMission = (
    mission: MissionType
): mission is ActiveMission =>
    'status' in mission && 'scheduledDate' in mission;

export const isCompletedMission = (
    mission: MissionType
): mission is CompletedMission =>
    'performance' in mission && 'completionDate' in mission;

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
