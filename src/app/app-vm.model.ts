import { ButtonXVM } from '@components/button/button.model';
import { LogoVM } from '@components/header/components/logo/logo-vm.model';
import { NavItemVM } from '@components/header/components/nav/components/nav-item/nav-item-vm';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';

type NavItemXVM = NavItemVM & WithTextNode;
type LogoXVM = WithRouterLink & LogoVM;

interface HeaderXVM {
    logoXVM: LogoXVM;
    navItemXVMs: NavItemXVM[];
    signOutButtonXVM: ButtonXVM<'withIcon'>;
    hidden?: boolean;
}
export interface AppComponentVM {
    headerXVM: HeaderXVM;
}
