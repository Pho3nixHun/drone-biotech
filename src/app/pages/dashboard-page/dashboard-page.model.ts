import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { isObject } from '@utils/is-object.typeguard';
import {
    SummaryItem,
    ActiveMission,
    CompletedMission,
    User,
    Role,
    MyOrder,
    CompanyOrder,
    SummaryItemColorType,
    SummaryItemUnitType,
    OrderStatusType,
    MissionStatusType,
    MissionPerformanceType,
} from './dashboard-page.service.model';

interface NavigationAnchor extends WithRouterLink {
    textKey: string;
    textColor: string;
}

interface Badge {
    textKey: string;
    color: string;
}

type KVsFromVM<VM> = {
    [K in keyof VM as `${K & string}KV`]: Lowercase<K & string> extends
        | `${string}date${string}`
        | `${string}money${string}`
        ? KeyValuePair<'with', VM[K]>
        : KeyValuePair<'without', VM[K]>;
};
export interface SummaryItemXVM extends SummaryItem {
    color: string;
    quantityKey: string | null;
}

export type OperationsActiveMissionTypeXVM = KVsFromVM<
    Omit<ActiveMission, 'scheduledDate' | 'status' | 'pilot'> & {
        badge: Badge;
        pilot: PilotXVM;
    }
> & { actions: NavigationAnchor[] };

export type OperationsRecentCompletedMissionTypeXVM = KVsFromVM<
    Omit<CompletedMission, 'areaInHa' | 'pilot' | 'performance'> & {
        badge: Badge;
        pilot: PilotXVM;
    }
> & { action: NavigationAnchor };

export const isOperationsMissionTypeXVM = (
    obj: unknown
): obj is OperationsMissionTypeXVM => isObject(obj);

export const isOperationsActiveMissionTypeXVM = (
    obj: OperationsMissionTypeXVM
): obj is OperationsActiveMissionTypeXVM => 'areaInHaKV' in obj;

export type OperationsMissionTypeXVM =
    | OperationsActiveMissionTypeXVM
    | OperationsRecentCompletedMissionTypeXVM;

interface WithKey<V> {
    value: V;
    valueKey: string;
}
interface WithoutKey<V> {
    value: V;
}

type ValuePropsType<T, V> = T extends 'with' ? WithKey<V> : WithoutKey<V>;

type KeyValuePair<T, V> = ValuePropsType<T, V> & {
    key: string;
};

interface WithPilot {
    name: string;
}
interface WithoutPilot {
    textKey: string;
    color: string;
}

export type PilotXVM = WithPilot | WithoutPilot;

export const isWithoutPilotKV = (
    obj: KeyValuePair<'without', PilotXVM>
): obj is KeyValuePair<'without', WithoutPilot> =>
    'textKey' in obj.value && 'color' in obj.value;

export const isWithPilotKV = (
    obj: KeyValuePair<'without', PilotXVM>
): obj is KeyValuePair<'without', WithPilot> => 'name' in obj.value;

export type PilotAssignedMission = Omit<ActiveMission, 'client' | 'pilot'>;
export type PilotCompletedMission = Omit<CompletedMission, 'client' | 'pilot'>;
export type PilotAssignedMissionXVM = KVsFromVM<
    Omit<PilotAssignedMission, 'status'> & { badge: Badge }
> & {
    action: NavigationAnchor;
};
export type PilotCompletedMissionXVM = KVsFromVM<
    Omit<PilotCompletedMission, 'performance'> & { badge: Badge }
> & { action: NavigationAnchor };

export type PilotMissionXVMType =
    | PilotAssignedMissionXVM
    | PilotCompletedMissionXVM;

export const isPilotAssignedMissionXVM = (
    obj: PilotMissionXVMType
): obj is PilotAssignedMissionXVM => 'scheduledDateKV' in obj;

export type MyOrderXVM = KVsFromVM<MyOrder & { badge: Badge }> & {
    action: NavigationAnchor;
};

export type CompanyOrderXVM = KVsFromVM<CompanyOrder & { badge: Badge }>;

export type OrderXVM = MyOrderXVM | CompanyOrderXVM;

export const isMyOrderXVM = (obj: OrderXVM): obj is MyOrderXVM =>
    !('requesterKV' in obj);
export const isCompanyOrderXVM = (obj: OrderXVM): obj is CompanyOrderXVM =>
    'requesterKV' in obj;

export interface Grid {
    titleKey: string;
    navigationAnchor: NavigationAnchor | null;
    headerKeys: string[];
    gridColsLength: string;
}

export type CustomerGrid = Grid & {
    type: 'customer';
};

export type CustomerGridXVM = CustomerGrid & { orderXVMs: OrderXVM[] };

export type OperationsGrid = Grid & {
    type: 'office';
};
export type OperationsGridXVM = OperationsGrid & {
    missionXVMs: OperationsMissionTypeXVM[];
};

export type PilotGrid = Grid & {
    type: 'pilot';
};
export type PilotGridXVM = PilotGrid & { missionXVMs: PilotMissionXVMType[] };

