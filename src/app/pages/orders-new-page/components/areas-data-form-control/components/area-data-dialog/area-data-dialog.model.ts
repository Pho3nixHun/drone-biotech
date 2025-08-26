import { isObject } from '@utils/is-object.typeguard';
import { DialogReason } from '@services/dialog/dialog.service';
import { DialogLayoutVM } from '@components/dialog-layout/dialog-layout.model';
import { MapFormControlVM } from './components/map-form-control/map-form-control.model';
import { Coordinates } from '@stores/location/location.model';
import { ButtonVM } from '@components/button/button.model';

export interface AreaDataDialogVM extends DialogLayoutVM {
    type: 'areaDataDialogVM';
    missionNameLabelKey: string;
    dosePerHqLabelKey: string;
    coordinatesLabelKey: string;
    entryPointLabelKey: string;
    targetAreaLabelKey: string;
    applicationDateLabelKey: string;
    commentLabelKey: string;
    cancelButtonVM: ButtonVM;
    submitButtonVM: ButtonVM;
    areaData: AreaData | null;
    mapFormControlVM: MapFormControlVM;
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
