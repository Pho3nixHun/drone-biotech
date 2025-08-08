import { WithTitle } from '@interfaces/with-title.interface';
import {
    AreaData,
    AreaDataDialogVM,
} from './components/area-data-dialog/area-data-dialog.model';
import { DeleteDialogVM } from './components/delete-dialog/delete-dialog.model';

interface SectionHeaderXVM extends WithTitle {
    addButtonMatIcon: string;
}

interface CardItemContentXVM {
    missionLabelKey: string;
    targetAreaSizeLabelKey: string;
    entryPointLabelKey: string;
    doseLabelKey: string;
    dateLabelKey: string;
    targetAreaSizeValueKey: string;
    trichogrammaRequirementValueKey: string;
    distanceFromHeadOfficeValueKey: string;
    trichogrammaRequirementLabelKey: string;
    applicationDateValueKey: string;
    doseValueKey: string;
    distanceLabelKey: string;
    commentLabelKey: string;
}

interface CardItemActionListXVM {
    editButtonMatIcon: string;
    deleteButtonMatIcon: string;
}
interface CardItemXVM {
    cardItemContentXVM: CardItemContentXVM;
    cardItemActionListXVM: CardItemActionListXVM;
}

type CardGroupSummaryHeaderXVM = string[];

interface CardGroupSummaryContentXVM {
    totalTargetAreaSizeValueKey: string;
    totalTrichogrammaRequirementValueKey: string;
    totalDistanceFromHeadOfficeValueKey: string;
}

interface CardGroupSummaryXVM {
    cardGroupSummaryHeaderXVM: CardGroupSummaryHeaderXVM;
    cardGroupSummaryContentXVM: CardGroupSummaryContentXVM;
}

interface CardItemListXVM {
    cardItemXVM: CardItemXVM;
}
type CardGroupHeaderXVM = string[];

interface CardGroupXVM {
    cardGroupHeaderXVM: CardGroupHeaderXVM;
    cardItemListXVM: CardItemListXVM;
    cardGroupSummaryXVM: CardGroupSummaryXVM;
}

export interface AreasDataFormControlVM {
    sectionHeaderXVM: SectionHeaderXVM;
    cardGroupXVM: CardGroupXVM;
    addAreaDataDialogVM: AreaDataDialogVM;
    editAreaDataDialogVM: AreaDataDialogVM;
    deleteDialogVM: DeleteDialogVM;
}

export interface AreaXData extends AreaData {
    entryPointAddress: string;
    targetAreaSize: number;
    trichogrammaRequirement: number;
    distanceFromHeadOffice: number;
}

export interface TotalAreaXData {
    totalTargetAreaSize: number;
    totalTrichogrammaRequirement: number;
    totalDistanceFromHeadOffice: number;
}

export { AreaData } from './components/area-data-dialog/area-data-dialog.model';
