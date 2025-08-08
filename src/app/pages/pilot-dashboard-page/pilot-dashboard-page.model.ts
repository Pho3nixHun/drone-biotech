import { ValueVM } from '@components/value/value.model';
import { Anchor } from '@interfaces/with-anchor.interface';
import { WithLabel } from '@interfaces/with-label.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithTitle } from '@interfaces/with-title.interface';

export enum Status {
    SCHEDULED,
    PREPARING,
}
export enum Performance {
    EXCELLENT,
    GOOD,
}
export interface BadgeXVM extends WithTextNode {
    textKey: string;
}
interface StatusKeyValueXVM extends KeyValueXVM {
    badgeXVM: BadgeXVM & { status: Status };
}
interface PerformanceKeyValueXVM extends KeyValueXVM {
    badgeXVM: BadgeXVM & { performance: Performance };
}

interface KeyValueXVM extends WithLabel {
    valueVM: ValueVM;
}

interface AnchorXVM extends WithLabel, Anchor {}

interface MissionBaseXVM {
    id: KeyValueXVM;
    fieldName: KeyValueXVM;
    areaInHa: KeyValueXVM;
    anchorXVM: AnchorXVM;
}

export interface AssignedMissionXVM extends MissionBaseXVM {
    type: 'assigned';
    scheduledDate: KeyValueXVM;
    status: StatusKeyValueXVM;
}
export interface CompletedMissionXVM extends MissionBaseXVM {
    type: 'completed';
    completionDate: KeyValueXVM;
    performance: PerformanceKeyValueXVM;
}

type MissionXVM = AssignedMissionXVM | CompletedMissionXVM;

export interface GridXVM extends WithTitle {
    headerKeys: string[];
    missionXVMs: MissionXVM[];
}

export interface PilotDashboardPageVM {
    gridXVMs: GridXVM[];
}
