import { Coordinates } from '@stores/location/location.model';

interface MissionBase {
    id: string;
    fieldName: string;
    areaInHa: number;
    coordinates: Coordinates[];
}

export type AssignedMission = MissionBase & {
    status: MissionStatusType;
    scheduledDate: Date;
    pilot: string | null;
};

export type ActiveMission = MissionBase & {
    status: MissionStatusType;
    scheduledDate: Date;
    pilot: string | null;
};

export type CompletedMission = MissionBase & {
    performance: MissionPerformanceType;
    completionDate: Date;
    pilot: string;
};

export type MissionStatusType = 'scheduled' | 'preparing' | 'pending';
export type MissionPerformanceType = 'excellent' | 'good';

export type ActiveMissionX = ActiveMission & { client: string };
export type CompletedMissionX = CompletedMission & {
    client: string;
};

export type MissionX = ActiveMissionX | CompletedMissionX;

export type Mission = ActiveMission | CompletedMission;

export const isActiveMission = (
    mission: Mission
): mission is CompletedMission =>
    'status' in mission && 'scheduledDate' in mission;

export const isActiveMissionX = (
    mission: MissionX
): mission is ActiveMissionX =>
    'status' in mission && 'scheduledDate' in mission;

export const isCompletedMissionX = (
    mission: MissionX
): mission is CompletedMissionX =>
    'performance' in mission && 'completionDate' in mission;
