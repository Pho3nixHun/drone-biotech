import { isObject } from '@utils/is-object.typeguard';
import { DialogReasonBase } from '@services/dialog/dialog.service';
import { BaseDialogVM } from '@components/base-dialog/base-dialog.model';
import { MapFormControlVM } from './components/map-form-control/map-form-control.model';

export interface AreaDataDialogVM extends BaseDialogVM {
    type: 'areaDataDialogVM';
    missionNameLabelKey: string;
    dosePerHqLabelKey: string;
    coordinatesLabelKey: string;
    entryPointLabelKey: string;
    targetAreaLabelKey: string;
    applicationDateLabelKey: string;
    commentLabelKey: string;
    cancelButtonTextKey: string;
    submitButtonTextKey: string;
    areaData: AreaData | null;
    mapFormControlVM: MapFormControlVM;
}

export interface AreaData {
    id: number;
    comment: string;
    missionName: string;
    targetArea: Coordinates[];
    entryPoint: Coordinates;
    dosePerHq: number;
    applicationDate: Date;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface AreaDataDialogResultWithAreaData extends DialogReasonBase {
    reasonType: 'submit';
    type: 'areaDataDialogResultWithAreaData';
    areaData: AreaData;
}

export interface AreaDataDialogResultWithoutAreaData extends DialogReasonBase {
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
