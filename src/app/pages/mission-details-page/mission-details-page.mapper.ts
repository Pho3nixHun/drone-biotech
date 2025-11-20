import { User as StoreUser } from '@stores/auth/auth.model';
import { MissionStatus, User, UserRole } from './mission-details-page.model';
import { Intent } from '@components/badge/badge.component';

export const mapMissionStatusToTranslocoTextKey = (
    status: MissionStatus
): string =>
    ({
        new: 'MissionDetailsPage.status.new',
        scheduled: 'MissionDetailsPage.status.scheduled',
        accepted: 'MissionDetailsPage.status.accepted',
        rejected: 'MissionDetailsPage.status.rejected',
        traveling: 'MissionDetailsPage.status.traveling',
        arrived: 'MissionDetailsPage.status.arrived',
        in_progress: 'MissionDetailsPage.status.in_progress',
        aborted: 'MissionDetailsPage.status.aborted',
        completed: 'MissionDetailsPage.status.completed',
        done: 'MissionDetailsPage.status.done',
        cancelled: 'MissionDetailsPage.status.cancelled',
    })[status] ?? '';

export const MISSION_STATUS_TO_INTENT: Record<MissionStatus, Intent> = {
    new: 'accent',
    scheduled: 'accent',
    accepted: 'accent',
    traveling: 'accent',
    done: 'success',
    arrived: 'success',
    completed: 'success',
    aborted: 'warning',
    rejected: 'warning',
    in_progress: 'warning',
    cancelled: 'error',
};

export const mapMissionStatusToBadgeIntent = (status: MissionStatus): Intent =>
    MISSION_STATUS_TO_INTENT[status];

export const mapRoleToTranslocoTextKey = (role: UserRole): string =>
    ({
        customer: 'MissionDetailsPage.role.customer',
        office: 'MissionDetailsPage.role.office',
        pilot: 'MissionDetailsPage.role.pilot',
    })[role] ?? '';

export const mapStoreUserToUser = (user: StoreUser): User => ({
    name: user.displayName,
    photoUrl: user.photoURL,
    role: user.role,
});
