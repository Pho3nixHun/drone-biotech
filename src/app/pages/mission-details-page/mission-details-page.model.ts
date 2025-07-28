import { WithLink } from '@interfaces/with-link.interface';
import { WithTextNode } from '@interfaces/with-text-node.interface';
import { WithTitle } from '@interfaces/with-title.interface';
import { Coordinates } from '@stores/location/location.model';

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

export interface MissionDetailsPageVM {
    pageLayoutXVM: PageLayoutXVM;
    headerXVM: HeaderXVM;
    mapFormControlXVM: MapFormControlXVM;
}
