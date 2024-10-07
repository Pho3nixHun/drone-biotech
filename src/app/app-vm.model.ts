import { LogoVM } from '@components/header/components/logo/logo-vm.model';

export interface NavItemVM {
  href: string;
}
export type ExtendedNavItemVM = { navItemVM: NavItemVM } & { labelKey: string };

export interface AppComponentVM {
  logoVM: LogoVM;
  extendedNavItemVMs: ExtendedNavItemVM[];
}
