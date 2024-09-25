import { LogoVM } from '@components/header/components/logo/logo-vm.model';

interface NavItemVM {
  titleKey: string;
  sectionID?: string;
}
export interface AppComponentVM {
  logoVM: LogoVM;
  navItemVMs: NavItemVM[];
}
