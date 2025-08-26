import { AppComponentVM } from './app-vm.model';
import { FrameID } from './pages/landing-page/landing-page-vm.model';
import { AppRouteSegment } from './app-route-segment';
import { OrdersRouteSegment } from './pages/orders-new-page/orders-route-segment';
import { MatIcon } from '@interfaces/mat-icon.enum';

export const appVMDefault: AppComponentVM = {
    headerCanBeShown: false,
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
            routerLink: AppRouteSegment.LANDING,
            fragment: FrameID.PRODUCTS,
        },
        {
            textKey: 'AppComponent.navItems.2.title',
            routerLink: AppRouteSegment.LANDING,
            fragment: FrameID.PARTNERS,
        },
        {
            textKey: 'AppComponent.navItems.3.title',
            routerLink: [AppRouteSegment.ORDERS, OrdersRouteSegment.NEW],
        },
    ],
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: true,
        variant: 'ghost',
    },
};

export const enAppMock = {
    text0: '0title',
    text1: '1title',
    text2: '2title',
    text3: '3title',
    text4: '4title',
};

export const appMockVMWithoutNavItem: AppComponentVM = {
    headerCanBeShown: false,
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [],
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};
export const appMockVMWithOneNavItem: AppComponentVM = {
    headerCanBeShown: false,
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [{ textKey: 'text0', link: { href: `#${FrameID.PRODUCTS}` } }],
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appMockVMWithFiveNavItem: AppComponentVM = {
    headerCanBeShown: false,
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
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appMockVMWithOneAnchor: AppComponentVM = {
    headerCanBeShown: false,
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [{ textKey: 'text0', routerLink: AppRouteSegment.LANDING }],
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appMockVMWithFiveAnchor: AppComponentVM = {
    headerCanBeShown: false,
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
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appMockVMWithNavItemAndAnchor: AppComponentVM = {
    headerCanBeShown: false,
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
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appMockVM: AppComponentVM = {
    headerCanBeShown: false,
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
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appEmptyMockVMForRoutes: AppComponentVM = {
    headerCanBeShown: false,
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [],
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};

export const appMockVMWithSignoutButton: AppComponentVM = {
    headerCanBeShown: true,
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [],
    signOutButtonVM: {
        type: 'withIcon',
        icon: MatIcon.LOGOUT,
        secondary: false,
        variant: 'ghost',
    },
};
export const appMockVMWithoutSignoutButton: AppComponentVM = {
    headerCanBeShown: true,
    logoXVM: {
        imageSrc: 'assets/phoenix.jpg',
        routerLink: '',
        altText: 'logo',
    },
    navItemXVMs: [],
    signOutButtonVM: undefined,
};
