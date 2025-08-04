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
export const mockVMWithoutTargetAreas: OrderDetailsPageVM = {
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
            targetAreaXVMs: null,
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
export const mockVMWithTargetAreas: OrderDetailsPageVM = {
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
            targetAreaXVMs: [
                {
                    coordinates: [{ lat: 0, lng: 0 }],
                    options: {},
                },
            ],
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
