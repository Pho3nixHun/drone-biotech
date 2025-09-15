import { Coordinates } from '@stores/location/location.model';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';
import { MapFormControlVM } from './components/map-form-control/map-form-control.model';
import { InputNumberXVM } from '@components/input-number/input-number.component';
import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';

export interface AreaDataDialogVM extends DialogLayoutXVM {
    requiredAssistiveTextKey: string;
    missionNameMaxCharactersAllowedAssistiveTextValueKey: string;
    missionNameMaxCharactersCounterAssistiveTextValueKey: string;
    dosePerHqMinErrorAssistiveTextValueKey: string;
    missionNameInputTextXVM: InputTextXVM;
    dosePerHqInputTextXVM: InputNumberXVM;
    commentInputTextareaXVM: InputTextareaXVM;
    applicationDateInputTextXVM: InputTextXVM;
    mapFormControlVM: MapFormControlVM;
}

export interface AreaData {
    id: string;
    comment?: string;
    missionName: string;
    targetArea: Coordinates[];
    entryPoint: Coordinates;
    dosePerHq: number;
    applicationDate: Date;
}

export interface AreaDataDialogResponseWithAreaData {
    type: 'submit';
    areaData: AreaData;
}

export interface AreaDataDialogResponseWithoutAreaData {
    type: 'cancel';
}

export type AreaDataDialogResponse =
    | AreaDataDialogResponseWithAreaData
    | AreaDataDialogResponseWithoutAreaData;
