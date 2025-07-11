import { StatusVM } from '@components/status/status.model';
import { HashMap } from '@jsverse/transloco';
import { isObject } from '@utils/is-object.typeguard';
import {
    Order,
    OrderStatus as OrderStatusFromService,
} from '@services/order/order.service.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { WithVisibility } from '@interfaces/with-visibility.interface';
import { WithDisabled } from '@interfaces/with-disabled.interface';
import { WithLink } from '@interfaces/with-link.interface';
import { AvatarVM } from '@components/avatar/avatar.model';

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

type SectionCardXVM =
    | OrderDetailsSectionCardXVM
    | OrderActionsSectionCardXVM
    | MessagesSectionCardXVM;

interface CompletionTemplateButtonXVM extends WithTextNode, WithLink {}

interface CloseOrderButtonXVM extends WithTextNode, WithDisabled {
    confirmationDialogVM: ConfirmationDialogVM;
}
interface OrderDetailsSectionCardXVM extends SectionCardVM {
    type: 'orderDetails';
    infoPanelXVMs: InfoPanelXVM[];
}
interface OrderActionsSectionCardXVM extends SectionCardVM {
    type: 'orderActions';
    completionTemplateButtonXVM: CompletionTemplateButtonXVM;
    closeOrderButtonXVM: CloseOrderButtonXVM;
}

interface AvatarXVM extends AvatarVM {
    initial: string;
}
type Role = 'customer' | 'office' | 'pilot';

export interface Message {
    role: Role;
    sendingDate: Date;
    senderName: string;
    message: string;
}
export interface MessageItemXVM
    extends Pick<Message, 'message' | 'sendingDate'> {
    sender: string;
    sendingDateValueKey: string;
    avatarXVM: AvatarXVM;
}

interface MessageItemListXVM {
    messageItemXVMs: MessageItemXVM[];
}
interface MessagesSectionCardXVM extends SectionCardVM {
    type: 'messages';
    messageItemListXVM: MessageItemListXVM;
    buttonTextKey: string;
}
interface StatusXVM extends StatusVM {
    statusTextKey: string;
}

interface SummaryXVM {
    textKey: string;
    value: Value;
}
export interface HeaderXVM extends HeaderConfig {
    id: string;
    statusXVM: StatusXVM;
    summaryXVMs: SummaryXVM[];
}
export interface OrderDetailsPageVM {
    headerXVM: HeaderXVM;
    sectionCardXVMs: SectionCardXVM[];
}

interface AddMissionButtonXVM extends WithVisibility, WithTextNode {}

interface HeaderConfig {
    idTitleKey: string;
    clientTextKey: string;
    createdDateTextKey: string;
    createdDateValueKey: string;
    totalAreaTextKey: string;
    totalAreaValueKey: string;
    addMissionButtonXVM: AddMissionButtonXVM;
}

export interface OrderDetailsPageConfig {
    headerConfig: HeaderConfig;
    sectionCardConfigs: SectionCardConfigs;
}

interface OrderDetailsSectionCardConfig {
    type: 'orderDetails';
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

interface MessagesSectionCardConfig {
    titleKey: string;
    buttonTextKey: string;
    dateValueKey: string;
}
interface SectionCardConfigs {
    orderDetailsSectionCardConfig: OrderDetailsSectionCardConfig;
    orderActionsSectionCardConfig: OrderActionsSectionCardXVM;
    messagesSectionCardConfig: MessagesSectionCardConfig;
}

interface TranslateInput {
    key: string;
    params: HashMap;
}

type Value = string | number | Date | TranslateInput;

export type OrderStatus = OrderStatusFromService;

export const isTranslateInput = (obj: Value): obj is TranslateInput =>
    isObject(obj) && 'params' in obj && 'key' in obj;

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

export const mapRoleTranslocoTextKey = (role: Role): string =>
    ({
        customer: 'OrderDetailsPage.role.customer',
        office: 'OrderDetailsPage.role.office',
        pilot: 'OrderDetailsPage.role.pilot',
    })[role] ?? '';

export const mapHeaderXVM = (
    config: OrderDetailsPageConfig,
    order: Order,
    status: OrderStatus,
    addMissionButtonVisibility: boolean
): HeaderXVM => ({
    ...config.headerConfig,
    addMissionButtonXVM: {
        isVisible: addMissionButtonVisibility,
        textKey: config.headerConfig.addMissionButtonXVM.textKey,
    },
    id: order.id,
    statusXVM: {
        styles: mapOrderStatusToStatusToCSSStyles(status),
        statusTextKey: mapOrderStatusToTranslocoTextKey(status),
    },
    summaryXVMs: [
        {
            textKey: config.headerConfig.clientTextKey,
            value: order.client.client,
        },
        {
            textKey: config.headerConfig.createdDateTextKey,
            value: {
                key: config.headerConfig.createdDateValueKey,
                params: { date: order.creationDate },
            },
        },
        {
            textKey: config.headerConfig.totalAreaTextKey,
            value: {
                key: config.headerConfig.totalAreaValueKey,
                params: { area: order.totalAreaInHa },
            },
        },
    ],
});

export const mapOrderActionsSectionCardXVM = (
    config: OrderDetailsPageConfig,
    closeOrderButtonIsDisabled: boolean
): OrderActionsSectionCardXVM => ({
    ...config.sectionCardConfigs.orderActionsSectionCardConfig,
    closeOrderButtonXVM: {
        ...config.sectionCardConfigs.orderActionsSectionCardConfig
            .closeOrderButtonXVM,
        isDisabled: closeOrderButtonIsDisabled,
    },
});

export const mapOrderDetailsSectionCardXVM = (
    config: OrderDetailsPageConfig,
    order: Order
) => ({
    ...config.sectionCardConfigs.orderDetailsSectionCardConfig,
    infoPanelXVMs: [
        {
            ...config.sectionCardConfigs.orderDetailsSectionCardConfig
                .infoPanelConfig.clientInfoPanel,
            infoListXVM: {
                infoItemXVMs: [
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.contactLabelKey,
                        value: order.client.contact,
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.emailLabelKey,
                        value: order.client.email,
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.phoneLabelKey,
                        value: order.client.phone,
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.addressLabelKey,
                        value: order.client.address,
                    },
                ],
            },
        },
        {
            ...config.sectionCardConfigs.orderDetailsSectionCardConfig
                .infoPanelConfig.summaryInfoPanel,
            infoListXVM: {
                infoItemXVMs: [
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.treatmentLabelKey,
                        value: order.summary.treatment,
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.averageDoseLabelKey,
                        value: {
                            key: config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.averageDoseValueKey,
                            params: {
                                dose: order.summary.averageDose,
                            },
                        },
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.totalSupplyLabelKey,
                        value: {
                            key: config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.totalSupplyValueKey,
                            params: {
                                amount: order.summary.totalSupply,
                            },
                        },
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.orderValueLabelKey,
                        value: {
                            key: config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.orderValueValueKey,
                            params: {
                                price: order.summary.orderValue,
                            },
                        },
                    },
                ],
            },
        },
    ],
});
