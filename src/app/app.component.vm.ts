import { LogoVM } from '@components/header/components/logo/logo-vm.model';
import { NavItemVM } from '@components/header/components/nav/components/nav-item/nav-item-vm.model';

export interface AppComponentVM {
  logoVM: LogoVM;
  navItems: NavItemVM[];
}
