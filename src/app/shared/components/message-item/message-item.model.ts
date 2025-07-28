import { AvatarXVM } from '@components/avatar/avatar.model';

export interface MessageItemXVM {
    sendingDate: Date;
    message: string;
    senderName: string;
    roleTextKey: string;
    senderValueKey: string;
    sendingDateValueKey: string;
    avatarXVM: AvatarXVM;
}
