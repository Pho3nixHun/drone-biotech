import { Rel, WithLink } from '@interfaces/with-link.interface';
import { WithRouterLink } from '@interfaces/with-router-link.interface';

export const defaultRel: Rel[] = [Rel.NoOpener, Rel.NoReferrer];
export const defaultTarget = '_self';
export type NavItemVM = WithRouterLink | Partial<WithLink>;
