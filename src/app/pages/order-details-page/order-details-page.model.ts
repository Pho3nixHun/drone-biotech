import { WithLink } from '@interfaces/with-link.interface';
import { ButtonXVM } from '@components/button/button.model';
import { BadgeXVM } from '@components/badge/badge.component';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { FrameVM } from '@components/frame/frame.model';
import { MessageVM } from '@components/message/message.component';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { AvatarVM } from '@components/avatar/avatar.model';
import { CardBodyXVM } from '@components/card/components/card-body/card-body.component';
import { Polygon } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { AdvancedMarker } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { CloseOrderDialogVM } from './components/close-order-dialog/close-order-dialog.model';
import { KeyValueXVM } from '@interfaces/key-value.interface';

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
    completionTemplateButtonXVM: ButtonXVM<'withText'> & WithLink;
    closeOrderButtonXVM: ButtonXVM<'withText'>;
    closeOrderDialogVM: CloseOrderDialogVM;
}

interface ChatFrameXVM extends FrameVM {
    messageXVMs: MessageXVM[];
    readonlyMessageControl?: boolean;
    messageInputTextXVM: InputTextXVM;
    submitMessageButtonXVM: ButtonXVM<'withIcon'>;
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
    buttonXVM: ButtonXVM<'withText'> & WithRouterLink;
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

interface MissionsFrameXVM extends FrameVM {
    missionCardXVMs: MissionCardXVM[];
}

interface GmpMapXVM {
    bounds: google.maps.LatLngBounds | null;
    polygon: Polygon;
    entryPoint: AdvancedMarker;
}

type StatusBadgeXVM = Omit<BadgeXVM, 'textKey'>;

interface HeaderXVM {
    orderId: string;
    titleKey: string;
    statusBadgeXVM: StatusBadgeXVM;
    addNewMissionsButtonXVM: ButtonXVM<'withText'> & WithRouterLink;
    addNewMissionEnabled: boolean;
    summaries: KeyValueXVM[];
}

export type OrderStatus = 'active' | 'in-progress' | 'done' | 'new' | 'closed';

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

interface DetailsFrameXVM extends FrameVM {
    clientTitleKey: string;
    detailsTitleKey: string;
    clientSummaries: KeyValueXVM[];
    detailsSummaries: KeyValueXVM[];
}

interface OverviewFrameXVM extends FrameVM {
    gmpMapXVM: OverviewGmpMapXVM;
    summaries: KeyValueXVM[];
}
interface OverviewGmpMapXVM {
    bounds: google.maps.LatLngBounds | null;
    missions: Polygon[];
}
