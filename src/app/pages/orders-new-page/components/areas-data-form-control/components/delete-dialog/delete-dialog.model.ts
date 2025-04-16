import { DialogReasonBase } from '@services/dialog/dialog.service';
import { isObject } from '@utils/is-object.typeguard';

export interface DeleteDialogVM {
    type: 'deleteDialogVM';
    titleKey: string;
    warningTextKey: string;
    submitButtonTextKey: string;
    cancelButtonTextKey: string;
}

export interface DeleteDialogReason extends DialogReasonBase {
    type: 'deleteDialogReason';
}

export const isDeleteDialogResult = (
    data: unknown
): data is DeleteDialogReason => {
    return (
        isObject(data) && 'type' in data && data.type === 'deleteDialogReason'
    );
};

export function isDeleteDialogVM(data: unknown): data is DeleteDialogVM {
    return isObject(data) && 'type' in data && data.type === 'deleteDialogVM';
}
