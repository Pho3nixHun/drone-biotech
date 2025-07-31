import { AvatarXVM } from '@components/avatar/avatar.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { StatusVM } from '@components/status/status.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithVisibility } from '@interfaces/with-visibility.interface';
import { WithDisabled } from '@interfaces/with-disabled.interface';
import { WithLink } from '@interfaces/with-link.interface';
import { GoogleMapVM } from '@components/google-map/google-map.model';
import { ValueVM } from '@components/value/value.model';
import { Coordinates } from '@stores/location/location.model';

export interface MessageItemXVM {
    senderName: string;
    sendingDate: Date;
    message: string;
    roleTextKey: string;
    senderValueKey: string;
    sendingDateValueKey: string;
    avatarXVM: AvatarXVM;
}

interface MessageItemListXVM {
    messageItemXVMs: MessageItemXVM[];
}

export interface MessagesSectionCardXVM extends SectionCardVM {
    messageItemListXVM: MessageItemListXVM;
    buttonTextKey: string;
}

interface InfoItemXVM {
    labelKey: string;
    valueVM: ValueVM;
}

interface InfoListXVM {
    infoItemXVMs: InfoItemXVM[];
}

interface InfoPanelXVM extends WithTitle {
    infoListXVM: InfoListXVM;
}

export interface DetailsSectionCardXVM extends SectionCardVM {
    infoPanelXVMs: InfoPanelXVM[];
}

interface CompletionTemplateButtonXVM extends WithTextNode, WithLink {}

interface CloseOrderButtonXVM extends WithTextNode, WithDisabled {
    confirmationDialogVM: ConfirmationDialogVM;
}
export interface ActionsSectionCardXVM extends SectionCardVM {
    completionTemplateButtonXVM: CompletionTemplateButtonXVM;
    closeOrderButtonXVM: CloseOrderButtonXVM;
}

interface StatusXVM extends StatusVM {
    statusTextKey: string;
}
interface SummaryXVM {
    textKey: string;
    valueVM: ValueVM;
}
interface SummaryListXVM {
    summaryXVMs: SummaryXVM[];
}

interface AddMissionButtonXVM extends WithVisibility, WithTextNode {}
export interface HeaderXVM {
    id: string;
    idTitleKey: string;
    statusXVM: StatusXVM;
    summaryListXVM: SummaryListXVM;
    addMissionButtonXVM: AddMissionButtonXVM;
}
interface MissionInfoItemXVM {
    labelKey: string;
    valueVM: ValueVM;
}
interface MissionInfoItemListXVM {
    missionInfoItemXVMs: MissionInfoItemXVM[];
}

export interface TargetAreaXVM {
    options: google.maps.PolygonOptions;
    coordinates: Coordinates[];
}

export interface GoogleMapXVM extends GoogleMapVM {
    targetAreaXVMs: TargetAreaXVM[] | null;
}

export interface OverviewSectionCardXVM extends SectionCardVM {
    googleMapXVM: GoogleMapXVM;
    missionInfoItemListXVM: MissionInfoItemListXVM;
}

export interface OrderDetailsPageVM {
    headerXVM: HeaderXVM;
    overviewSectionCardXVM: OverviewSectionCardXVM;
    actionsSectionCardXVM: ActionsSectionCardXVM;
    messagesSectionCardXVM: MessagesSectionCardXVM;
    detailsSectionCardXVM: DetailsSectionCardXVM;
}
