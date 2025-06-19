import { User } from '@interfaces/with-base-dashboard-page.interface';
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
}
export const mapRoleToCSSStyle = (type: UserRole): string => {
    return (
        {
            customer: 'bg-blue-600',
            pilot: 'bg-green-600',
            office: 'bg-red-600',
        }[type] || ''
    );
};
