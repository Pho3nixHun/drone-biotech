import { AvatarXVM } from '@components/avatar/avatar.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithVisibility } from '@interfaces/with-visibility.interface';
import { WithDisabled } from '@interfaces/with-disabled.interface';
import { Value } from '@interfaces/with-value';
import { WithLink } from '@interfaces/with-link.interface';
import { Coordinates } from '@stores/location/location.model';
import { OrderStatus as OrderStatusFromService } from '@services/order/order.service.model';
import { MapFormControlVM } from './components/map-form-control/map-form-control.model';

export interface TargetArea {
    type: 'completed' | 'active';
    coordinates: Coordinates[];
}

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
    type: 'orderMessages';
    messageItemListXVM: MessageItemListXVM;
    buttonTextKey: string;
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

interface CompletionTemplateButtonXVM extends WithTextNode, WithLink {}

interface CloseOrderButtonXVM extends WithTextNode, WithDisabled {
    confirmationDialogVM: ConfirmationDialogVM;
}
export interface OrderActionsSectionCardXVM extends SectionCardVM {
    type: 'orderActions';
    completionTemplateButtonXVM: CompletionTemplateButtonXVM;
    closeOrderButtonXVM: CloseOrderButtonXVM;
}

interface StatusXVM {
    styles: string;
    statusTextKey: string;
}

interface SummaryXVM {
    textKey: string;
    value: Value;
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
type SectionCardXVM =
    | OrderDetailsSectionCardXVM
    | OrderActionsSectionCardXVM
    | MessagesSectionCardXVM;

export interface OrderDetailsPageVM {
    headerXVM: HeaderXVM;
    overviewSectionCardXVM: OverviewSectionCardXVM;
    sectionCardXVMs: SectionCardXVM[];
}

interface MapFormControlXVM extends MapFormControlVM {
    targetAreas: TargetArea[];
}
export interface OverviewSectionCardXVM extends SectionCardVM {
    type: 'overview';
    titleKey: string;
    mapFormControlXVM: MapFormControlXVM;
}

export interface OrderDetailsPageConfig {
    headerConfig: {
        idTitleKey: string;
        clientTextKey: string;
        createdDateTextKey: string;
        createdDateValueKey: string;
        totalAreaTextKey: string;
        totalAreaValueKey: string;
        addMissionButtonXVM: AddMissionButtonXVM;
    };
    sectionCardConfigs: {
        orderOverviewSectionCardConfig: {
            titleKey: string;
            totalMissionsLabelKey: string;
            totalMissionsValueKey: string;
            completedMissionsLabelKey: string;
            completedMissionsValueKey: string;
            remainingMissionsLabelKey: string;
            remainingMissionsValueKey: string;
        };
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
