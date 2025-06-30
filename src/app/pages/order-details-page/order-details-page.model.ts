import { StatusVM } from '@components/status/status.model';
import { HashMap } from '@jsverse/transloco';
import { Order, OrderStatus } from '@services/order/order.service.model';
import { isObject } from '@utils/is-object.typeguard';

interface HeaderConfig {
    idTitleKey: string;
    clientTextKey: string;
    createdDateTextKey: string;
    createdDateValueKey: string;
    totalAreaTextKey: string;
    totalAreaValueKey: string;
    addNewMissionButtonTextKey: string;
}

export interface OrderDetailsPageVM {
    headerXVM: HeaderXVM;
}

export interface OrderDetailsPageConfig {
    headerConfig: HeaderConfig;
}

interface StatusXVM extends StatusVM {
    statusTextKey: string;
}

interface TranslateInput {
    key: string;
    params: HashMap;
}

type Value = string | number | Date | TranslateInput;

interface SummaryXVM {
    textKey: string;
    value: Value;
}

export const isTranslateInput = (obj: Value): obj is TranslateInput =>
    isObject(obj) && 'params' in obj && 'key' in obj;

interface HeaderXVM
    extends HeaderConfig,
        Pick<Order, 'id' | 'creationDate' | 'client' | 'totalAreaInHa'> {

    statusXVM: StatusXVM;
    summaryXVMs: SummaryXVM[];
}

export const mapOrderStatusToStatusToCSSStyles = (
    status: OrderStatus
): string =>
    ({
        active: 'bg-green-200 text-green-800',
        pending: 'bg-red-200 text-red-800',
        completed: 'bg-orange-200 text-orange-800',

    })[status] ?? '';

export const mapOrderStatusToTranslocoTextKey = (status: OrderStatus): string =>
    ({
        active: 'OrderDetailsPage.header.status.active',
        pending: 'OrderDetailsPage.header.status.pending',
        completed: 'OrderDetailsPage.header.status.completed',

    })[status] ?? '';
