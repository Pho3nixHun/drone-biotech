interface MissionBase {
    id: string;
    fieldName: string;
    areaInHa: number;
    client: string;
    pilot: string | null;
}

export type AssignedMission = MissionBase & {
    status: MissionStatusType;
    scheduledDate: Date;
};

export type ActiveMission = MissionBase & {
    status: MissionStatusType;
    scheduledDate: Date;
};

export type CompletedMission = MissionBase & {
    performance: MissionPerformanceType;
    completionDate: Date;
};

export type MissionStatusType = 'scheduled' | 'preparing' | 'pending';
export type MissionPerformanceType = 'excellent' | 'good';

export type Mission = ActiveMission | CompletedMission;

export const isActiveMission = (mission: Mission): mission is ActiveMission =>
    'status' in mission && 'scheduledDate' in mission;

export const isCompletedMission = (
    mission: Mission
): mission is CompletedMission =>
    'performance' in mission && 'completionDate' in mission;
