import { Rel } from '@interfaces/with-link.interface';
import { AppRouteSegment } from './app-route-segment';
import { AppComponentVM } from './app-vm.model';

export const appMockVMWithoutNavItem: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  navItemXVMs: [],
};
export const appMockVMWithOneNavItem: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  navItemXVMs: [{ textKey: 'AppComponent.navItems.0.title', routerLink: '' }],
};

export const appMockVMWithFiveNavItem: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  navItemXVMs: [
    { textKey: 'AppComponent.navItems.0.title', routerLink: '' },
    { textKey: 'AppComponent.navItems.1.title', routerLink: '' },
    { textKey: 'AppComponent.navItems.2.title', routerLink: '' },
    { textKey: 'AppComponent.navItems.3.title', routerLink: '' },
    {
      textKey: 'AppComponent.navItems.1.title',
      link: { href: 'example.com', rel: [Rel.NoOpener], target: '_blank' },
    },
  ],
};

export const appMockVM: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  navItemXVMs: [
    { textKey: 'AppComponent.navItems.0.title', routerLink: '' },
    {
      textKey: 'AppComponent.navItems.1.title',
      routerLink: `#${AppRouteSegment.PRODUCT}`,
    },
    {
      textKey: 'AppComponent.navItems.2.title',
      routerLink: `#${AppRouteSegment.PARTNERS}`,
    },
    { textKey: 'AppComponent.navItems.3.title', routerLink: '' },
  ],
};

export const appEmptyMockVMForRoutes: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  navItemXVMs: [],
};
