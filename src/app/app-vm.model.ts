import { LogoVM } from '@components/header/components/logo/logo-vm.model';
import { NavItemVM } from '@components/header/components/nav/components/nav-item/nav-item-vm';
import { WithTextNode } from '@interfaces/with-text-node.interface';

type NavItemXVM = NavItemVM & WithTextNode;

export interface AppComponentVM {
  logoVM: LogoVM;
  navItemXVMs: NavItemXVM[];
}
