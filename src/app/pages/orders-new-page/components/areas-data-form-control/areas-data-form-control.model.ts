import { ButtonXVM } from '@components/button/button.model';
import {
    AreaData,
    AreaDataDialogVM,
} from './components/area-data-dialog/area-data-dialog.model';
import { ConfirmationDialogVM } from '@components/confirmation-dialog/confirmation-dialog.model';

export interface AreasDataFormControlVM {
    addButtonXVM: ButtonXVM;
    readonly?: boolean;

    labelKey: string;
    addAreaDataDialogVM: AreaDataDialogVM;
    editAreaDataDialogVM: AreaDataDialogVM;
    confirmationDialogVM: ConfirmationDialogVM;

    editButtonXVM: ButtonXVM;
    deleteButtonXVM: ButtonXVM;

    entryPointHeaderKey: string;

    missionHeaderKey: string;
    commentHeaderKey: string;

    doseHeaderKey: string;
    doseValueKey: string;

    applicationDateHeaderKey: string;
    applicationDateValueKey: string;

    targetAreaSizeHeaderKey: string;
    targetAreaSizeValueKey: string;
    totalTargetAreaSizeHeaderKey: string;

    trichogrammaRequirementHeaderKey: string;
    trichogrammaRequirementValueKey: string;
    totalTrichogrammaRequirementHeaderKey: string;

    distanceFromHeadOfficeHeaderKey: string;
    distanceFromHeadOfficeValueKey: string;
    totalDistanceFromHeadOfficeHeaderKey: string;

    actionsHeaderKey: string;
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
