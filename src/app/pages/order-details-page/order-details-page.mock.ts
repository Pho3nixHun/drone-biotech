import { MatIcon } from '@interfaces/mat-icon.enum';
import { OrderDetailsPageVM } from './order-details-page.model';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { OrdersRouteSegment } from '../orders-new-page/orders-route-segment';

export const orderDetailsPageVM: OrderDetailsPageVM = {
    user: null,
    status: 'new',
    missionsFrameXVM: {
        titleKey: 'OrderDetailsPage.missions.title',
        missionCardListXVM: {
            missionCardXVMs: [
                {
                    cardFooterXVM: {
                        buttonXVM: {
                            routerLink: ['/'],
                            variant: 'ghost',
                            secondary: true,
                            textKey: 'OrderDetailsPage.missions.card.edit.text',
                        },
                    },
                    cardBodyXVM: {
                        title: 'A-12345',
                        titleKey: 'OrderDetailsPage.missions.card.title',
                        keyValueXVMs: [
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.name.text',
                                },
                                valueVM: {
                                    type: 'withoutKey',
                                    value: 'North Field',
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.text',
                                },
                                valueVM: {
                                    key: 'OrderDetailsPage.missions.card.area.value',
                                    type: 'withKey',
                                    params: { area: 45.8 },
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.scheduledDate.text',
                                },
                                valueVM: {
                                    type: 'withKey',
                                    key: 'OrderDetailsPage.missions.card.area.scheduledDate.value',
                                    params: { date: new Date(122436234) },
                                },
                            },
                        ],
                        status: 'completed',
                        statusBadgeXVM: { shape: 'rounded' },
                    },
                    gmpMapXVM: {
                        bounds: null,
                        entryPoint: { lat: 47.2285, lng: 21.176 },
                        coordinates: [
                            { lat: 47.2466806, lng: 21.1876058 },
                            { lat: 47.2466806, lng: 21.1936058 },
                            { lat: 47.2406806, lng: 21.1936058 },
                            { lat: 47.2406806, lng: 21.1876058 },
                        ],
                    },
                },
                {
                    cardFooterXVM: {
                        buttonXVM: {
                            routerLink: ['/'],
                            variant: 'ghost',
                            secondary: true,
                            textKey: 'OrderDetailsPage.missions.card.edit.text',
                        },
                    },
                    cardBodyXVM: {
                        title: 'A-12346',
                        titleKey: 'OrderDetailsPage.missions.card.title',
                        keyValueXVMs: [
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.name.text',
                                },
                                valueVM: {
                                    type: 'withoutKey',
                                    value: 'South Field',
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.text',
                                },
                                valueVM: {
                                    key: 'OrderDetailsPage.missions.card.area.value',
                                    type: 'withKey',
                                    params: { area: 62.1 },
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.scheduledDate.text',
                                },
                                valueVM: {
                                    type: 'withKey',
                                    key: 'OrderDetailsPage.missions.card.area.scheduledDate.value',
                                    params: { date: new Date(12240234) },
                                },
                            },
                        ],
                        status: 'preparing',
                        statusBadgeXVM: { shape: 'rounded' },
                    },
                    gmpMapXVM: {
                        bounds: null,
                        entryPoint: { lat: 47.23, lng: 21.205 },
                        coordinates: [
                            { lat: 47.2406806, lng: 21.1876058 },
                            { lat: 47.2406806, lng: 21.1936058 },
                            { lat: 47.2346806, lng: 21.1936058 },
                            { lat: 47.2346806, lng: 21.1876058 },
                        ],
                    },
                },
                {
                    cardFooterXVM: {
                        buttonXVM: {
                            routerLink: ['/'],
                            variant: 'ghost',
                            secondary: true,
                            textKey: 'OrderDetailsPage.missions.card.edit.text',
                        },
                    },
                    cardBodyXVM: {
                        title: 'A-12347',
                        titleKey: 'OrderDetailsPage.missions.card.title',
                        keyValueXVMs: [
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.name.text',
                                },
                                valueVM: {
                                    type: 'withoutKey',
                                    value: 'East Meadow',
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.text',
                                },
                                valueVM: {
                                    key: 'OrderDetailsPage.missions.card.area.value',
                                    type: 'withKey',
                                    params: { area: 80.1 },
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.scheduledDate.text',
                                },
                                valueVM: {
                                    type: 'withKey',
                                    key: 'OrderDetailsPage.missions.card.area.scheduledDate.value',
                                    params: { date: new Date(122214234) },
                                },
                            },
                        ],
                        status: 'scheduled',
                        statusBadgeXVM: { shape: 'rounded' },
                    },
                    gmpMapXVM: {
                        bounds: null,
                        entryPoint: { lat: 47.255, lng: 21.205 },
                        coordinates: [
                            { lat: 47.2406806, lng: 21.1796058 },
                            { lat: 47.2406806, lng: 21.1856058 },
                            { lat: 47.2346806, lng: 21.1856058 },
                            { lat: 47.2346806, lng: 21.1796058 },
                        ],
                    },
                },
                {
                    cardFooterXVM: {
                        buttonXVM: {
                            routerLink: ['/'],
                            variant: 'ghost',
                            secondary: true,
                            textKey: 'OrderDetailsPage.missions.card.edit.text',
                        },
                    },
                    cardBodyXVM: {
                        title: 'A-12348',
                        titleKey: 'OrderDetailsPage.missions.card.title',
                        keyValueXVMs: [
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.name.text',
                                },
                                valueVM: {
                                    type: 'withoutKey',
                                    value: 'West Orchard',
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.text',
                                },
                                valueVM: {
                                    key: 'OrderDetailsPage.missions.card.area.value',
                                    type: 'withKey',
                                    params: { area: 42.9 },
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.scheduledDate.text',
                                },
                                valueVM: {
                                    type: 'withKey',
                                    key: 'OrderDetailsPage.missions.card.area.scheduledDate.value',
                                    params: { date: new Date(121224234) },
                                },
                            },
                        ],
                        status: 'completed',
                        statusBadgeXVM: { shape: 'rounded' },
                    },
                    gmpMapXVM: {
                        bounds: null,
                        entryPoint: { lat: 47.2555, lng: 21.165 },
                        coordinates: [
                            { lat: 47.2466806, lng: 21.1796058 },
                            { lat: 47.2466806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1796058 },
                        ],
                    },
                },
                {
                    cardFooterXVM: {
                        buttonXVM: {
                            routerLink: ['/'],
                            variant: 'ghost',
                            secondary: true,
                            textKey: 'OrderDetailsPage.missions.card.edit.text',
                        },
                    },
                    cardBodyXVM: {
                        title: 'A-12349',
                        titleKey: 'OrderDetailsPage.missions.card.title',
                        keyValueXVMs: [
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.name.text',
                                },
                                valueVM: {
                                    type: 'withoutKey',
                                    value: 'Central Vineyard',
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.text',
                                },
                                valueVM: {
                                    key: 'OrderDetailsPage.missions.card.area.value',
                                    type: 'withKey',
                                    params: { area: 61 },
                                },
                            },
                            {
                                orientation: 'vertical',
                                keyXVM: {
                                    textKey:
                                        'OrderDetailsPage.missions.card.area.scheduledDate.text',
                                },
                                valueVM: {
                                    type: 'withKey',
                                    key: 'OrderDetailsPage.missions.card.area.scheduledDate.value',
                                    params: { date: new Date(122423214) },
                                },
                            },
                        ],
                        status: 'preparing',
                        statusBadgeXVM: { shape: 'rounded' },
                    },
                    gmpMapXVM: {
                        bounds: null,
                        entryPoint: { lat: 47.24, lng: 21.21 },
                        coordinates: [
                            { lat: 47.2466806, lng: 21.1796058 },
                            { lat: 47.2466806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1796058 },
                        ],
                    },
                },
            ],
        },
    },
    headerXVM: {
        orderId: 'permetezés',
        titleKey: 'OrderDetailsPage.title',
        addNewMissionEnabled: false,
        addNewMissionsButtonXVM: {
            textKey: 'OrderDetailsPage.header.addNewMissionButtonText',
            routerLink: ['/', AppRouteSegment.ORDERS, OrdersRouteSegment.NEW],
            variant: 'ghost',
        },
        statusBadgeXVM: {
            shape: 'rounded',
        },
    },
    actionsFrameXVM: {
        completionTemplateButtonHidden: false,
        closeOrderButtonHidden: false,
        titleKey: 'OrderDetailsPage.actions.title',
        completionTemplateButtonXVM: {
            variant: 'fill',
            secondary: true,
            textKey: 'OrderDetailsPage.actions.completion.text',
            link: {
                href: 'assets/lepke.jpg',
            },
        },
        closeOrderButtonXVM: {
            textKey: 'OrderDetailsPage.actions.close.text',
            secondary: true,
            variant: 'fill',
        },
        confirmationDialogVM: {
            closeButtonXVM: {
                icon: MatIcon.CLOSE,
                variant: 'ghost',
                secondary: true,
            },
            titleKey: 'OrderDetailsPage.actions.close.dialog.title',
            confirmTextKey: 'OrderDetailsPage.actions.close.dialog.confirmText',
            cancelButtonXVM: {
                textKey:
                    'OrderDetailsPage.actions.close.dialog.cancelButtonText',
                secondary: true,
                variant: 'fill',
            },
            confirmButtonXVM: {
                textKey:
                    'OrderDetailsPage.actions.close.dialog.confirmButtonText',
                variant: 'fill',
            },
        },
    },
    chatFrameXVM: {
        submitMessageButtonXVM: {
            variant: 'fill',
            icon: MatIcon.SEND,
        },
        messageInputTextXVM: {
            id: 'message',
            autocomplete: 'off',
            isLabelHidden: true,
            labelKey: 'OrderDetailsPage.chat.input.label',
            placeholderKey: 'OrderDetailsPage.chat.input.placeholder',
            readonly: false,
            type: 'text',
        },
        titleKey: 'OrderDetailsPage.chat.title',
        messageXVMs: [
            {
                type: 'receiver',
                role: 'office',
                name: 'Operations Manager',
                dateTimeValueKey: 'OrderDetailsPage.chat.dateTimeValue',
                nameXRoleValueKey: 'OrderDetailsPage.chat.nameXRoleValue',
                dateTime: new Date('2025-10-06T09:30:00'),
                message:
                    'Good morning! I just received the latest shipment report. Everything looks on track.',
                avatarVM: {
                    type: 'withInitials',
                    initials: 'OM',
                },
            },
            {
                type: 'receiver',
                role: 'pilot',
                name: 'Ben Ford',
                dateTimeValueKey: 'OrderDetailsPage.chat.dateTimeValue',
                nameXRoleValueKey: 'OrderDetailsPage.chat.nameXRoleValue',
                dateTime: new Date('2025-10-06T09:35:00'),
                message:
                    'Thanks for the update. I’ll be heading out to the field in 10 minutes for the morning check.',
                avatarVM: {
                    type: 'withImage',
                    imageSrc: 'assets/farming.jpg',
                    altTextKey: 'Ben Ford',
                },
            },
            {
                type: 'receiver',
                role: 'office',
                name: 'Operations Manager',
                dateTimeValueKey: 'OrderDetailsPage.chat.dateTimeValue',
                nameXRoleValueKey: 'OrderDetailsPage.chat.nameXRoleValue',
                dateTime: new Date('2025-10-06T09:40:00'),
                message:
                    'Perfect. Please make sure to inspect the new irrigation system while you’re there.',
                avatarVM: {
                    type: 'withInitials',
                    initials: 'OM',
                },
            },
            {
                type: 'sender',
                role: 'customer',
                name: 'Calvin Jackson',
                dateTimeValueKey: 'OrderDetailsPage.chat.dateTimeValue',
                nameXRoleValueKey: 'OrderDetailsPage.chat.nameXRoleValue',
                dateTime: new Date('2025-10-06T10:00:00'),
                message:
                    'Hi team, I just wanted to check on the status of my last order. Any updates?',
                avatarVM: {
                    type: 'withImage',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'Calvin Jackson',
                },
            },
            {
                type: 'receiver',
                role: 'office',
                name: 'Field Manager',
                dateTimeValueKey: 'OrderDetailsPage.chat.dateTimeValue',
                nameXRoleValueKey: 'OrderDetailsPage.chat.nameXRoleValue',
                dateTime: new Date('2025-10-06T10:05:00'),
                message:
                    'Hello Calvin, your order is being processed and should be shipped by this afternoon.',
                avatarVM: {
                    type: 'withInitials',
                    initials: 'FM',
                },
            },
            {
                type: 'sender',
                role: 'customer',
                name: 'Calvin Jackson',
                dateTimeValueKey: 'OrderDetailsPage.chat.dateTimeValue',
                nameXRoleValueKey: 'OrderDetailsPage.chat.nameXRoleValue',
                dateTime: new Date('2025-10-06T11:00:00'),
                message:
                    'Great, thanks for the update! Looking forward to receiving it.',
                avatarVM: {
                    type: 'withImage',
                    imageSrc: 'assets/lepke.jpg',
                    altTextKey: 'Calvin Jackson',
                },
            },
        ],
    },
};

export const enMock = {
    idTitle: 'id',
    clientText: 'client',
    createdDateText: 'createdDate',
    createdDateValue: 'createdDateV',
    totalAreaText: 'totalArea',
    totalAreaValue: 'totalAreaV',
    addNewMissionButtonText: 'addNewMissionButton',

    orderActions: {
        title: 'tit',
        completionButtonText: 'Proof of completion template',
        closeButtonText: 'Close order',
    },
    orderDetails: {
        title: 'title',
        addressLabel: 'address',
        contactLabel: 'contact',
        emailLabel: 'email',
        phoneLabel: 'phone',
        averageDoseLabel: 'dose',
        averageDoseValue: 'avg',
        orderValueLabel: 'orderL',
        orderValueValue: 'orderV',
        totalSupplyLabel: 'supplyL',
        totalSupplyValue: 'supplyV',
        treatmentLabel: 'treatment',
    },
    messages: {
        title: 'title',
        dateValue: 'date',
        buttonText: 'button',
        senderValue: 'send',
    },
};
