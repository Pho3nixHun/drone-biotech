import { MatIcon } from '@interfaces/mat-icon.enum';
import { OrderDetailsPageVM, Status } from './order-details-page.model';
import { Avatar } from '@components/avatar/avatar.model';

export const orderDetailsPageVM: OrderDetailsPageVM = {
    headerXVM: {
        id: 'B-78901',
        addMissionButtonXVM: {
            textKey: 'OrderDetailsPage.header.addNewMissionButtonText',
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: 'OrderDetailsPage.header.status.active',
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [
                {
                    textKey: 'OrderDetailsPage.header.clientText',
                    valueVM: {
                        type: 'withoutValueKey',
                        value: 'Sarah Johnson',
                    },
                },
                {
                    textKey: 'OrderDetailsPage.header.createdDateText',
                    valueVM: {
                        type: 'withValueKey',

                        key: 'OrderDetailsPage.header.createdDateValue',
                        params: { date: new Date() },
                    },
                },
                {
                    textKey: 'OrderDetailsPage.header.totalAreaText',
                    valueVM: {
                        type: 'withValueKey',
                        key: 'OrderDetailsPage.header.totalAreaValue',
                        params: { area: 134 },
                    },
                },
            ],
        },
        idTitleKey: 'OrderDetailsPage.header.idTitle',
    },
    missionsSectionCardXVM: {
        titleKey: 'OrderDetailsPage.missions.title',
        cardGroupXVM: {
            cardGroupHeaderXVM: [
                'OrderDetailsPage.missions.header.id',
                'OrderDetailsPage.missions.header.fieldName',
                'OrderDetailsPage.missions.header.area',
                'OrderDetailsPage.missions.header.date',
                'OrderDetailsPage.missions.header.status',
                'OrderDetailsPage.missions.header.actions',
            ],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [
                                {
                                    label: 'OrderDetailsPage.missions.card.label.id',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 'B-7890',
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.fieldName',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 'North Field',
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.area',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 45.8,
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.date',
                                    value: {
                                        type: 'withValueKey',
                                        key: 'OrderDetailsPage.missions.card.value.date',
                                        params: { date: new Date() },
                                    },
                                },
                            ],
                        },
                        cardItemActionListXVM: {
                            actionXVMs: [{ matIcon: MatIcon.ARROW_OUTWARD }],
                        },
                    },
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [
                                {
                                    label: 'OrderDetailsPage.missions.card.label.id',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 'B-7891',
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.fieldName',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 'South Field',
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.area',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 78.8,
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.date',
                                    value: {
                                        type: 'withValueKey',
                                        key: 'OrderDetailsPage.missions.card.value.date',
                                        params: { date: new Date() },
                                    },
                                },
                            ],
                        },
                        cardItemActionListXVM: {
                            actionXVMs: [{ matIcon: MatIcon.ARROW_OUTWARD }],
                        },
                    },
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [
                                {
                                    label: 'OrderDetailsPage.missions.card.label.id',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 'B-7892',
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.fieldName',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 'East Meadow Field',
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.area',
                                    value: {
                                        type: 'withoutValueKey',
                                        value: 105.2,
                                    },
                                },
                                {
                                    label: 'OrderDetailsPage.missions.card.label.date',
                                    value: {
                                        type: 'withValueKey',
                                        key: 'OrderDetailsPage.missions.card.value.date',
                                        params: { date: new Date() },
                                    },
                                },
                            ],
                        },
                        cardItemActionListXVM: {
                            actionXVMs: [{ matIcon: MatIcon.ARROW_OUTWARD }],
                        },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: 'OrderDetailsPage.orderActions.title',
        closeOrderButtonXVM: {
            textKey: 'OrderDetailsPage.orderActions.close.text',
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: 'OrderDetailsPage.orderActions.close.dialog.title',
                confirmTextKey:
                    'OrderDetailsPage.orderActions.close.dialog.confirmText',
                cancelButtonTextKey:
                    'OrderDetailsPage.orderActions.close.dialog.cancelButtonText',
                confirmButtonTextKey:
                    'OrderDetailsPage.orderActions.close.dialog.confirmButtonText',
            },
        },
        completionTemplateButtonXVM: {
            textKey: 'OrderDetailsPage.orderActions.completion.text',
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: 'OrderDetailsPage.details.title',
        infoPanelXVMs: [
            {
                titleKey: 'OrderDetailsPage.details.client.title',
                infoListXVM: {
                    infoItemXVMs: [
                        {
                            labelKey: 'OrderDetailsPage.details.contactLabel',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Sarah Johnson',
                            },
                        },
                        {
                            labelKey: 'OrderDetailsPage.details.addressLabel',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: '450 Farm Road, Westbrook County',
                            },
                        },
                        {
                            labelKey: 'OrderDetailsPage.details.emailLabel',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 's.johnson@westbrook-ag.com',
                            },
                        },
                        {
                            labelKey: 'OrderDetailsPage.details.phoneLabel',
                            valueVM: {
                                type: 'withoutValueKey',
                                value: '(555) 789-1234',
                            },
                        },
                    ],
                },
            },
            {
                titleKey: 'OrderDetailsPage.details.summary.title',
                infoListXVM: {
                    infoItemXVMs: [
                        {
                            labelKey: 'OrderDetailsPage.details.treatmentLabel',

                            valueVM: {
                                type: 'withoutValueKey',
                                value: 'Seasonal Pest Control',
                            },
                        },
                        {
                            labelKey:
                                'OrderDetailsPage.details.averageDoseLabel',
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OrderDetailsPage.details.averageDoseValue',
                                params: { dose: 2.5 },
                            },
                        },
                        {
                            labelKey:
                                'OrderDetailsPage.details.totalSupplyLabel',

                            valueVM: {
                                type: 'withValueKey',
                                key: 'OrderDetailsPage.details.totalSupplyValue',
                                params: { amount: 8870 },
                            },
                        },
                        {
                            labelKey:
                                'OrderDetailsPage.details.orderValueLabel',
                            valueVM: {
                                type: 'withValueKey',
                                key: 'OrderDetailsPage.details.orderValueValue',
                                params: { price: 34750 },
                            },
                        },
                    ],
                },
            },
        ],
    },
    overviewSectionCardXVM: {
        titleKey: 'OrderDetailsPage.overview.title',
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [
                {
                    labelKey: 'OrderDetailsPage.overview.totalMissionsLabel',
                    valueVM: {
                        type: 'withValueKey',
                        key: 'OrderDetailsPage.overview.totalMissionsValue',
                        params: { count: 6 },
                    },
                },
                {
                    labelKey:
                        'OrderDetailsPage.overview.completedMissionsLabel',
                    valueVM: {
                        type: 'withValueKey',
                        key: 'OrderDetailsPage.overview.completedMissionsValue',
                        params: { count: 3 },
                    },
                },
                {
                    labelKey:
                        'OrderDetailsPage.overview.remainingMissionsLabel',
                    valueVM: {
                        type: 'withValueKey',
                        key: 'OrderDetailsPage.overview.remainingMissionsValue',
                        params: { count: 3 },
                    },
                },
            ],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [
                {
                    options: {
                        clickable: false,
                        draggable: false,
                        editable: false,
                        fillOpacity: 0.5,
                        strokeColor: 'green',
                        fillColor: 'green',
                    },
                    coordinates: [
                        { lat: 47.277, lng: 21.2345 },
                        { lat: 47.276, lng: 21.2345 },
                        { lat: 47.276, lng: 21.233 },
                        { lat: 47.277, lng: 21.233 },
                    ],
                },
                {
                    options: {
                        clickable: false,
                        draggable: false,
                        editable: false,
                        fillOpacity: 0.5,
                        strokeColor: 'yellow',
                        fillColor: 'yellow',
                    },
                    coordinates: [
                        { lat: 47.277, lng: 21.231 },
                        { lat: 47.278, lng: 21.231 },
                        { lat: 47.278, lng: 21.2325 },
                        { lat: 47.277, lng: 21.2325 },
                    ],
                },
                {
                    options: {
                        clickable: false,
                        draggable: false,
                        editable: false,
                        fillOpacity: 0.5,
                        strokeColor: 'green',
                        fillColor: 'green',
                    },
                    coordinates: [
                        { lat: 47.273, lng: 21.239 },
                        { lat: 47.274, lng: 21.239 },
                        { lat: 47.274, lng: 21.2405 },
                        { lat: 47.273, lng: 21.2405 },
                    ],
                },
                {
                    options: {
                        clickable: false,
                        draggable: false,
                        editable: false,
                        fillOpacity: 0.5,
                        strokeColor: 'yellow',
                        fillColor: 'yellow',
                    },
                    coordinates: [
                        { lat: 47.275, lng: 21.2385 },
                        { lat: 47.274, lng: 21.2385 },
                        { lat: 47.274, lng: 21.237 },
                        { lat: 47.275, lng: 21.237 },
                    ],
                },
                {
                    options: {
                        clickable: false,
                        draggable: false,
                        editable: false,
                        fillOpacity: 0.5,
                        strokeColor: 'yellow',
                        fillColor: 'yellow',
                    },
                    coordinates: [
                        { lat: 47.275, lng: 21.2365 },
                        { lat: 47.275, lng: 21.235 },
                        { lat: 47.276, lng: 21.235 },
                        { lat: 47.276, lng: 21.2365 },
                    ],
                },
                {
                    options: {
                        clickable: false,
                        draggable: false,
                        editable: false,
                        fillOpacity: 0.5,
                        strokeColor: 'green',
                        fillColor: 'green',
                    },
                    coordinates: [
                        { lat: 47.273, lng: 21.2425 },
                        { lat: 47.272, lng: 21.2425 },
                        { lat: 47.272, lng: 21.241 },
                        { lat: 47.273, lng: 21.241 },
                    ],
                },
            ],
        },
    },
    messagesSectionCardXVM: {
        titleKey: 'OrderDetailsPage.messages.title',
        buttonTextKey: 'OrderDetailsPage.messages.buttonText',
        messageItemListXVM: {
            messageItemXVMs: [
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: 'OrderDetailsPage.role.customer',
                    senderName: 'Sarah Johnson',
                    senderValueKey: 'OrderDetailsPage.messages.senderValue',
                    sendingDateValueKey: 'OrderDetailsPage.messages.dateValue',
                    sendingDate: new Date('2025-04-05T09:15:00'),
                    message:
                        'Please update me on the status of the East Meadow mission. Do we need to prepare access to any additional areas?',
                },
                {
                    avatarXVM: {
                        type: 'withImage',
                        altTextKey: 'OW',
                        imageSrc: 'assets/farming.jpg',
                    },
                    roleTextKey: 'OrderDetailsPage.role.office',
                    senderName: 'Office worker',
                    senderValueKey: 'OrderDetailsPage.messages.senderValue',
                    sendingDateValueKey: 'OrderDetailsPage.messages.dateValue',
                    sendingDate: new Date('2025-04-05T11:30:00'),
                    message:
                        "East Meadow mission is scheduled for April 10th. All preparations are on track. We'll need the eastern gate unlocked for equipment access. The West Orchard and Central Vineyard missions were completed successfully.",
                },
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: 'OrderDetailsPage.role.customer',
                    senderName: 'Sarah Johnson',
                    senderValueKey: 'OrderDetailsPage.messages.senderValue',
                    sendingDateValueKey: 'OrderDetailsPage.messages.dateValue',
                    sendingDate: new Date('2025-04-05T13:45:00'),
                    message:
                        "Thank you for the update. I've arranged for the eastern gate to be unlocked on the 10th. Please share the completion reports for the West Orchard and Central Vineyard missions when available.",
                },
                {
                    avatarXVM: {
                        type: 'withImage',
                        altTextKey: 'OW',
                        imageSrc: 'assets/farming.jpg',
                    },
                    roleTextKey: 'OrderDetailsPage.role.office',
                    senderName: 'Office worker',
                    senderValueKey: 'OrderDetailsPage.messages.senderValue',
                    sendingDateValueKey: 'OrderDetailsPage.messages.dateValue',
                    sendingDate: new Date('2025-04-06T09:00:00'),
                    message:
                        'Understood. Road access to Upper Hill will be cleared by April 11th. Please notify if weather conditions affect scheduling.',
                },
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: 'OrderDetailsPage.role.customer',
                    senderName: 'Sarah Johnson',
                    senderValueKey: 'OrderDetailsPage.messages.senderValue',
                    sendingDateValueKey: 'OrderDetailsPage.messages.dateValue',
                    sendingDate: new Date('2025-04-06T08:20:00'),
                    message:
                        'Noted. Reports are being finalized and will be shared by tomorrow. Also, confirming Upper Hill mission planned for April 12—please ensure road access is cleared.',
                },
            ],
        },
    },
};
export const enMock = {
    idTitle: 'id',
    missions: {
        cardItem: {
            item1label: 'label1',
            item2label: 'label2',
            item3label: 'label3',
        },
        cardGroupHeader: {
            header1: '1header',
            header2: '2header',
            header3: '3header',
        },
        title: 'tit',
    },
    addNewMissionButtonText: 'addNewMissionButton',
    statusText: 'status',
    actions: {
        title: 'tit',
        completionButtonText: 'Proof of completion template',
        closeButtonText: 'Close order',
    },
    header: {
        summary1Title: 'sum1',
        summary2Title: 'sum2',
        summary3Title: 'sum3',
    },
    overview: {
        title: 'tit',
        infoItem1Title: 'info1',
        infoItem2Title: 'info2',
        infoItem3Title: 'info3',
    },
    details: {
        title: 'title',
        panel: {
            title1: 'tit1',
            title2: 'tit2',
            title3: 'tit3',
        },
        item: {
            title1: 'tit1',
            title2: 'tit2',
            title3: 'tit3',
        },
    },
    messages: {
        title: 'title',
        buttonText: 'button',
    },
};

