import { AppComponentVM } from './app-vm.model';
import { FrameID } from './pages/landing-page/landing-page-vm.model';
import { AppRouteSegment } from './app-route-segment';

export const enAppMock = {
    text0: '0title',
    text1: '1title',
    text2: '2title',
    text3: '3title',
    text4: '4title',
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
    navItemXVMs: [{ textKey: 'text0', link: { href: `#${FrameID.PRODUCTS}` } }],
};

export const appMockVMWithFiveNavItem: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        { textKey: 'text0', link: { href: `#${FrameID.PRODUCTS}` } },
        { textKey: 'text1', link: { href: `#${FrameID.PRODUCTS}` } },
        { textKey: 'text2', link: { href: `#${FrameID.PRODUCTS}` } },
        { textKey: 'text3', link: { href: `#${FrameID.PRODUCTS}` } },
        { textKey: 'text4', link: { href: `#${FrameID.PRODUCTS}` } },
    ],
};

export const appMockVMWithOneAnchor: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [{ textKey: 'text0', routerLink: AppRouteSegment.LANDING }],
};

export const appMockVMWithFiveAnchor: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        { textKey: 'text0', routerLink: AppRouteSegment.LANDING },
        { textKey: 'text1', routerLink: AppRouteSegment.LANDING },
        { textKey: 'text2', routerLink: AppRouteSegment.LANDING },
        { textKey: 'text3', routerLink: AppRouteSegment.LANDING },
        { textKey: 'text4', routerLink: AppRouteSegment.LANDING },
    ],
};

export const appMockVMWithNavItemAndAnchor: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        {
            textKey: 'text0',
            routerLink: AppRouteSegment.LANDING,
        },
        {
            textKey: 'text1',
            link: { href: `#${FrameID.PRODUCTS}` },
        },
        {
            textKey: 'text2',
            link: { href: `#${FrameID.PARTNERS}` },
        },
        {
            textKey: 'text3',
            link: { href: `#${FrameID.PRODUCTS}` },
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
        {
            textKey: 'text0',
            routerLink: AppRouteSegment.LANDING,
        },
        {
            textKey: 'text1',
            link: { href: `#${FrameID.PRODUCTS}` },
        },
        {
            textKey: 'text2',
            link: { href: `#${FrameID.PARTNERS}` },
        },
        {
            textKey: 'text3',
            link: { href: `#${FrameID.PRODUCTS}` },
        },
    ],
};

export const appVMDefault: AppComponentVM = {
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [
        {
            textKey: 'AppComponent.navItems.0.title',
            routerLink: AppRouteSegment.LANDING,
        },
        {
            textKey: 'AppComponent.navItems.1.title',
            link: { href: `#${FrameID.PRODUCTS}` },
        },
        {
            textKey: 'AppComponent.navItems.2.title',
            link: { href: `#${FrameID.PARTNERS}` },
        },
        {
            textKey: 'AppComponent.navItems.3.title',
            routerLink: [AppRouteSegment.ORDERS, AppRouteSegment.NEW],
        },
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
