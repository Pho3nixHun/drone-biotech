import {
    Summary,
    SummaryColorType,
    SummaryUnitType,
} from '@services/summary/summary.service.model';
import {
    MissionPerformanceType,
    MissionStatusType,
} from '@services/mission/mission.service.model';
import { UserRole, User as AuthUser } from '@stores/auth/auth.model';
import { ValueType, WithKey, WithoutKey } from './value-key.interface';
import { GridVM } from '@components/grid-section/components/grid/grid.model';
import { WithTitle } from './with-title.interface';

export const mapAuthUserToDashboardUser = (user: AuthUser): User => ({
    name: user.name,
    role: user.role,
    lastLoginDate: new Date(),
});

export interface User {
    role: UserRole;
    name: string;
    lastLoginDate: Date;
}

export interface WithBaseDashboardPageVM {
    summaryXVMs: SummaryXVM[];
}

export interface Badge {
    textKey: string;
    color: string;
}

export type SummaryXVM = {
    quantity: Summary['unitType'] extends SummaryUnitType
        ? ValueType<WithKey, number>
        : ValueType<WithoutKey, number>;
} & Omit<Summary, 'colorType' | 'unitType' | 'quantity' | 'allowedRole'> & {
        color: string;
    };

export interface GridConfig extends GridVM, WithTitle {
    headerKeys: string[];
}

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

export const mapMissionStatusTypeToCCSColors = (
    type: MissionStatusType
): string => {
    return (
        {
            scheduled: 'bg-pink-200 text-pink-600',
            pending: 'bg-green-200 text-green-600',
            preparing: 'bg-yellow-200 text-yellow-600',
        }[type] || ''
    );
};
export const mapMissionStatusTypeToTranslocoTextKey = (
    type: MissionStatusType
): string => {
    return (
        {
            scheduled: 'DashboardPage.scheduled',
            pending: 'DashboardPage.pending',
            preparing: 'DashboardPage.preparing',
        }[type] || ''
    );
};

export const mapMissionPerformanceTypeToCCSColors = (
    type: MissionPerformanceType
): string => {
    return (
        {
            excellent: 'bg-green-200 text-green-600',
            good: 'bg-yellow-200 text-yellow-600',
        }[type] || ''
    );
};
export const mapMissionPerformanceToTranslocoTextKey = (
    type: MissionPerformanceType
): string => {
    return (
        {
            excellent: 'DashboardPage.excellent',
            good: 'DashboardPage.good',
        }[type] || ''
    );
};
