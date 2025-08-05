import { AvatarXVM } from '@components/avatar/avatar.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithVisibility } from '@interfaces/with-visibility.interface';
import { WithDisabled } from '@interfaces/with-disabled.interface';
import { WithLink } from '@interfaces/with-link.interface';
import { GoogleMapVM } from '@components/google-map/google-map.model';
import { ValueVM } from '@components/value/value.model';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { TargetAreaXVM } from '@components/google-map/directives/draw-target-areas/draw-target-areas.model';
import { MatIcon } from '@interfaces/mat-icon.enum';

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

export enum Status {
    ACTIVE,
    PENDING,
    COMPLETED,
}
interface StatusXVM {
    status: Status;
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
type CardGroupHeaderXVM = string[];

export interface CardItemXVM {
    cardItemContentXVM: CardItemContentXVM;
    cardItemActionListXVM: CardItemActionListXVM;
}

interface CardItemActionListXVM {
    actionXVMs: ActionXVM[];
}

type ActionXVM = { matIcon: MatIcon } & WithRouterLink;

interface CardItemContentXVM {
    keyValueXVMs: KeyValueXVM[];
}

interface KeyValueXVM {
    label: string;
    value: ValueVM;
}

interface CardItemListXVM {
    cardItemXVMs: CardItemXVM[];
}
interface CardGroupXVM {
    cardGroupHeaderXVM: CardGroupHeaderXVM;
    cardItemListXVM: CardItemListXVM;
}

export interface MissionsSectionCardXVM extends SectionCardVM {
    cardGroupXVM: CardGroupXVM;
}

interface MissionInfoItemXVM {
    labelKey: string;
    valueVM: ValueVM;
}

interface MissionInfoItemListXVM {
    missionInfoItemXVMs: MissionInfoItemXVM[];
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
    missionsSectionCardXVM: MissionsSectionCardXVM;
}
