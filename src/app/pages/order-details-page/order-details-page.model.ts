import { WithLink } from '@interfaces/with-link.interface';
import { ButtonXVM } from '@components/button/button.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { BadgeXVM } from '@components/badge/badge.component';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { FrameVM } from '@components/frame/frame.model';
import { MessageVM } from '@components/message/message.component';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { AvatarVM } from '@components/avatar/avatar.model';
import { KeyValueXVM } from './key-value/key-value.component';
import { CardBodyXVM } from '@components/card/components/card-body/card-body.component';
import { Polygon } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { StackXVM } from '@components/stack/stack.component';
import { AdvancedMarker } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';

export type Role = 'customer' | 'office' | 'pilot';

interface User {
    role: Role;
    name: string;
    photoUrl: string | null;
}

export interface Message {
    sender: User;
    sendingDate: Date;
    message: string;
}

interface ActionsFrameXVM extends FrameVM {
    completionTemplateButtonHidden: boolean;
    completionTemplateButtonXVM: ButtonXVM & WithLink;
    closeOrderButtonHidden: boolean;
    closeOrderButtonXVM: ButtonXVM;
    confirmationDialogVM: ConfirmationDialogVM;
}

interface ChatFrameXVM extends FrameVM {
    messageXVMs: MessageXVM[];
    readonlyMessageControl?: boolean;
    messageInputTextXVM: InputTextXVM;
    submitMessageButtonXVM: ButtonXVM;
}

interface MessageXVM extends MessageVM {
    dateTime: Date;
    dateTimeValueKey: string;
    name: string;
    role: Role;
    nameXRoleValueKey: string;
    avatarVM: AvatarVM;
}

export type MissionStatus = 'scheduled' | 'preparing' | 'completed';

interface MissionCardFooterXVM {
    buttonXVM: ButtonXVM & WithRouterLink;
}
interface MissionCardBodyXVM extends Required<Pick<CardBodyXVM, 'titleKey'>> {
    status: MissionStatus;
    statusBadgeXVM: StatusBadgeXVM;
    keyValueXVMs: KeyValueXVM[];
    title: string;
}
interface MissionCardXVM {
    gmpMapXVM: GmpMapXVM;
    cardBodyXVM: MissionCardBodyXVM;
    cardFooterXVM: MissionCardFooterXVM;
}

interface CardListXVM {
    missionCardXVMs: MissionCardXVM[];
}
interface MissionsFrameXVM extends FrameVM {
    missionCardListXVM: CardListXVM;
}

interface GmpMapXVM {
    bounds: google.maps.LatLngBounds | null;
    polygon: Polygon;
    entryPoint: AdvancedMarker;
}

type StatusBadgeXVM = Omit<BadgeXVM, 'textKey'>;

interface SummaryHeader extends StackXVM {
    items: KeyValueXVM[];
}
interface HeaderXVM {
    orderId: string;
    titleKey: string;
    statusBadgeXVM: StatusBadgeXVM;
    addNewMissionsButtonXVM: ButtonXVM & WithRouterLink;
    addNewMissionEnabled: boolean;
    summary: SummaryHeader;
}

export type OrderStatus = 'active' | 'in-progress' | 'done' | 'new' | 'closed';

interface DetailsStackXVM extends StackXVM {
    summaryStackXVMs: SummaryStackXVM[];
}
interface DetailsFrameXVM extends FrameVM {
    detailsStackXVM: DetailsStackXVM;
}

export interface OrderDetailsPageVM {
    user: User | null;
    status: OrderStatus;
    headerXVM: HeaderXVM;
    actionsFrameXVM: ActionsFrameXVM;
    chatFrameXVM: ChatFrameXVM;
    missionsFrameXVM: MissionsFrameXVM;
    overviewFrameXVM: OverviewFrameXVM;
    detailsFrameXVM: DetailsFrameXVM;
}

interface SummaryStackXVM extends StackXVM {
    keyValueXVMs: KeyValueXVM[];
}
interface OverviewFrameXVM extends FrameVM {
    gmpMapXVM: OverviewGmpMapXVM;
    summaryStackXVM: SummaryStackXVM;
}
interface OverviewGmpMapXVM {
    bounds: google.maps.LatLngBounds | null;
    missions: Polygon[];
}
