import { ValueVM } from '@components/value/value.model';
import { Anchor, WithAnchor } from '@interfaces/with-anchor.interface';
import { WithLabel } from '@interfaces/with-label.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithTitle } from '@interfaces/with-title.interface';

interface AnchorXVM extends Anchor {
    type: 'manage' | 'reassign' | 'assign' | 'report';
}

type Status = 'scheduled' | 'preparing' | 'pending';
type Performance = 'good' | 'excellent';
interface LabeledBadgeXVM<T> extends WithTextNode {
    type: T;
}
interface ActionsKeyValueXVM extends WithLabel {
    anchorXVMs: AnchorXVM[];
}
interface KeyValueXVMWithBadge<T> extends KeyValueXVM {
    labeledBadgeXVM: LabeledBadgeXVM<T>;
}

interface KeyValueXVM extends WithLabel {
    valueVM: ValueVM;
}

interface PilotKeyValueXVM extends KeyValueXVM {
    type: 'assigned' | 'unassigned';
}

interface BaseMissionXVM {
    id: KeyValueXVM;
    client: KeyValueXVM;
    fieldName: KeyValueXVM;
    pilot: PilotKeyValueXVM;
    actions: ActionsKeyValueXVM;
}

interface ActiveMissionXVM extends BaseMissionXVM {
    type: 'activeMission';
    areaInHa: KeyValueXVM;
    status: KeyValueXVMWithBadge<Status>;
}
interface CompletedMissionXVM extends BaseMissionXVM {
    type: 'completedMission';
    completionDate: KeyValueXVM;
    performance: KeyValueXVMWithBadge<Performance>;
}

type MissionXVM = ActiveMissionXVM | CompletedMissionXVM;

type GridItemXVM = MissionXVM;

interface GridItemListXVM {
    gridItemXVMs: GridItemXVM[];
}
export interface GridXVM extends WithTitle, Partial<WithAnchor> {
    headerKeys: string[];
    gridItemListXVM: GridItemListXVM;
}

export interface OfficeDashboardPageVM {
    gridXVMs: GridXVM[];
}