export const mockVMDefault: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithEnabledCloseOrderButton: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithDisabledCloseOrderButton: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: true,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithVisibleAddMissionButton: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithNotVisibleAddMissionButton: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: false,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithoutSummaryInHeader: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: false,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithOneSummaryInHeader: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: false,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [
                {
                    textKey: enMock.header.summary1Title,
                    valueVM: {
                        type: 'withoutValueKey',
                        value: 'val',
                    },
                },
            ],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithThreeSummaryInHeader: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: false,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [
                {
                    textKey: enMock.header.summary1Title,
                    valueVM: {
                        type: 'withoutValueKey',
                        value: 'val',
                    },
                },
                {
                    textKey: enMock.header.summary2Title,
                    valueVM: {
                        type: 'withoutValueKey',
                        value: 'val',
                    },
                },
                {
                    textKey: enMock.header.summary3Title,
                    valueVM: {
                        type: 'withoutValueKey',
                        value: 'val',
                    },
                },
            ],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithoutInfoItemInOverview: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneInfoItemInOverview: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [
                {
                    labelKey: enMock.overview.infoItem1Title,
                    valueVM: { type: 'withoutValueKey', value: 1 },
                },
            ],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeInfoItemInOverview: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [
                {
                    labelKey: enMock.overview.infoItem1Title,
                    valueVM: { type: 'withoutValueKey', value: 1 },
                },
                {
                    labelKey: enMock.overview.infoItem2Title,
                    valueVM: { type: 'withoutValueKey', value: 2 },
                },
                {
                    labelKey: enMock.overview.infoItem3Title,
                    valueVM: { type: 'withoutValueKey', value: 3 },
                },
            ],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithoutInfoPanelInDetails: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneInfoPanelInDetails: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [
            {
                titleKey: enMock.details.panel.title1,
                infoListXVM: {
                    infoItemXVMs: [],
                },
            },
        ],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeInfoPanelInDetails: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [
            {
                titleKey: enMock.details.panel.title1,
                infoListXVM: {
                    infoItemXVMs: [],
                },
            },
            {
                titleKey: enMock.details.panel.title2,
                infoListXVM: {
                    infoItemXVMs: [],
                },
            },
            {
                titleKey: enMock.details.panel.title3,
                infoListXVM: {
                    infoItemXVMs: [],
                },
            },
        ],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithoutInfoItemInDetails: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneInfoItemInDetails: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [
            {
                titleKey: enMock.details.title,
                infoListXVM: {
                    infoItemXVMs: [
                        {
                            labelKey: enMock.details.item.title1,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                    ],
                },
            },
        ],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeInfoItemInDetails: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [
            {
                titleKey: enMock.details.title,
                infoListXVM: {
                    infoItemXVMs: [
                        {
                            labelKey: enMock.details.item.title1,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 1,
                            },
                        },
                        {
                            labelKey: enMock.details.item.title2,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 2,
                            },
                        },
                        {
                            labelKey: enMock.details.item.title3,
                            valueVM: {
                                type: 'withoutValueKey',
                                value: 3,
                            },
                        },
                    ],
                },
            },
        ],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};

