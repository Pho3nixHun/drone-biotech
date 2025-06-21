import { UserRole } from '@stores/auth/auth.model';

export type SummaryColorType = 'blue' | 'green' | 'purple' | 'yellow' | 'red';
export type SummaryUnitType = 'hectare' | 'money' | 'rating' | 'hour';

export interface Summary {
    allowedRole: UserRole;
    emoji: string;
    titleKey: string;
    quantity: number;
    colorType: SummaryColorType;
    unitType: SummaryUnitType | null;
}
