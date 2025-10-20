import { MissionStatus } from './mission-details-page.model';

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
    })[status] ?? '';

export const mapMissionStatusToStatusBadgeColors = (
    status: MissionStatus
): string =>
    ({
        new: '*:bg-(--new-mission) *:border-(--new-mission) *:text-secondary',
        scheduled: '*:bg-(--scheduled-mission) *:border-(--scheduled-mission)',
        accepted: '*:bg-(--accepted-mission) *:border-(--accepted-mission)',
        rejected: '*:bg-(--rejected-mission) *:border-(--rejected-mission)',
        traveling: '*:bg-(--traveling-mission) *:border-(--traveling-mission)',
        arrived: '*:bg-(--arrived-mission) *:border-(--arrived-mission)',
        in_progress:
            '*:bg-(--in-progress-mission) *:border-(--in-progress-mission)',
        aborted: '*:bg-(--aborted-mission) *:border-(--aborted-mission)',
        completed: '*:bg-(--completed-mission) *:border-(--completed-mission)',
        done: '*:bg-(--done-mission) *:border-(--done-mission)',
    })[status] ?? '';
