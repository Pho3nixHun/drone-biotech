import { Rel } from '@interfaces/with-link.interface';
import { AppRouteSegment } from './app-route-segment';
import { AppComponentVM } from './app-vm.model';
import { FrameID } from './pages/landing-page/landing-page-vm.model';

export const enAppMock = {
    text0: 'title0',
    text1: 'title1',
    text2: 'title2',
    text3: 'title3',
};

export const appMockVMWithoutNavItem: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [],
};
export const appMockVMWithOneNavItem: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [{ textKey: 'text0', routerLink: '' }],
};

export const appMockVMWithFiveNavItem: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        { textKey: 'text0', routerLink: '' },
        { textKey: 'text1', routerLink: '' },
        { textKey: 'text2', routerLink: '' },
        { textKey: 'text3', routerLink: '' },
        {
            textKey: 'text1',
            link: {
                href: 'example.com',
                rel: [Rel.NoOpener],
                target: '_blank',
            },
        },
    ],
};

export const appMockVM: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        { textKey: 'text0', routerLink: '' },
        {
            textKey: 'text1',
            routerLink: [AppRouteSegment.LANDING, `#${FrameID.PRODUCT}`],
        },
        {
            textKey: 'text2',
            routerLink: [AppRouteSegment.LANDING, `#${FrameID.PRODUCT}`],
        },
        { textKey: 'text3', routerLink: '' },
    ],
};
export const appVMDefault: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        { textKey: 'AppComponent.navItems.0.title', routerLink: '' },
        {
            textKey: 'AppComponent.navItems.1.title',
            routerLink: [AppRouteSegment.LANDING, `#${FrameID.PRODUCT}`],
        },
        {
            textKey: 'AppComponent.navItems.2.title',
            routerLink: [AppRouteSegment.LANDING, `#${FrameID.PRODUCT}`],
        },
        { textKey: 'AppComponent.navItems.3.title', routerLink: '' },
    ],
};

export const appEmptyMockVMForRoutes: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [],
};
