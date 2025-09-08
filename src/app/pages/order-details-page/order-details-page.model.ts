import { StatusVM } from '@components/status/status.model';
import { OrderStatus as OrderStatusFromService } from '@services/order/order.service.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { WithLink } from '@interfaces/with-link.interface';
import { AvatarXVM } from '@components/avatar/avatar.model';
import { Value } from '@interfaces/with-value';
import {
    ButtonXVM,
    ButtonXVMWithRouterLink,
} from '@components/button/button.model';

export type OrderStatus = OrderStatusFromService;

export type Role = 'customer' | 'office' | 'pilot';

export interface User {
    role: Role;
    name: string;
    photoUrl: string | null;
}
export interface Message {
    sender: User;
    sendingDate: Date;
    message: string;
}
export interface MessageItemXVM
    extends Pick<Message, 'message' | 'sendingDate'> {
    senderName: string;
    roleTextKey: string;
    senderValueKey: string;
    sendingDateValueKey: string;
    avatarXVM: AvatarXVM;
}

interface MessageItemListXVM {
    messageItemXVMs: MessageItemXVM[];
}

export interface MessagesSectionCardXVM extends SectionCardVM {
    type: 'messages';
    messageItemListXVM: MessageItemListXVM;
    submitButtonXVM: ButtonXVM;
}

interface InfoItemXVM {
    labelKey: string;
    value: Value;
}

interface InfoListXVM {
    infoItemXVMs: InfoItemXVM[];
}

interface InfoPanelXVM extends WithTitle {
    infoListXVM: InfoListXVM;
}

export interface OrderDetailsSectionCardXVM extends SectionCardVM {
    type: 'orderDetails';
    infoPanelXVMs: InfoPanelXVM[];
}

type CompletionTemplateButtonXVM = ButtonXVM & WithLink;

type CloseOrderButtonXVM = ButtonXVM & {
    confirmationDialogVM: ConfirmationDialogVM;
};
export interface OrderActionsSectionCardXVM extends SectionCardVM {
    type: 'orderActions';
    completionTemplateButtonXVM: CompletionTemplateButtonXVM;
    closeOrderButtonXVM: CloseOrderButtonXVM;
}

interface StatusXVM extends StatusVM {
    statusTextKey: string;
}

interface SummaryXVM {
    textKey: string;
    value: Value;
}

interface SummaryListXVM {
    summaryXVMs: SummaryXVM[];
}

export interface HeaderXVM {
    id: string;
    idTitleKey: string;
    statusXVM: StatusXVM;
    summaryListXVM: SummaryListXVM;
    addNewMissionsButtonXVM: ButtonXVMWithRouterLink;
}
type SectionCardXVM =
    | OrderDetailsSectionCardXVM
    | OrderActionsSectionCardXVM
    | MessagesSectionCardXVM;

export interface OrderDetailsPageVM {
    headerXVM: HeaderXVM;
    sectionCardXVMs: SectionCardXVM[];
}

export interface OrderDetailsPageConfig {
    headerConfig: {
        idTitleKey: string;
        clientTextKey: string;
        createdDateTextKey: string;
        createdDateValueKey: string;
        totalAreaTextKey: string;
        totalAreaValueKey: string;
        addMissionButtonXVM: ButtonXVM;
    };
    sectionCardConfigs: {
        orderDetailsSectionCardConfig: {
            type: 'orderDetails';
            titleKey: string;
            infoPanelConfig: {
                clientInfoPanel: {
                    titleKey: string;
                    addressLabelKey: string;
                    contactLabelKey: string;
                    emailLabelKey: string;
                    phoneLabelKey: string;
                };
                summaryInfoPanel: {
                    titleKey: string;
                    averageDoseLabelKey: string;
                    averageDoseValueKey: string;
                    orderValueLabelKey: string;
                    orderValueValueKey: string;
                    totalSupplyLabelKey: string;
                    totalSupplyValueKey: string;
                    treatmentLabelKey: string;
                };
            };
        };
        messagesSectionCardConfig: {
            titleKey: string;
            buttonTextKey: string;
            dateValueKey: string;
            senderValueKey: string;
        };
        orderActionsSectionCardConfig: OrderActionsSectionCardXVM;
    };
}
