import { WithLink } from '@interfaces/with-link.interface';
import { ButtonXVM } from '@components/button/button.model';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { FrameVM } from '@components/frame/frame.model';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { AvatarVM } from '@components/avatar/avatar.model';
import { Polygon } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { AdvancedMarker } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { CloseOrderDialogVM } from './components/close-order-dialog/close-order-dialog.model';
import { KeyValueXVM } from '@interfaces/key-value.interface';
import { ChatBubbleType } from '@components/chat-bubble/chat-bubble.component';
import { isObject } from '@utils/is-object.typeguard';

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

interface MessageXVM {
    dateTime: Date;
    dateTimeValueKey: string;
    name: string;
    role: Role;
    nameXRoleValueKey: string;
    avatarVM: AvatarVM;
    message: string;
    type: ChatBubbleType;
}

export type MissionStatus = 'scheduled' | 'preparing' | 'completed';

export interface MissionCardXVM {
    type: 'missionCardXVM';
    titleKey: string;
    missionName: string;
    gmpMapXVM: GmpMapXVM;
    status: MissionStatus;
    keyValueXVMs: KeyValueXVM[];
    editButtonXVM: ButtonXVM<'withText'> & WithRouterLink;
}

interface MissionsFrameXVM extends FrameVM {
    missionCardXVMs: MissionCardXVM[];
}

interface GmpMapXVM {
    bounds: google.maps.LatLngBounds | null;
    polygon: Polygon;
    entryPoint: AdvancedMarker;
}

interface HeaderXVM {
    orderId: string;
    titleKey: string;
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

export const isMissionCardXVM = (obj: unknown): obj is MissionCardXVM =>
    isObject(obj) && 'type' in obj && obj.type === 'missionCardXVM';
