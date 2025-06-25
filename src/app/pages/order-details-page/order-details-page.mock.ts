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
};
