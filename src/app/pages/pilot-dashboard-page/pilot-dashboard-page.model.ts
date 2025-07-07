import {
    NavigationAnchor,
    WithNavigationAnchor,
} from '@interfaces/navigation-anchor.interface';
import {
    KVsFromVM,
    TitleWithoutValueKey,
    TitleWithValueKey,
} from '@interfaces/value-key.interface';
import {
    Badge,
    GridConfig as Config,
} from '@interfaces/with-base-dashboard-page.interface';
import {
    AssignedMission,
    CompletedMission,
} from '@services/mission/mission.service.model';

interface MissionConfig {
    id: TitleWithoutValueKey;
    fieldName: TitleWithoutValueKey;
    areaInHa: TitleWithoutValueKey;
    scheduledDate: TitleWithValueKey;
    status: TitleWithoutValueKey;
    completionDate: TitleWithValueKey;
    performance: TitleWithoutValueKey;
    requester: TitleWithoutValueKey;
    pilot: TitleWithoutValueKey;
    client: TitleWithoutValueKey;
    actions: { mission: NavigationAnchor; report: NavigationAnchor };
}

interface MissionVM {
    badge: Badge;
}

type AssignedMissionVM = Omit<AssignedMission, 'client' | 'pilot' | 'status'> &
    MissionVM;
type CompletedMissionVM = Omit<
    CompletedMission,
    'client' | 'pilot' | 'performance'
> &
    MissionVM;

export type AssignedMissionXVM = KVsFromVM<AssignedMissionVM> &
    WithNavigationAnchor;
export type CompletedMissionXVM = KVsFromVM<CompletedMissionVM> &
    WithNavigationAnchor;
type MissionXVM = AssignedMissionXVM | CompletedMissionXVM;

type AssignedMissionsGrid = Config;
type CompletedMissionsGrid = Config;

type AssignedMissionsGridXVM = AssignedMissionsGrid & {
    missionXVMs: MissionXVM[];
};
type CompletedMissionsGridXVM = CompletedMissionsGrid & {
    missionXVMs: MissionXVM[];
};

export type GridXVM = AssignedMissionsGridXVM | CompletedMissionsGridXVM;

export interface PilotDashboardPageVM {
    gridXVMs: GridXVM[];
}

export interface PilotDashboardPageConfig {
    missionConfig: MissionConfig;
    assignedMissionsGridConfig: AssignedMissionsGrid;
    completedMissionsGridConfig: CompletedMissionsGrid;
}

export const isAssignedMissionXVM = (
    obj: MissionXVM
): obj is AssignedMissionXVM => 'scheduledDateKV' in obj;
