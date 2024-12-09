import { OrdersNewPageVM } from './orders-new-page-vm.model';

export const enMock = {
    frameTitle: 'ftitle',
    submitTitle: 'submit',
    deleteTitle: 'delete',
};

export const ordersNewPageVMDefault: OrdersNewPageVM = {
    frameXVM: {
        titleKey: 'OrdersNewPage.frame.title',
        mapOptions: {
            zoom: 14,
            center: { lat: 47.443667, lng: 21.389719 },
        },
        submitButtonTitleKey: 'OrdersNewPage.button.title',
        deleteControlButtonText: 'OrdersNewPage.map.deleteControlButtonText',
    },
};
export const ordersNewPageVMMock: OrdersNewPageVM = {
    frameXVM: {
        titleKey: 'frameTitle',
        mapOptions: {
            zoom: 14,
            center: { lat: 47.443667, lng: 21.389719 },
        },
        submitButtonTitleKey: 'submitTitle',
        deleteControlButtonText: 'deleteTitle',
    },
};
