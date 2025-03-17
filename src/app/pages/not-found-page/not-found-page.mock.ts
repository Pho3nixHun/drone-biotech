import { NotFoundPageVM } from './not-found-page-vm.model';

export const enNotFoundPageMock = {
    description: 'desc',
};

export const notFoundPageVMDefault: NotFoundPageVM = {
    messageVM: {
        title: '404!',
        descriptionKey: 'NotFoundPage.message.description',
    },
};
export const notFoundPageVMMock: NotFoundPageVM = {
    messageVM: {
        title: '404!',
        descriptionKey: 'description',
    },
};
