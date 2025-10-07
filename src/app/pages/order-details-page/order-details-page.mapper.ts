import { OrderStatus, Role } from './order-details-page.model';

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
