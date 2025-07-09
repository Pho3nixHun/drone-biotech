export type MissionStatusType =
    | 'active'
    | 'completed'
    | 'in-progress'
    | 'abandoned'
    | 'pending';

export const mapMissionStatusTypeToCSSStyle = (
    status: MissionStatusType
): string => {
    return (
        {
            pending: 'bg-blue-100 text-blue-800',
            active: 'bg-green-200 text-green-900',
            'in-progress': 'bg-yellow-200 text-yellow-900',
            completed: 'bg-green-500 text-white',
            abandoned: 'bg-orange-300 text-orange-900',
        }[status] || ''
    );
};

export const mapMissionStatusTypeToTranslocoKey = (
    status: MissionStatusType
): string => {
    return (
        {
            active: 'MissionDetailsPage.status.active',
            completed: 'MissionDetailsPage.status.completed',
            'in-progress': 'MissionDetailsPage.status.in-progress',
            abandoned: 'MissionDetailsPage.status.abandoned',
            pending: 'MissionDetailsPage.status.pending',
        }[status] || ''
    );
};
