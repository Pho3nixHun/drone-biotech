import { AppRouteSegment } from 'src/app/app-route-segment';
import { NotFoundPageVM } from './not-found-page.model';

export const enNotFoundPageMock = {
    description: 'desc',
};

export const notFoundPageVMDefault: NotFoundPageVM = {
    notFoundMessageVM: {
        titleKey: '404',
        descriptionKey: 'NotFoundPage.message.description',
        navItem: {
            routerLink: AppRouteSegment.LANDING,
            textKey: 'NotFoundPage.message.buttonText',
        },
    },
};
export const notFoundPageVMMock: NotFoundPageVM = {
    notFoundMessageVM: {
        titleKey: '404',
        descriptionKey: 'NotFoundPage.message.description',
        navItem: {
            routerLink: AppRouteSegment.LANDING,
            textKey: 'NotFoundPage.message.buttonText',
        },
    },
};
