import { WithLink } from '@interfaces/with-link.interface';
import { ButtonXVM } from '@components/button/button.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { BadgeXVM } from '@components/badge/badge.component';
import { WithRouterLink } from '@interfaces/with-router-link.interface';
import { FrameVM } from '@components/frame/frame.model';
import { MessageVM } from '@components/message/message.component';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { AvatarVM } from '@components/avatar/avatar.model';

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
}
