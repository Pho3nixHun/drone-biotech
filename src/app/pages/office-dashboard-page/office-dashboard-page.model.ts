import {
    KeyValuePair,
    KVsFromVM,
    TitleWithoutValueKey,
    TitleWithValueKey,
    WithoutKey,
} from '@interfaces/value-key.interface';
import {
    ActiveMissionX,
    CompletedMissionX,
} from '@services/mission/mission.service.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { WithRouterLink } from '@interfaces/with-router-link.interface';

export interface GridVM {
    gridColsLength: GridColsLength;
}

export enum GridColsLength {
    SIX = 'grid-cols-6',
    SEVEN = 'grid-cols-7',
}

export interface GridConfig extends GridVM, WithTitle {
    headerKeys: string[];
}
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

export interface NavigationAnchor extends WithRouterLink {
    textKey: string;
    textColor: string;
}

export interface WithNavigationAnchor {
    navigationAnchor: NavigationAnchor;
}

export interface BadgeXVM {
    textKey: string;
    color: string;
}
interface MissionVM {
    badge: BadgeXVM;
    pilot: PilotXVM;
}

type ActiveMissionVM = Omit<
    ActiveMissionX,
    'status' | 'scheduledDate' | 'pilot' | 'coordinates'
> &
    MissionVM;
type CompletedMissionVM = Omit<
    CompletedMissionX,
    'areaInHa' | 'pilot' | 'performance' | 'coordinates'
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