export const mockVMWithoutMessageItem: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneMessageItem: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: '',
                    senderName: 'Sarah Johnson',
                    senderValueKey: '',
                    sendingDateValueKey: '',
                    sendingDate: new Date('2025-04-05T09:15:00'),
                    message:
                        'Please update me on the status of the East Meadow mission. Do we need to prepare access to any additional areas?',
                },
            ],
        },
    },
};
export const mockVMWithFiveMessageItem: OrderDetailsPageVM = {
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: '',
                    senderName: 'Sarah Johnson',
                    senderValueKey: '',
                    sendingDateValueKey: '',
                    sendingDate: new Date('2025-04-05T09:15:00'),
                    message:
                        'Please update me on the status of the East Meadow mission. Do we need to prepare access to any additional areas?',
                },
                {
                    avatarXVM: {
                        type: 'withImage',
                        altTextKey: 'OW',
                        imageSrc: 'assets/farming.jpg',
                    },
                    roleTextKey: 'OrderDetailsPage.role.office',
                    senderName: 'Office worker',
                    senderValueKey: '',
                    sendingDateValueKey: '',
                    sendingDate: new Date('2025-04-05T11:30:00'),
                    message:
                        "East Meadow mission is scheduled for April 10th. All preparations are on track. We'll need the eastern gate unlocked for equipment access. The West Orchard and Central Vineyard missions were completed successfully.",
                },
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: '',
                    senderName: 'Sarah Johnson',
                    senderValueKey: '',
                    sendingDateValueKey: '',
                    sendingDate: new Date('2025-04-05T13:45:00'),
                    message:
                        "Thank you for the update. I've arranged for the eastern gate to be unlocked on the 10th. Please share the completion reports for the West Orchard and Central Vineyard missions when available.",
                },
                {
                    avatarXVM: {
                        type: 'withImage',
                        altTextKey: 'OW',
                        imageSrc: 'assets/farming.jpg',
                    },
                    roleTextKey: 'OrderDetailsPage.role.office',
                    senderName: 'Office worker',
                    senderValueKey: '',
                    sendingDateValueKey: '',
                    sendingDate: new Date('2025-04-06T09:00:00'),
                    message:
                        'Understood. Road access to Upper Hill will be cleared by April 11th. Please notify if weather conditions affect scheduling.',
                },
                {
                    avatarXVM: {
                        type: 'withInitials',
                        status: Avatar.BLUE,
                        initials: 'SJ',
                    },
                    roleTextKey: '',
                    senderName: 'Sarah Johnson',
                    senderValueKey: '',
                    sendingDateValueKey: '',
                    sendingDate: new Date('2025-04-06T08:20:00'),
                    message:
                        'Noted. Reports are being finalized and will be shared by tomorrow. Also, confirming Upper Hill mission planned for April 12—please ensure road access is cleared.',
                },
            ],
        },
    },
};

