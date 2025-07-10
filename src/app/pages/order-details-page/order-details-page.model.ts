import { StatusVM } from '@components/status/status.model';
import { HashMap } from '@jsverse/transloco';
import { isObject } from '@utils/is-object.typeguard';
import { OrderStatus as OrderStatusFromService } from '@services/order/order.service.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { WithTitle } from '@interfaces/with-title.interface';

interface HeaderConfig {
    idTitleKey: string;
    clientTextKey: string;
    createdDateTextKey: string;
    createdDateValueKey: string;
    totalAreaTextKey: string;
    totalAreaValueKey: string;
    addNewMissionButtonTextKey: string;
}

interface InfoItemXVM {
    labelKey: string;
    value: Value;
}
interface InfoListXVM {
    infoItemXVMs: InfoItemXVM[];
}
interface InfoPanelXVM extends WithTitle {
    infoListXVM: InfoListXVM;
}
interface OrderDetailsSectionCardXVM extends SectionCardVM {
    type: 'orderDetails';
    infoPanelXVMs: InfoPanelXVM[];
}

type SectionCardXVM = OrderDetailsSectionCardXVM;

export interface OrderDetailsPageVM {
    headerXVM: HeaderXVM;
    sectionCardXVMs: SectionCardXVM[];
}

interface OrderDetailsSectionCardConfig {
    titleKey: string;
    infoPanelConfig: {
        clientInfoPanel: {
            titleKey: string;
            addressLabelKey: string;
            contactLabelKey: string;
            emailLabelKey: string;
            phoneLabelKey: string;
        };
        summaryInfoPanel: {
            titleKey: string;
            averageDoseLabelKey: string;
            averageDoseValueKey: string;
            orderValueLabelKey: string;
            orderValueValueKey: string;
            totalSupplyLabelKey: string;
            totalSupplyValueKey: string;
            treatmentLabelKey: string;
        };
    };
}
export interface OrderDetailsPageConfig {
    headerConfig: HeaderConfig;
    sectionCardConfigs: SectionCardConfigs;
}
interface SectionCardConfigs {
    orderDetailsSectionCardConfig: OrderDetailsSectionCardConfig;
}

interface StatusXVM extends StatusVM {
    statusTextKey: string;
}

interface TranslateInput {
    key: string;
    params: HashMap;
}

type Value = string | number | Date | TranslateInput;

export const isTranslateInput = (obj: Value): obj is TranslateInput =>
    isObject(obj) && 'params' in obj && 'key' in obj;

interface SummaryXVM {
    textKey: string;
    value: Value;
}
interface HeaderXVM extends HeaderConfig {
    id: string;
    statusXVM: StatusXVM;
    summaryXVMs: SummaryXVM[];
}

type OrderStatus = OrderStatusFromService;

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
