import { Order, OrderStatus } from '@services/order/order.service.model';
import {
    NavigationAnchor,
    WithNavigationAnchor,
} from '@interfaces/navigation-anchor.interface';
import {
    KVsFromVM,
    TitleWithValueKey,
    TitleWithoutValueKey,
} from '@interfaces/value-key.interface';
import {
    Badge,
    GridConfig as Config,
} from '@interfaces/with-base-dashboard-page.interface';

export type MyOrder = Pick<
    Order,
    'id' | 'moneyValue' | 'creationDate' | 'status' | 'totalAreaInHa'
>;
export type CompanyOrder = Pick<
    Order,
    'id' | 'moneyValue' | 'creationDate' | 'status' | 'totalAreaInHa'
> & { requester: Order['client']['contact'] };

export type DashboardOrder = MyOrder | CompanyOrder;

export interface OrdersConfig {
    id: TitleWithoutValueKey;
    creationDate: TitleWithValueKey;
    areaInHa: TitleWithoutValueKey;
    status: TitleWithoutValueKey;
    moneyValue: TitleWithValueKey;
    requester: TitleWithoutValueKey;
    action: NavigationAnchor;
}

interface OrderVM {
    badge: Badge;
}

type MyOrderVM = MyOrder & OrderVM;
type CompanyOrderVM = CompanyOrder & OrderVM;

export type MyOrderXVM = KVsFromVM<MyOrderVM> & WithNavigationAnchor;
export type CompanyOrderXVM = KVsFromVM<CompanyOrderVM>;

export type OrderXVM = MyOrderXVM | CompanyOrderXVM;

type MyOrdersGridConfig = Config & {
    navigationAnchor: Omit<NavigationAnchor, 'textColor'>;
};
type CompanyOrdersGridConfig = Config;

type MyOrdersGridConfigXVM = MyOrdersGridConfig & { orderXVMs: OrderXVM[] };
type CompanyOrdersGridConfigXVM = CompanyOrdersGridConfig & {
    orderXVMs: OrderXVM[];
};
export type GridXVM = MyOrdersGridConfigXVM | CompanyOrdersGridConfigXVM;

export interface CustomerDashboardPageConfig {
    ordersConfig: OrdersConfig;
    myOrdersGridConfig: MyOrdersGridConfig;
    companyOrdersGridConfig: CompanyOrdersGridConfig;
}

export interface CustomerDashboardPageVM {
    gridXVMs: GridXVM[];
}
export const myOrdersGridXVM = (obj: GridXVM): obj is MyOrdersGridConfigXVM =>
    'navigationAnchor' in obj;

export const isMyOrderXVM = (obj: OrderXVM): obj is MyOrderXVM =>
    !('requesterKV' in obj);
export const isCompanyOrderXVM = (obj: OrderXVM): obj is CompanyOrderXVM =>
    'requesterKV' in obj;

export const mapOrderStatusTypeToCCSColors = (type: OrderStatus): string => {
    return (
        {
            pending: 'bg-pink-200 text-pink-600',
            completed: 'bg-green-200 text-green-600',
            active: 'bg-yellow-200 text-yellow-600',
        }[type] || ''
    );
};

export const mapOrderStatusTypeToTranslocoTextKey = (
    type: OrderStatus
): string => {
    return (
        {
            pending: 'DashboardPage.pending',
            completed: 'DashboardPage.completed',
            active: 'DashboardPage.active',
        }[type] || ''
    );
};
