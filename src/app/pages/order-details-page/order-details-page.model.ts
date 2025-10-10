import { WithLink } from '@interfaces/with-link.interface';
import { ButtonXVM } from '@components/button/button.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { BadgeXVM } from '@components/badge/badge.component';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { FrameVM } from '@components/frame/frame.model';
import { MessageVM } from '@components/message/message.component';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { AvatarVM } from '@components/avatar/avatar.model';
import { Coordinates } from '@stores/location/location.model';
import { KeyValueXVM } from './key-value/key-value.component';
import { CardBodyXVM } from '@components/card/components/card-body/card-body.component';

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
    coordinates: Coordinates[];
    entryPoint: Coordinates;
}

type StatusBadgeXVM = Omit<BadgeXVM, 'textKey'>;
interface HeaderXVM {
    orderId: string;
    titleKey: string;
    statusBadgeXVM: StatusBadgeXVM;
    addNewMissionsButtonXVM: ButtonXVM & WithRouterLink;
    addNewMissionEnabled: boolean;
}

export type OrderStatus = 'active' | 'in-progress' | 'done' | 'new' | 'closed';
export interface OrderDetailsPageVM {
    user: User | null;
    status: OrderStatus;
    headerXVM: HeaderXVM;
    actionsFrameXVM: ActionsFrameXVM;
    chatFrameXVM: ChatFrameXVM;
    missionsFrameXVM: MissionsFrameXVM;
}