export type GridXVMType = CustomerGridXVM | OperationsGridXVM | PilotGridXVM;

export const isPilotGridXVM = (obj: GridXVMType): obj is PilotGridXVM =>
    'type' in obj && obj.type === 'pilot';

export const isOperationsGridXVM = (
    obj: GridXVMType
): obj is OperationsGridXVM => 'type' in obj && obj.type === 'office';

export const isCustomerGridXVM = (obj: GridXVMType): obj is CustomerGridXVM =>
    'type' in obj && obj.type === 'customer';

interface UserHeaderVM {
    titleKey: string;
    dateKey: string;
    roleDashboardKey: string;
    loginTextKey: string;
}

interface UserHeaderXVM extends UserHeaderVM {
    user: User;
}

interface WithTitleKey {
    titleKey: string;
}

type WithoutValueKey = WithTitleKey;

interface WithValueKey extends WithTitleKey {
    valueKey: string;
}

interface Action {
    textKey: string;
    textColor: string;
}

interface Assignments {
    id: WithoutValueKey;
    fieldName: WithoutValueKey;
    areaInHa: WithoutValueKey;
    scheduledDate: WithValueKey;
    status: WithoutValueKey;
    performance: WithoutValueKey;
    completionDate: WithValueKey;
    client: WithoutValueKey;
    pilot: WithoutValueKey;
    moneyValue: WithValueKey;
    creationDate: WithValueKey;
    requester: WithoutValueKey;
}

export interface DashboardPageConfig {
    userHeaderVM: UserHeaderVM;
    assignments: Assignments;
    customerMyOrders: CustomerGrid;
    customerCompanyOrders: CustomerGrid;
    pilotMyAssignedMissions: PilotGrid;
    pilotMyCompletedMissions: PilotGrid;
    operationsActiveMissions: OperationsGrid;
    operationsRecentCompletedMissions: OperationsGrid;
    viewMissionAction: Action;
    viewReportAction: Action;
    viewDetailsAction: Action;
    manageAction: Action;
    assignAction: Action;
    reassignAction: Action;
}

export interface DashboardPageVM {
    userHeaderXVM: UserHeaderXVM;
    summaryItemList: SummaryItemXVM[];
    gridXVMs: GridXVMType[];
}

// Mapper functions
export const mapRoleToCSSStyle = (type: Role): string => {
    return (
        {
            customer: 'bg-blue-600',
            pilot: 'bg-green-600',
            office: 'bg-red-600',
        }[type] || ''
    );
};

export const mapSummaryItemColorTypeToCSSTextColor = (
    type: SummaryItemColorType
): string => {
    return (
        {
            blue: 'text-blue-600',
            green: 'text-green-600',
            red: 'text-red-600',
            purple: 'text-purple-600',
            yellow: 'text-yellow-600',
        }[type] || ''
    );
};

export const mapSummaryItemUnitTypeToTranslocoQuantityKey = (
    type: SummaryItemUnitType
): string | null => {
    return (
        {
            hectare: 'DashboardPage.hectareQuantity',
            money: 'DashboardPage.moneyQuantity',
            rating: 'DashboardPage.ratingQuantity',
            hour: 'DashboardPage.hourQuantity',
            base: null,
        }[type] ?? null
    );
};

export const mapOrderStatusTypeToCCSColors = (
    type: OrderStatusType
): string => {
    return (
        {
            pending: 'bg-pink-200 text-pink-600',
            completed: 'bg-green-200 text-green-600',
            active: 'bg-yellow-200 text-yellow-600',
        }[type] || ''
    );
};

export const mapOrderStatusTypeToTranslocoTextKey = (
    type: OrderStatusType
): string => {
    return (
        {
            pending: 'DashboardPage.pending',
            completed: 'DashboardPage.completed',
            active: 'DashboardPage.active',
        }[type] || ''
    );
};

export const mapMissionStatusTypeToCCSColors = (
    type: MissionStatusType
): string => {
    return (
        {
            scheduled: 'bg-pink-200 text-pink-600',
            pending: 'bg-green-200 text-green-600',
            preparing: 'bg-yellow-200 text-yellow-600',
        }[type] || ''
    );
};
export const mapMissionStatusTypeToTranslocoTextKey = (
    type: MissionStatusType
): string => {
    return (
        {
            scheduled: 'DashboardPage.scheduled',
            pending: 'DashboardPage.pending',
            preparing: 'DashboardPage.preparing',
        }[type] || ''
    );
};

export const mapMissionPerformanceTypeToCCSColors = (
    type: MissionPerformanceType
): string => {
    return (
        {
            excellent: 'bg-green-200 text-green-600',
            good: 'bg-yellow-200 text-yellow-600',
        }[type] || ''
    );
};
export const mapMissionPerformanceToTranslocoTextKey = (
    type: MissionPerformanceType
): string => {
    return (
        {
            excellent: 'DashboardPage.excellent',
            good: 'DashboardPage.good',
        }[type] || ''
    );
};