export const mockVMWithoutCardGroupHeader: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneCardGroupHeader: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [enMock.missions.cardGroupHeader.header1],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeCardGroupHeader: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [
                enMock.missions.cardGroupHeader.header1,
                enMock.missions.cardGroupHeader.header2,
                enMock.missions.cardGroupHeader.header3,
            ],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithoutCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: { keyValueXVMs: [] },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: { keyValueXVMs: [] },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                    {
                        cardItemContentXVM: { keyValueXVMs: [] },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                    {
                        cardItemContentXVM: { keyValueXVMs: [] },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithoutKeyValueInCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [],
                        },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneKeyValueInCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [
                                {
                                    label: enMock.missions.cardItem.item1label,
                                    value: {
                                        type: 'withoutValueKey',
                                        value: '',
                                    },
                                },
                            ],
                        },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeKeyValueInCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [
                                {
                                    label: enMock.missions.cardItem.item1label,
                                    value: {
                                        type: 'withoutValueKey',
                                        value: '',
                                    },
                                },
                                {
                                    label: enMock.missions.cardItem.item2label,
                                    value: {
                                        type: 'withoutValueKey',
                                        value: '',
                                    },
                                },
                                {
                                    label: enMock.missions.cardItem.item3label,
                                    value: {
                                        type: 'withoutValueKey',
                                        value: '',
                                    },
                                },
                            ],
                        },
                        cardItemActionListXVM: { actionXVMs: [] },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithoutActionInCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [],
                        },
                        cardItemActionListXVM: {
                            actionXVMs: [],
                        },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithOneActionInCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [],
                        },
                        cardItemActionListXVM: {
                            actionXVMs: [{ matIcon: MatIcon.ADD }],
                        },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
