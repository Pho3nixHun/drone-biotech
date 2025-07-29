import { WithLink } from '@interfaces/with-link.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithTitle } from '@interfaces/with-title.interface';
import { Coordinates } from '@stores/location/location.model';
import { SectionCardVM } from '@components/section-card/section-card.model';
import { MessageItemListXVM } from '@components/message-item-list/message-item-list.model';
import { Value } from '@interfaces/with-value';
import { MatIcon } from '@interfaces/mat-icon.enum';

interface ButtonXVM extends WithTextNode, WithLink {}

interface StatusXVM extends WithTextNode {
    style: string;
}

interface HeaderXVM {
    statusXVM: StatusXVM;
    openInMapsButtonXVM: ButtonXVM;
    creationDate: Date;
    creationDateLabelKey: string;
    creationDateValueKey: string;
}

export interface MapControl {
    targetArea: Coordinates[] | null;
    entryPoint: Coordinates | null;
}
interface MapFormControlXVM {
    mapControl: MapControl;
}

interface PageLayoutXVM extends WithTitle {
    missionName: string;
}

interface MessagesSectionCardXVM extends SectionCardVM {
    sendMessageButtonTextKey: string;
    messageItemListXVM: MessageItemListXVM;
}

export enum AvatarBackgroundColor {
    AREA = '*:bg-blue-200',
    COMMENT = '*:bg-yellow-200',
    DATE = '*:bg-purple-200',
    DISTANCE = '*:bg-red-200',
    DOSE = '*:bg-green-200',
}

interface AvatarXVM {
    backgroundColor: AvatarBackgroundColor;
    matIconName: MatIcon;
}

interface DetailsItemXVM {
    avatarXVM: AvatarXVM;
    labelKey: string;
    value: Value;
}

interface DetailsItemListXVM {
    detailsItemXVMs: DetailsItemXVM[];
}

interface DetailsSectionCardXVM extends SectionCardVM {
    detailsItemListXVM: DetailsItemListXVM;
}

interface InfoItemXVM {
    name: string;
    value: Value;
}

interface InfoItemListXVM {
    infoItemXVMs: InfoItemXVM[];
}

interface InfoPanelXVM {
    infoItemListXVM: InfoItemListXVM;
}

interface SuppliesSectionCardXVM extends SectionCardVM {
    infoPanelXVM: InfoPanelXVM;
}

export interface MissionDetailsPageVM {
    pageLayoutXVM: PageLayoutXVM;
    headerXVM: HeaderXVM;
    mapFormControlXVM: MapFormControlXVM;
    messagesSectionCardXVM: MessagesSectionCardXVM;
    detailsSectionCardXVM: DetailsSectionCardXVM;
    suppliesSectionCardXVM: SuppliesSectionCardXVM;
}
