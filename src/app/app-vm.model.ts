import { LogoVM } from '@components/header/components/logo/logo-vm.model';
import { NavItemVM } from '@components/header/components/nav/components/nav-item/nav-item-vm';

interface ExtendedNavItemVM {
  navItemVM: NavItemVM;
  labelKey: string;
}

export interface AppComponentVM {
  logoVM: LogoVM;
  extendedNavItemVMs: ExtendedNavItemVM[];
}
