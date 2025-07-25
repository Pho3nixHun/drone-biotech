import { OrderDetailsPageConfig } from './order-details-page.model';

export const orderDetailsPageConfig: OrderDetailsPageConfig = {
    headerConfig: {
        idTitleKey: 'OrderDetailsPage.header.idTitle',
        clientTextKey: 'OrderDetailsPage.header.clientText',
        createdDateTextKey: 'OrderDetailsPage.header.createdDateText',
        createdDateValueKey: 'OrderDetailsPage.header.createdDateValue',
        totalAreaTextKey: 'OrderDetailsPage.header.totalAreaText',
        totalAreaValueKey: 'OrderDetailsPage.header.totalAreaValue',
        addMissionButtonXVM: {
            isVisible: true,
            textKey: 'OrderDetailsPage.header.addNewMissionButtonText',
        },
    },
    sectionCardConfigs: {
        orderMissionsSectionCardConfig: {
            cardGroupHeader: {
                idHeaderKey: 'OrderDetailsPage.missions.header.id',
                fieldNameHeaderKey:
                    'OrderDetailsPage.missions.header.fieldName',
                areaHeaderKey: 'OrderDetailsPage.missions.header.area',
                dateHeaderKey: 'OrderDetailsPage.missions.header.date',
                statusHeaderKey: 'OrderDetailsPage.missions.header.status',
                actionsHeaderKey: 'OrderDetailsPage.missions.header.actions',
            },
            cardItem: {
                dateValueKey: 'OrderDetailsPage.missions.card.value.date',
                idLabelKey: 'OrderDetailsPage.missions.card.label.id',
                actionsLabelKey: 'OrderDetailsPage.missions.card.label.actions',
                areaLabelKey: 'OrderDetailsPage.missions.card.label.area',
                dateLabelKey: 'OrderDetailsPage.missions.card.label.date',
                fieldNameLabelKey:
                    'OrderDetailsPage.missions.card.label.fieldName',
                statusLabelKey: 'OrderDetailsPage.missions.card.label.status',
            },
            titleKey: 'OrderDetailsPage.missions.title',
        },
        orderOverviewSectionCardConfig: {
            titleKey: 'OrderDetailsPage.overview.title',
            totalMissionsLabelKey:
                'OrderDetailsPage.overview.totalMissionsLabel',
            totalMissionsValueKey:
                'OrderDetailsPage.overview.totalMissionsValue',
            completedMissionsLabelKey:
                'OrderDetailsPage.overview.completedMissionsLabel',
            completedMissionsValueKey:
                'OrderDetailsPage.overview.completedMissionsValue',
            remainingMissionsLabelKey:
                'OrderDetailsPage.overview.remainingMissionsLabel',
            remainingMissionsValueKey:
                'OrderDetailsPage.overview.remainingMissionsValue',
        },
        messagesSectionCardConfig: {
            buttonTextKey: 'OrderDetailsPage.messages.buttonText',
            titleKey: 'OrderDetailsPage.messages.title',
            dateValueKey: 'OrderDetailsPage.messages.dateValue',
            senderValueKey: 'OrderDetailsPage.messages.senderValue',
        },
        orderActionsSectionCardConfig: {
            type: 'orderActions',
            titleKey: 'OrderDetailsPage.orderActions.title',
            completionTemplateButtonXVM: {
                textKey: 'OrderDetailsPage.orderActions.completion.text',
                link: {
                    href: 'assets/lepke.jpg',
                },
            },
            closeOrderButtonXVM: {
                textKey: 'OrderDetailsPage.orderActions.close.text',
                isDisabled: false,
                confirmationDialogVM: {
                    type: 'confirmationDialogVM',
                    titleKey:
                        'OrderDetailsPage.orderActions.close.dialog.title',
                    confirmTextKey:
                        'OrderDetailsPage.orderActions.close.dialog.confirmText',
                    cancelButtonTextKey:
                        'OrderDetailsPage.orderActions.close.dialog.cancelButtonText',
                    confirmButtonTextKey:
                        'OrderDetailsPage.orderActions.close.dialog.confirmButtonText',
                },
            },
        },
        orderDetailsSectionCardConfig: {
            type: 'orderDetails',
            titleKey: 'OrderDetailsPage.details.title',
            infoPanelConfig: {
                clientInfoPanel: {
                    titleKey: 'OrderDetailsPage.details.client.title',
                    addressLabelKey: 'OrderDetailsPage.details.addressLabel',
                    contactLabelKey: 'OrderDetailsPage.details.contactLabel',
                    emailLabelKey: 'OrderDetailsPage.details.emailLabel',
                    phoneLabelKey: 'OrderDetailsPage.details.phoneLabel',
                },
                summaryInfoPanel: {
                    averageDoseLabelKey:
                        'OrderDetailsPage.details.averageDoseLabel',
                    averageDoseValueKey:
                        'OrderDetailsPage.details.averageDoseValue',
                    orderValueLabelKey:
                        'OrderDetailsPage.details.orderValueLabel',
                    orderValueValueKey:
                        'OrderDetailsPage.details.orderValueValue',
                    titleKey: 'OrderDetailsPage.details.summary.title',
                    totalSupplyLabelKey:
                        'OrderDetailsPage.details.totalSupplyLabel',
                    totalSupplyValueKey:
                        'OrderDetailsPage.details.totalSupplyValue',
                    treatmentLabelKey:
                        'OrderDetailsPage.details.treatmentLabel',
                },
            },
        },
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
    map: {
        title: 'tit',
        compLabel: 'comp',
        compVal: 'compV',
        totalLabel: 'total',
        totalVal: 'totalV',
        remainingVal: 'remainingV',
        remainingLabel: 'remaining',
    },
    orderMissions: {
        id: 'i',
        field: 'fi',
        area: 'ar',
        date: 'dat',
        status: 'stat',
        actions: 'action',
        title: 'tit',
    },
};

export const orderDetailsPageMockConfig: OrderDetailsPageConfig = {
    headerConfig: {
        idTitleKey: enMock.idTitle,
        clientTextKey: enMock.clientText,
        createdDateTextKey: enMock.createdDateText,
        createdDateValueKey: enMock.createdDateValue,
        totalAreaTextKey: enMock.totalAreaText,
        totalAreaValueKey: enMock.totalAreaValue,
        addMissionButtonXVM: {
            isVisible: true,
            textKey: enMock.addNewMissionButtonText,
        },
    },
    sectionCardConfigs: {
        orderMissionsSectionCardConfig: {
            cardItem: {
                dateValueKey: '',
                actionsLabelKey: enMock.orderMissions.actions,
                areaLabelKey: enMock.orderMissions.area,
                dateLabelKey: enMock.orderMissions.date,
                fieldNameLabelKey: enMock.orderMissions.field,
                idLabelKey: enMock.orderMissions.id,
                statusLabelKey: enMock.orderMissions.status,
            },
            cardGroupHeader: {
                idHeaderKey: enMock.orderMissions.id,
                fieldNameHeaderKey: enMock.orderMissions.field,
                areaHeaderKey: enMock.orderMissions.area,
                dateHeaderKey: enMock.orderMissions.date,
                statusHeaderKey: enMock.orderMissions.status,
                actionsHeaderKey: enMock.orderMissions.actions,
            },
            titleKey: enMock.orderMissions.title,
        },
        orderOverviewSectionCardConfig: {
            titleKey: enMock.map.title,
            completedMissionsLabelKey: enMock.map.compLabel,
            completedMissionsValueKey: enMock.map.compVal,
            remainingMissionsLabelKey: enMock.map.remainingLabel,
            remainingMissionsValueKey: enMock.map.remainingVal,
            totalMissionsLabelKey: enMock.map.totalLabel,
            totalMissionsValueKey: enMock.map.totalVal,
        },
        messagesSectionCardConfig: {
            buttonTextKey: enMock.messages.buttonText,
            titleKey: enMock.messages.title,
            dateValueKey: enMock.messages.dateValue,
            senderValueKey: enMock.messages.senderValue,
        },
        orderActionsSectionCardConfig: {
            type: 'orderActions',
            titleKey: enMock.orderActions.title,
            completionTemplateButtonXVM: {
                textKey: enMock.orderActions.completionButtonText,
                link: {
                    href: 'assets/lepke.jpg',
                },
            },
            closeOrderButtonXVM: {
                textKey: enMock.orderActions.closeButtonText,
                isDisabled: false,
                confirmationDialogVM: {
                    type: 'confirmationDialogVM',
                    titleKey: '',
                    confirmTextKey: '',
                    cancelButtonTextKey: '',
                    confirmButtonTextKey: '',
                },
            },
        },
        orderDetailsSectionCardConfig: {
            type: 'orderDetails',
            titleKey: enMock.orderDetails.title,
            infoPanelConfig: {
                clientInfoPanel: {
                    titleKey: enMock.orderDetails.title,
                    addressLabelKey: enMock.orderDetails.addressLabel,
                    contactLabelKey: enMock.orderDetails.contactLabel,
                    emailLabelKey: enMock.orderDetails.emailLabel,
                    phoneLabelKey: enMock.orderDetails.phoneLabel,
                },
                summaryInfoPanel: {
                    averageDoseLabelKey: enMock.orderDetails.averageDoseLabel,
                    averageDoseValueKey: enMock.orderDetails.averageDoseValue,
                    orderValueLabelKey: enMock.orderDetails.orderValueLabel,
                    orderValueValueKey: enMock.orderDetails.orderValueValue,
                    titleKey: enMock.orderDetails.title,
                    totalSupplyLabelKey: enMock.orderDetails.totalSupplyLabel,
                    totalSupplyValueKey: enMock.orderDetails.totalSupplyValue,
                    treatmentLabelKey: enMock.orderDetails.treatmentLabel,
                },
            },
        },
    },
};
