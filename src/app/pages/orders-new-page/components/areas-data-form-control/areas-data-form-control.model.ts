import {
    AreaData,
    AreaDataDialogVM,
} from './components/area-data-dialog/area-data-dialog.model';
import { DeleteDialogVM } from './components/delete-dialog/delete-dialog.model';

export interface AreasDataFormControlVM {
    addAreaDataDialogVM: AreaDataDialogVM;
    editAreaDataDialogVM: AreaDataDialogVM;
    deleteDialogVM: DeleteDialogVM;

    entryPointHeaderKey: string;
    entryPointValueKey: string;

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
