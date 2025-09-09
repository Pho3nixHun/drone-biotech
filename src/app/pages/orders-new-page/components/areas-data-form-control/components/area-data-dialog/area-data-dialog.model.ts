import { isObject } from '@utils/is-object.typeguard';
import { DialogReason } from '@services/dialog/dialog.service';
import { DialogLayoutVM } from '@components/dialog-layout/dialog-layout.model';
import { Coordinates } from '@stores/location/location.model';
import { ButtonXVM } from '@components/button/button.model';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';
import { MapFormControlVM } from './components/map-form-control/map-form-control.model';
import { InputNumberXVM } from '@components/input-number/input-number.component';

export interface AreaDataDialogVM extends DialogLayoutVM {
    type: 'areaDataDialogVM';
    requiredAssistiveTextKey: string;
    missionNameMaxCharactersAllowedAssistiveTextValueKey: string;
    missionNameMaxCharactersCounterAssistiveTextValueKey: string;
    dosePerHqMinErrorAssistiveTextValueKey: string;
    missionNameInputTextXVM: InputTextXVM;
    dosePerHqInputTextXVM: InputNumberXVM;
    commentInputTextareaXVM: InputTextareaXVM;
    applicationDateInputTextXVM: InputTextXVM;
    mapFormControlVM: MapFormControlVM;
    cancelButtonXVM: ButtonXVM;
    submitButtonXVM: ButtonXVM;
    areaData: AreaData | null;
}

export interface AreaData {
    id: string;
    comment: string;
    missionName: string;
    targetArea: Coordinates[];
    entryPoint: Coordinates;
    dosePerHq: number;
    applicationDate: Date;
}

export interface AreaDataDialogResultWithAreaData extends DialogReason {
    reasonType: 'submit';
    type: 'areaDataDialogResultWithAreaData';
    areaData: AreaData;
}

export interface AreaDataDialogResultWithoutAreaData extends DialogReason {
    reasonType: 'cancel';
}

export function isAreaDataDialogResultWithAreaData(
    data: unknown
): data is AreaDataDialogResultWithAreaData {
    return (
        isObject(data) &&
        'type' in data &&
        data.type === 'areaDataDialogResultWithAreaData'
    );
}

export function isAreaDataDialogVM(data: unknown): data is AreaDataDialogVM {
    return isObject(data) && 'type' in data && data.type === 'areaDataDialogVM';
}
