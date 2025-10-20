import { FrameVM } from '@components/frame/frame.model';
import { AdvancedMarker } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { Polygon } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { KeyValueXVM } from '../order-details-page/key-value/key-value.component'; // TODO needs to be relocated
import { BadgeXVM } from '@components/badge/badge.component';
import { StackXVM } from '@components/stack/stack.component';
import { ButtonXVM } from '@components/button/button.model';
import { WithLink } from '@interfaces/with-link.interface';
import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { InputNumberXVM } from '@components/input-number/input-number.component';

interface GmpMapXVM {
    polygon: Polygon;
    entryPoint: AdvancedMarker;
    bounds: google.maps.LatLngBounds | null;
}

export type MissionStatus =
    | 'new'
    | 'scheduled'
    | 'accepted'
    | 'rejected'
    | 'traveling'
    | 'arrived'
    | 'in_progress'
    | 'aborted'
    | 'completed'
    | 'done';

interface StatusBadgeXVM extends Pick<BadgeXVM, 'shape' | 'variant'> {
    status: MissionStatus;
}

interface HeaderXVM extends WithTitle {
    statusBadgeXVM: StatusBadgeXVM;
    creationDateKeyValueXVM: KeyValueXVM;
}

export interface KeyValueStackXVM extends StackXVM {
    keyValueXVMs: KeyValueXVM[];
}

export interface MapOverviewFrameXVM extends FrameVM {
    overviewStackXVM: KeyValueStackXVM;
    gmpMapXVM: GmpMapXVM;
    openInGMButtonXVM: ButtonXVM & Partial<WithLink>;
}

interface UpdateMissionDialogVM extends DialogLayoutXVM {
    requiredAssistiveTextKey: string;
    minDosePerHaAssistiveTextKey: string;
    dateInputTextXVM: InputTextXVM;
    dosePerHaInputTextXVM: InputNumberXVM;
}

interface UpdateMissionDialogButtonXVM extends ButtonXVM {
    updateMissionDialogVM: UpdateMissionDialogVM;
}

interface MissionDetailsFrameXVM extends FrameVM {
    openUpdateMissionDialogButtonXVM: UpdateMissionDialogButtonXVM;
}

export interface MissionDetailsPageVM {
    scheduledDate: Date;
    dosePerHa: number;
    headerXVM: HeaderXVM;
    mapOverviewFrameXVM: MapOverviewFrameXVM;
    missionDetailsFrameXVM: MissionDetailsFrameXVM;
}
