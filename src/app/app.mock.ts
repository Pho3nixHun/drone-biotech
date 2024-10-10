import { AppRouteSegment } from './app-route-segment';
import { AppComponentVM } from './app-vm.model';

export const appMockVMWithoutNavItem: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  extendedNavItemVMs: [],
};
export const appMockVMWithOneNavItem: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  extendedNavItemVMs: [{ labelKey: 'AppComponent.navItems.0.title', navItemVM: { href: '' } }],
};

export const appMockVMWithFiveNavItem: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  extendedNavItemVMs: [
    { labelKey: 'AppComponent.navItems.0.title', navItemVM: { href: '' } },
    { labelKey: 'AppComponent.navItems.1.title', navItemVM: { href: '' } },
    { labelKey: 'AppComponent.navItems.2.title', navItemVM: { href: '' } },
    { labelKey: 'AppComponent.navItems.3.title', navItemVM: { href: '' } },
    { labelKey: 'AppComponent.navItems.1.title', navItemVM: { href: '' } },
  ],
};

export const appMockVM: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  extendedNavItemVMs: [
    { labelKey: 'AppComponent.navItems.0.title', navItemVM: { href: '' } },
    {
      labelKey: 'AppComponent.navItems.1.title',
      navItemVM: { href: `#${AppRouteSegment.PRODUCT}` },
    },
    {
      labelKey: 'AppComponent.navItems.2.title',
      navItemVM: { href: `#${AppRouteSegment.PARTNERS}` },
    },
    { labelKey: 'AppComponent.navItems.3.title', navItemVM: { href: '' } },
  ],
};

export const appEmptyMockVMForRoutes: AppComponentVM = {
  logoVM: { imageSrc: 'assets/phoenix.jpg', routerLink: '', altText: 'logo' },
  extendedNavItemVMs: [],
};
