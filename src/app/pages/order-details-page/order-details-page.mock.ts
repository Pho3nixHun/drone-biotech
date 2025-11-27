import { MatIcon } from '@interfaces/mat-icon.enum';
import { OrderDetailsPageVM } from './order-details-page.model';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { OrdersRouteSegment } from '../orders-new-page/orders-route-segment';
import { PolygonColor } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
export const orderDetailsPageVM: OrderDetailsPageVM = {
    user: null,
    status: 'new',
    detailsFrameXVM: {
        titleKey: 'OrderDetailsPage.details.title',
        clientTitleKey: 'OrderDetailsPage.details.client.title',
        detailsTitleKey: 'OrderDetailsPage.details.summary.title',
        clientSummaries: [
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.client.contactText',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: 'Sarah Johnson',
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.client.emailText',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: 's.johnson@westbrook-ag.com',
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.client.phoneText',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: '(555) 789-1234',
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.client.addressText',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: '450 Farm Road, Westbrook County',
                },
            },
        ],
        detailsSummaries: [
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.summary.treatmentText',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: 'Seasonal Pest Control',
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.summary.averageDoseText',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.details.summary.averageDoseValue',
                    params: { dose: 25.5 },
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.summary.totalSupplyText',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.details.summary.totalSupplyValue',
                    params: { amount: 868.75 },
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.details.summary.priceText',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.details.summary.priceValue',
                    params: { price: 34750 },
                },
            },
        ],
    },
    overviewFrameXVM: {
        titleKey: 'OrderDetailsPage.overview.title',

        summaries: [
            {
                keyXVM: { textKey: 'OrderDetailsPage.overview.totalText' },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.overview.missionValue',
                    params: { count: 5 },
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.overview.completedText',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.overview.missionValue',
                    params: { count: 2 },
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.overview.remainingText',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.overview.missionValue',
                    params: { count: 3 },
                },
            },
        ],

        gmpMapXVM: {
            bounds: null,
            missions: [
                {
                    colors: {
                        fillColor: PolygonColor.GREEN,
                        strokeColor: PolygonColor.GREEN,
                    },
                    coordinates: [
                        { lat: 47.27512, lng: 21.23584 },
                        { lat: 47.27381, lng: 21.23997 },
                        { lat: 47.27245, lng: 21.23863 },
                        { lat: 47.27288, lng: 21.23392 },
                        { lat: 47.27465, lng: 21.23284 },
                    ],
                },
                {
                    colors: {
                        fillColor: PolygonColor.BLUE,
                        strokeColor: PolygonColor.BLUE,
                    },
                    coordinates: [
                        { lat: 47.26432, lng: 21.21148 },
                        { lat: 47.2631, lng: 21.21394 },
                        { lat: 47.26184, lng: 21.2127 },
                        { lat: 47.26154, lng: 21.20933 },
                        { lat: 47.26322, lng: 21.20877 },
                    ],
                },
                {
                    colors: {
                        fillColor: PolygonColor.BLUE,
                        strokeColor: PolygonColor.BLUE,
                    },
                    coordinates: [
                        { lat: 47.24792, lng: 21.24458 },
                        { lat: 47.24701, lng: 21.24726 },
                        { lat: 47.24554, lng: 21.24661 },
                        { lat: 47.24531, lng: 21.24328 },
                        { lat: 47.2468, lng: 21.24257 },
                        { lat: 47.24765, lng: 21.2438 },
                    ],
                },
                {
                    colors: {
                        fillColor: PolygonColor.GREEN,
                        strokeColor: PolygonColor.GREEN,
                    },
                    coordinates: [
                        { lat: 47.25784, lng: 21.22542 },
                        { lat: 47.25683, lng: 21.22857 },
                        { lat: 47.25512, lng: 21.22794 },
                        { lat: 47.25521, lng: 21.22466 },
                        { lat: 47.25642, lng: 21.22398 },
                    ],
                },
            ],
        },
    },
    missionsFrameXVM: {
        titleKey: 'OrderDetailsPage.missions.title',
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
                },
                gmpMapXVM: {
                    polygon: {
                        colors: {
                            fillColor: PolygonColor.BLUE,
                            strokeColor: PolygonColor.BLUE,
                        },
                        coordinates: [
                            { lat: 47.2466806, lng: 21.1876058 },
                            { lat: 47.2466806, lng: 21.1936058 },
                            { lat: 47.2406806, lng: 21.1936058 },
                            { lat: 47.2406806, lng: 21.1876058 },
                        ],
                    },
                    bounds: null,
                    entryPoint: {
                        coordinates: { lat: 47.2285, lng: 21.176 },
                    },
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
                },
                gmpMapXVM: {
                    polygon: {
                        colors: {
                            fillColor: PolygonColor.BLUE,
                            strokeColor: PolygonColor.BLUE,
                        },
                        coordinates: [
                            { lat: 47.2406806, lng: 21.1876058 },
                            { lat: 47.2406806, lng: 21.1936058 },
                            { lat: 47.2346806, lng: 21.1936058 },
                            { lat: 47.2346806, lng: 21.1876058 },
                        ],
                    },
                    bounds: null,
                    entryPoint: {
                        coordinates: { lat: 47.23, lng: 21.205 },
                    },
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
                },
                gmpMapXVM: {
                    polygon: {
                        colors: {
                            fillColor: PolygonColor.BLUE,
                            strokeColor: PolygonColor.BLUE,
                        },
                        coordinates: [
                            { lat: 47.2406806, lng: 21.1796058 },
                            { lat: 47.2406806, lng: 21.1856058 },
                            { lat: 47.2346806, lng: 21.1856058 },
                            { lat: 47.2346806, lng: 21.1796058 },
                        ],
                    },
                    bounds: null,
                    entryPoint: {
                        coordinates: { lat: 47.255, lng: 21.205 },
                    },
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
                },
                gmpMapXVM: {
                    polygon: {
                        colors: {
                            fillColor: PolygonColor.BLUE,
                            strokeColor: PolygonColor.BLUE,
                        },
                        coordinates: [
                            { lat: 47.2466806, lng: 21.1796058 },
                            { lat: 47.2466806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1796058 },
                        ],
                    },
                    bounds: null,
                    entryPoint: {
                        coordinates: { lat: 47.2555, lng: 21.165 },
                    },
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
                },
                gmpMapXVM: {
                    bounds: null,
                    entryPoint: { coordinates: { lat: 47.24, lng: 21.21 } },
                    polygon: {
                        colors: {
                            fillColor: PolygonColor.BLUE,
                            strokeColor: PolygonColor.BLUE,
                        },
                        coordinates: [
                            { lat: 47.2466806, lng: 21.1796058 },
                            { lat: 47.2466806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1856058 },
                            { lat: 47.2406806, lng: 21.1796058 },
                        ],
                    },
                },
            },
        ],
    },
    headerXVM: {
        orderId: 'permetezés',
        titleKey: 'OrderDetailsPage.title',
        addNewMissionEnabled: false,
        addNewMissionsButtonXVM: {
            textKey: 'OrderDetailsPage.header.addNewMissionButtonText',
            routerLink: ['/', AppRouteSegment.ORDERS, OrdersRouteSegment.NEW],
            variant: 'fill',
        },
        summaries: [
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.header.clientTextKey',
                },
                valueVM: {
                    type: 'withoutKey',
                    value: 'Westbrook Agricultural Holdings',
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.header.creationDateTextKey',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.header.creationDateValueKey',
                    params: { date: new Date('2025-09-15') },
                },
            },
            {
                keyXVM: {
                    textKey: 'OrderDetailsPage.header.totalAreaTextKey',
                },
                valueVM: {
                    type: 'withKey',
                    key: 'OrderDetailsPage.header.totalAreaValueKey',
                    params: { area: 347.5 },
                },
            },
        ],
    },
    actionsFrameXVM: {
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
        closeOrderDialogVM: {
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
                variant: 'ghost',
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
                name: 'Field Manager Field Manager Field Manager Field Manager',
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
