import {
    KeyValuePair,
    KVsFromVM,
    TitleWithoutValueKey,
    TitleWithValueKey,
    WithoutKey,
} from '@interfaces/value-key.interface';
import {
    NavigationAnchor,
    WithNavigationAnchor,
} from '@interfaces/navigation-anchor.interface';
import {
    Badge,
    GridConfig,
} from '@interfaces/with-base-dashboard-page.interface';
import {
    ActiveMissionX,
    CompletedMissionX,
} from '@services/mission/mission.service.model';

export interface MissionConfig {
    id: TitleWithoutValueKey;
    client: TitleWithoutValueKey;
    fieldName: TitleWithoutValueKey;
    pilot: TitleWithoutValueKey & {
        textColor: string;
        unassignedTextKey: string;
    };
    areaInHa: TitleWithoutValueKey;
    status: TitleWithoutValueKey;
    completionDate: TitleWithValueKey;
    performance: TitleWithoutValueKey;
    actions: {
        assign: NavigationAnchor;
        manage: NavigationAnchor;
        reassign: NavigationAnchor;
        report: NavigationAnchor;
    };
}

interface MissionVM {
    badge: Badge;
    pilot: PilotXVM;
}

type ActiveMissionVM = Omit<
    ActiveMissionX,
    'status' | 'scheduledDate' | 'pilot'
> &
    MissionVM;
type CompletedMissionVM = Omit<
    CompletedMissionX,
    'areaInHa' | 'pilot' | 'performance'
> &
    MissionVM;

export type ActiveMissionXVM = KVsFromVM<ActiveMissionVM> & {
    actions: NavigationAnchor[];
};

export type CompletedMissionXVM = KVsFromVM<CompletedMissionVM> &
    WithNavigationAnchor;

type MissionXVM = ActiveMissionXVM | CompletedMissionXVM;

type ActiveMissionsGridConfig = GridConfig & {
    navigationAnchor: Omit<NavigationAnchor, 'textColor'>;
};
type CompletedMissionsGridConfig = GridConfig;

type ActiveMissionsGridXVM = ActiveMissionsGridConfig & {
    missionXVMs: MissionXVM[];
};
type CompletedMissionsGridXVM = CompletedMissionsGridConfig & {
    missionXVMs: MissionXVM[];
};

export type GridXVM = ActiveMissionsGridXVM | CompletedMissionsGridXVM;

export const isActiveMissionsGridXVM = (
    obj: GridXVM
): obj is ActiveMissionsGridXVM => 'navigationAnchor' in obj;

export interface OfficeDashboardPageConfig {
    missionConfig: MissionConfig;
    activeMissionsGridConfig: ActiveMissionsGridConfig;
    completedMissionsGridConfig: CompletedMissionsGridConfig;
}

export interface OfficeDashboardPageVM {
    gridXVMs: GridXVM[];
}

interface WithPilot {
    name: string;
}
interface WithoutPilot {
    textKey: string;
    color: string;
}

type PilotXVM = WithPilot | WithoutPilot;

export const isActiveMissionXVM = (obj: MissionXVM): obj is ActiveMissionXVM =>
    'areaInHaKV' in obj;

export const isWithoutPilotKV = (
    obj: KeyValuePair<WithoutKey, PilotXVM>
): obj is KeyValuePair<WithoutKey, WithoutPilot> =>
    'textKey' in obj.value && 'color' in obj.value;

export const isWithPilotKV = (
    obj: KeyValuePair<WithoutKey, PilotXVM>
): obj is KeyValuePair<WithoutKey, WithPilot> => 'name' in obj.value;