export const mockVMWithThreeActionInCardItem: OrderDetailsPageVM = {
    headerXVM: {
        id: 'id',
        addMissionButtonXVM: {
            textKey: enMock.addNewMissionButtonText,
            isVisible: true,
        },
        statusXVM: {
            statusTextKey: enMock.statusText,
            status: Status.ACTIVE,
        },
        summaryListXVM: {
            summaryXVMs: [],
        },
        idTitleKey: enMock.idTitle,
    },
    missionsSectionCardXVM: {
        titleKey: enMock.missions.title,
        cardGroupXVM: {
            cardGroupHeaderXVM: [],
            cardItemListXVM: {
                cardItemXVMs: [
                    {
                        cardItemContentXVM: {
                            keyValueXVMs: [],
                        },
                        cardItemActionListXVM: {
                            actionXVMs: [
                                { matIcon: MatIcon.ADD },
                                { matIcon: MatIcon.ADD },
                                { matIcon: MatIcon.ADD },
                            ],
                        },
                    },
                ],
            },
        },
    },
    actionsSectionCardXVM: {
        titleKey: enMock.actions.title,
        closeOrderButtonXVM: {
            textKey: enMock.actions.closeButtonText,
            isDisabled: false,
            confirmationDialogVM: {
                type: 'confirmationDialogVM',
                titleKey: '',
                confirmTextKey: '',
                cancelButtonTextKey: '',
                confirmButtonTextKey: '',
            },
        },
        completionTemplateButtonXVM: {
            textKey: enMock.actions.completionButtonText,
            link: {
                href: 'assets/lepke.jpg',
            },
        },
    },

    detailsSectionCardXVM: {
        titleKey: enMock.details.title,
        infoPanelXVMs: [],
    },
    overviewSectionCardXVM: {
        titleKey: enMock.overview.title,
        missionInfoItemListXVM: {
            missionInfoItemXVMs: [],
        },
        googleMapXVM: {
            center: { lat: 47.277, lng: 21.2345 },
            mapOptions: {
                mapTypeId: 'roadmap',
                disableDoubleClickZoom: true,
                clickableIcons: false,
                mapId: 'DEMO_MAP_ID',
                zoom: 14,
                streetViewControl: false,
            },
            targetAreaXVMs: [],
        },
    },
    messagesSectionCardXVM: {
        titleKey: enMock.messages.title,
        buttonTextKey: enMock.messages.buttonText,
        messageItemListXVM: {
            messageItemXVMs: [],
        },
    },
};
