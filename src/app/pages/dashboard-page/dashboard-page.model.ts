import {
    ValueType,
    WithKey,
    WithoutKey,
} from '@interfaces/value-key.interface';
import { User } from '@interfaces/with-base-dashboard-page.interface';
import {
    Summary,
    SummaryUnitType,
    SummaryColorType,
} from '@services/summary/summary.service.model';
import { UserRole } from '@stores/auth/auth.model';

interface UserHeaderVM {
    titleKey: string;
    dateKey: string;
    roleDashboardKey: string;
    loginTextKey: string;
}

interface UserHeaderXVM extends UserHeaderVM {
    user: User;
}

export interface DashboardPageConfig {
    userHeaderVM: UserHeaderVM;
}

export interface DashboardPageVM {
    userHeaderXVM: UserHeaderXVM;
    summaryXVMs: SummaryXVM[];
}

export type SummaryXVM = {
    quantity: Summary['unitType'] extends SummaryUnitType
        ? ValueType<WithKey, number>
        : ValueType<WithoutKey, number>;
} & Omit<Summary, 'colorType' | 'unitType' | 'quantity' | 'allowedRole'> & {
        color: string;
    };

export const mapSummaryColorTypeToCSSTextColor = (
    type: SummaryColorType
): string => {
    return (
        {
            blue: 'text-blue-600',
            green: 'text-green-600',
            red: 'text-red-600',
            purple: 'text-purple-600',
            yellow: 'text-yellow-600',
        }[type] || ''
    );
};

export const mapSummaryUnitTypeToTranslocoQuantityKey = (
    type: SummaryUnitType
): string => {
    return {
        hectare: 'DashboardPage.hectareQuantity',
        money: 'DashboardPage.moneyQuantity',
        rating: 'DashboardPage.ratingQuantity',
        hour: 'DashboardPage.hourQuantity',
    }[type];
};

export const mapRoleToCSSStyle = (type: UserRole): string => {
    return (
        {
            customer: 'bg-blue-600',
            pilot: 'bg-green-600',
            office: 'bg-red-600',
        }[type] || ''
    );
};
