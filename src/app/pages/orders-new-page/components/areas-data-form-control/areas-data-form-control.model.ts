import { ButtonXVM } from '@components/button/button.model';
import {
    Mission,
    AreaDataDialogVM,
} from './components/area-data-dialog/area-data-dialog.model';
import { DeleteMissionDialogVM } from './components/delete-mission-dialog/delete-mission-dialog.model';

export interface AreasDataFormControlVM {
    addButtonXVM: ButtonXVM<'withIcon'>;
    readonly?: boolean;

    labelKey: string;
    areaDataDialogVM: AreaDataDialogVM;
    deleteMissionDialogVM: DeleteMissionDialogVM;

    editButtonXVM: ButtonXVM<'withIcon'>;
    deleteButtonXVM: ButtonXVM<'withIcon'>;

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

export interface MissionXData extends Mission {
    entryPointAddress: string;
    targetAreaSize: number;
    trichogrammaRequirement: number;
    distanceFromHeadOffice: number;
}

export interface TotalMissionXData {
    totalTargetAreaSize: number;
    totalTrichogrammaRequirement: number;
    totalDistanceFromHeadOffice: number;
}
