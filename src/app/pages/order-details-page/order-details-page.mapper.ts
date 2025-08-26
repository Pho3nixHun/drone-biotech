import { mapAvatarXVM } from '@components/avatar/avatar.model';
import {
    HeaderXVM,
    MessageItemXVM,
    MessagesSectionCardXVM,
    OrderActionsSectionCardXVM,
    OrderDetailsPageConfig,
    OrderDetailsSectionCardXVM,
    OrderStatus,
    Role,
} from './order-details-page.model';
import { Message, Order } from '@services/order/order.service.model';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { OrdersRouteSegment } from '../orders-new-page/orders-route-segment';
import { MatIcon } from '@interfaces/mat-icon.enum';

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
    status: OrderStatus
): HeaderXVM => ({
    ...config.headerConfig,
    addNewMissionsButtonVM: {
        type: 'withText',
        secondary: false,
        variant: 'ghost',
        textKey: 'Add new missions',
        routerLink: ['/', AppRouteSegment.ORDERS, OrdersRouteSegment.NEW],
    },
    id: order.id,
    statusXVM: {
        styles: mapOrderStatusToStatusToCSSStyles(status),
        statusTextKey: mapOrderStatusToTranslocoTextKey(status),
    },
    summaryListXVM: {
        summaryXVMs: [
            {
                textKey: config.headerConfig.clientTextKey,
                value: { type: 'withoutValueKey', value: order.client.client },
            },
            {
                textKey: config.headerConfig.createdDateTextKey,
                value: {
                    type: 'withValueKey',

                    key: config.headerConfig.createdDateValueKey,
                    params: { date: order.creationDate },
                },
            },
            {
                textKey: config.headerConfig.totalAreaTextKey,
                value: {
                    type: 'withValueKey',
                    key: config.headerConfig.totalAreaValueKey,
                    params: { area: order.totalAreaInHa },
                },
            },
        ],
    },
});

export const mapOrderActionsSectionCardXVM = (
    config: OrderDetailsPageConfig
): OrderActionsSectionCardXVM => ({
    ...config.sectionCardConfigs.orderActionsSectionCardConfig,
    closeOrderButtonVM: {
        ...config.sectionCardConfigs.orderActionsSectionCardConfig
            .closeOrderButtonVM,
    },
});

export const mapOrderDetailsSectionCardXVM = (
    config: OrderDetailsPageConfig,
    order: Order
): OrderDetailsSectionCardXVM => ({
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
                        value: {
                            type: 'withoutValueKey',
                            value: order.client.contact,
                        },
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.emailLabelKey,
                        value: {
                            type: 'withoutValueKey',
                            value: order.client.email,
                        },
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.phoneLabelKey,
                        value: {
                            type: 'withoutValueKey',
                            value: order.client.phone,
                        },
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .clientInfoPanel.addressLabelKey,

                        value: {
                            type: 'withoutValueKey',
                            value: order.client.address,
                        },
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
                        value: {
                            type: 'withoutValueKey',
                            value: order.summary.treatment,
                        },
                    },
                    {
                        labelKey:
                            config.sectionCardConfigs
                                .orderDetailsSectionCardConfig.infoPanelConfig
                                .summaryInfoPanel.averageDoseLabelKey,
                        value: {
                            type: 'withValueKey',
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
                            type: 'withValueKey',
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
                            type: 'withValueKey',
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

export const mapMessagesSectionCardXVM = (
    config: OrderDetailsPageConfig,
    messages: Message[]
): MessagesSectionCardXVM => ({
    type: 'messages',
    submitButtonVM: {
        type: 'withIcon',
        variant: 'ghost',
        icon: MatIcon.SEND,
    },
    titleKey: config.sectionCardConfigs.messagesSectionCardConfig.titleKey,
    messageItemListXVM: {
        messageItemXVMs: messages
            .map((message) => mapMessageToMessageItemXVM(config, message))
            .sort(
                (a, b) =>
                    b.sendingDate.getSeconds() - a.sendingDate.getSeconds()
            ),
    },
});

const mapMessageToMessageItemXVM = (
    config: OrderDetailsPageConfig,
    message: Message
): MessageItemXVM => ({
    ...message,
    avatarXVM: mapAvatarXVM(message.sender),
    roleTextKey: mapRoleTranslocoTextKey(message.sender.role),
    senderName: message.sender.name,
    senderValueKey:
        config.sectionCardConfigs.messagesSectionCardConfig.senderValueKey,
    sendingDateValueKey:
        config.sectionCardConfigs.messagesSectionCardConfig.dateValueKey,
});
