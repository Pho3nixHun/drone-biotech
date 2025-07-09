import { OrderDetailsPageConfig } from './order-details-page.model';

export const orderDetailsPageConfig: OrderDetailsPageConfig = {
    headerConfig: {
        idTitleKey: 'OrderDetailsPage.header.idTitle',
        clientTextKey: 'OrderDetailsPage.header.clientText',
        createdDateTextKey: 'OrderDetailsPage.header.createdDateText',
        createdDateValueKey: 'OrderDetailsPage.header.createdDateValue',
        totalAreaTextKey: 'OrderDetailsPage.header.totalAreaText',
        totalAreaValueKey: 'OrderDetailsPage.header.totalAreaValue',
        addNewMissionButtonTextKey:
            'OrderDetailsPage.header.addNewMissionButtonText',
    },
    sectionCardConfigs: {
        orderDetailsSectionCardConfig: {
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
    headerConfig: {
        idTitle: 'id',
        clientText: 'client',
        createdDateText: 'createdDate',
        createdDateValue: 'createdDateV',
        totalAreaText: 'totalArea',
        totalAreaValue: 'totalAreaV',
        addNewMissionButtonText: 'addNewMissionButton',
    },
    sectionCardConfigs: {
        orderDetailsSectionCardConfig: {
            titleKey: 'title',
            infoPanelConfig: {
                clientInfoPanel: {
                    titleKey: 'title',
                    addressLabelKey: 'address',
                    contactLabelKey: 'contact',
                    emailLabelKey: 'email',
                    phoneLabelKey: 'phone',
                },
                summaryInfoPanel: {
                    averageDoseLabelKey: 'dose',
                    averageDoseValueKey: 'avg',
                    orderValueLabelKey: 'orderL',
                    orderValueValueKey: 'orderV',
                    titleKey: 'title',
                    totalSupplyLabelKey: 'supplyL',
                    totalSupplyValueKey: 'supplyV',
                    treatmentLabelKey: 'treatment',
                },
            },
        },
    },
};

export const orderDetailsPageMockConfig: OrderDetailsPageConfig = {
    headerConfig: {
        idTitleKey: enMock.headerConfig.idTitle,
        clientTextKey: enMock.headerConfig.clientText,
        createdDateTextKey: enMock.headerConfig.createdDateText,
        createdDateValueKey: enMock.headerConfig.createdDateValue,
        totalAreaTextKey: enMock.headerConfig.totalAreaText,
        totalAreaValueKey: enMock.headerConfig.totalAreaValue,
        addNewMissionButtonTextKey: enMock.headerConfig.addNewMissionButtonText,
    },
    sectionCardConfigs: {
        orderDetailsSectionCardConfig: {
            titleKey: 'OrderDetailsPage.details.title',
            infoPanelConfig: {
                clientInfoPanel: {
                    titleKey: 'title',
                    addressLabelKey: 'addressLabel',
                    contactLabelKey: 'contactLabel',
                    emailLabelKey: 'emailLabel',
                    phoneLabelKey: 'phoneLabel',
                },
                summaryInfoPanel: {
                    averageDoseLabelKey: 'averageDoseLabel',
                    averageDoseValueKey: 'averageDoseValue',
                    orderValueLabelKey: 'orderValueLabel',
                    orderValueValueKey: 'orderValueValue',
                    titleKey: 'summary.title',
                    totalSupplyLabelKey: 'totalSupplyLabel',
                    totalSupplyValueKey: 'totalSupplyValue',
                    treatmentLabelKey: 'treatmentLabel',
                },
            },
        },
    },
};
