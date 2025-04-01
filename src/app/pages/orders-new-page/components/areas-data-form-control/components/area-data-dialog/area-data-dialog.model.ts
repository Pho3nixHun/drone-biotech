import { isObject } from '@utils/is-object.typeguard';
import { MapAreaSelectFormControlVM } from './components/map-area-select-form-control/map-area-select-form-control.model';
import { MapPointSelectFormControlVM } from './components/map-point-select-form-control/map-point-select-form-control.model';
import { DialogReasonBase } from '@services/dialog/dialog.service';
import { BaseDialogVM } from '@components/base-dialog/base-dialog.model';

export interface AreaDataDialogVM extends BaseDialogVM {
    type: 'areaDataDialogVM';
    dosePerHqLabelKey: string;
    entryPointLabelKey: string;
    targetAreaLabelKey: string;
    applicationDateLabelKey: string;
    cancelButtonTextKey: string;
    submitButtonTextKey: string;
    areaData: AreaData | null;
    mapAreaSelectFormControlVM: MapAreaSelectFormControlVM;
    mapPointSelectFormControlVM: MapPointSelectFormControlVM;
}

export interface AreaData {
    id: number;
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
