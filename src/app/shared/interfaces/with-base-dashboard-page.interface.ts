import {
    MissionPerformanceType,
    MissionStatusType,
} from '@services/mission/mission.service.model';
import { UserRole, User as AuthUser } from '@stores/auth/auth.model';

export const mapAuthUserToDashboardUser = (user: AuthUser): User => ({
    name: user.displayName,
    role: user.role,
    lastLoginDate: new Date(),
});

export interface User {
    role: UserRole;
    name: string;
    lastLoginDate: Date;
}

export const mapMissionStatusTypeToCCSColors = (
    type: MissionStatusType
): string => {
    return (
        {
            scheduled: 'bg-pink-200 text-pink-600',
            pending: 'bg-green-200 text-green-600',
            preparing: 'bg-yellow-200 text-yellow-600',
            completed: 'bg-green-200 text-green-600',
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
            completed: 'DashboardPage.completed',
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
