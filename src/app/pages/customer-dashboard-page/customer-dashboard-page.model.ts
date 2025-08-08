import { WithTitle } from '@interfaces/with-title.interface';
import { WithLabel } from '@interfaces/with-label.interface';
import { ValueVM } from '@components/value/value.model';
import { Anchor, WithAnchor } from '@interfaces/with-anchor.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';

interface KeyValueXVM extends WithLabel {
    valueVM: ValueVM;
}

export enum Status {
    ACTIVE,
    COMPLETED,
    PENDING,
}

export interface BadgeXVM extends WithTextNode {
    status: Status;
}
interface StatusXVM extends KeyValueXVM {
    badgeXVM: BadgeXVM;
}

export interface BaseOrderXVM {
    id: KeyValueXVM;
    creationDate: KeyValueXVM;
    totalAreaInHa: KeyValueXVM;
    price: KeyValueXVM;
    status: StatusXVM;
}
interface AnchorXVM extends WithLabel, Anchor {}
export interface MyOrderXVM extends BaseOrderXVM {
    type: 'myOrder';
    anchorXVM: AnchorXVM;
}
export interface CompanyOrderXVM extends BaseOrderXVM {
    type: 'companyOrder';
    requester: KeyValueXVM;
}

export type OrderXVM = MyOrderXVM | CompanyOrderXVM;

export interface GridXVM extends WithTitle, Partial<WithAnchor> {
    headerKeys: string[];
    orderXVMs: OrderXVM[];
}

export interface CustomerDashboardPageVM {
    gridXVMs: GridXVM[];
}
