import { MatIcon } from '@interfaces/mat-icon.enum';
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
            type: 'withText',
            secondary: false,
            variant: 'ghost',
            textKey: 'OrderDetailsPage.header.addNewMissionButtonText',
        },
    },
    sectionCardConfigs: {
        messagesSectionCardConfig: {
            buttonTextKey: 'OrderDetailsPage.messages.buttonText',
            titleKey: 'OrderDetailsPage.messages.title',
            dateValueKey: 'OrderDetailsPage.messages.dateValue',
            senderValueKey: 'OrderDetailsPage.messages.senderValue',
        },
        orderActionsSectionCardConfig: {
            type: 'orderActions',
            titleKey: 'OrderDetailsPage.orderActions.title',
            completionTemplateButtonVM: {
                type: 'withText',
                variant: 'fill',
                secondary: true,
                textKey: 'OrderDetailsPage.orderActions.completion.text',
                link: {
                    href: 'assets/lepke.jpg',
                },
            },
            closeOrderButtonVM: {
                type: 'withText',
                textKey: 'OrderDetailsPage.orderActions.close.text',
                secondary: true,
                variant: 'fill',
                confirmationDialogVM: {
                    closeButtonVM: {
                        type: 'withIcon',
                        icon: MatIcon.CLOSE,
                        secondary: false,
                        variant: 'ghost',
                    },
                    type: 'confirmationDialogVM',
                    titleKey:
                        'OrderDetailsPage.orderActions.close.dialog.title',
                    confirmTextKey:
                        'OrderDetailsPage.orderActions.close.dialog.confirmText',
                    cancelButtonVM: {
                        type: 'withText',
                        textKey:
                            'OrderDetailsPage.orderActions.close.dialog.cancelButtonText',
                        secondary: false,
                        variant: 'fill',
                    },
                    confirmButtonVM: {
                        type: 'withText',
                        textKey:
                            'OrderDetailsPage.orderActions.close.dialog.confirmButtonText',
                        secondary: false,
                        variant: 'fill',
                    },
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
            type: 'withText',
            secondary: false,
            variant: 'fill',
            textKey: enMock.addNewMissionButtonText,
        },
    },
    sectionCardConfigs: {
        messagesSectionCardConfig: {
            buttonTextKey: enMock.messages.buttonText,
            titleKey: enMock.messages.title,
            dateValueKey: enMock.messages.dateValue,
            senderValueKey: enMock.messages.senderValue,
        },
        orderActionsSectionCardConfig: {
            type: 'orderActions',
            titleKey: enMock.orderActions.title,
            completionTemplateButtonVM: {
                type: 'withText',
                variant: 'fill',
                secondary: true,
                textKey: enMock.orderActions.completionButtonText,
                link: {
                    href: 'assets/lepke.jpg',
                },
            },
            closeOrderButtonVM: {
                textKey: enMock.orderActions.closeButtonText,
                type: 'withText',
                secondary: true,
                variant: 'ghost',
                confirmationDialogVM: {
                    closeButtonVM: {
                        icon: MatIcon.ADD,
                        secondary: false,
                        type: 'withIcon',
                        variant: 'ghost',
                    },
                    type: 'confirmationDialogVM',
                    titleKey: '',
                    confirmTextKey: '',
                    confirmButtonVM: {
                        type: 'withText',
                        secondary: false,
                        variant: 'fill',
                        textKey: enMock.orderActions.completionButtonText,
                    },
                    cancelButtonVM: {
                        type: 'withText',
                        secondary: false,
                        variant: 'fill',
                        textKey: enMock.orderActions.closeButtonText,
                    },
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
