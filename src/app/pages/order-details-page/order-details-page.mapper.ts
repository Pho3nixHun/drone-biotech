import { Intent } from '@components/badge/badge.component';
import { MissionStatus, OrderStatus, Role } from './order-details-page.model';

export const ORDER_STATUS_TO_INTENT: Record<OrderStatus, Intent> = {
    new: 'accent',
    active: 'accent',
    'in-progress': 'accent',
    closed: 'accent',
    done: 'success',
};

export const mapOrderStatusToBadgeIntent = (status: OrderStatus): Intent =>
    ORDER_STATUS_TO_INTENT[status];

export const mapOrderStatusToTranslocoTextKey = (status: OrderStatus): string =>
    ({
        active: 'OrderDetailsPage.status.active',
        closed: 'OrderDetailsPage.status.closed',
        new: 'OrderDetailsPage.status.new',
        'in-progress': 'OrderDetailsPage.status.in_progress',
        done: 'OrderDetailsPage.status.done',
    })[status] ?? '';

export const mapRoleToTranslocoTextKey = (role: Role): string =>
    ({
        customer: 'OrderDetailsPage.role.customer',
        office: 'OrderDetailsPage.role.office',
        pilot: 'OrderDetailsPage.role.pilot',
    })[role] ?? '';

export const MISSION_STATUS_TO_INTENT: Record<MissionStatus, Intent> = {
    completed: 'success',
    preparing: 'accent',
    scheduled: 'accent',
};

export const mapMissionStatusToBadgeIntent = (status: MissionStatus): Intent =>
    MISSION_STATUS_TO_INTENT[status];

export const mapMissionStatusToTranslocoTextKey = (
    role: MissionStatus
): string =>
    ({
        scheduled: 'OrderDetailsPage.mission.status.scheduled',
        preparing: 'OrderDetailsPage.mission.status.preparing',
        completed: 'OrderDetailsPage.mission.status.completed',
    })[role] ?? '';
