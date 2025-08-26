import { ButtonVM } from '@components/button/button.model';
import { DialogLayoutVM } from '@components/dialog-layout/dialog-layout.model';
import { DialogReason } from '@services/dialog/dialog.service';
import { isObject } from '@utils/is-object.typeguard';

export interface DeleteDialogVM extends DialogLayoutVM {
    type: 'deleteDialogVM';
    titleKey: string;
    warningTextKey: string;
    deleteButtonVM: ButtonVM;
    cancelButtonVM: ButtonVM;
}

export interface DeleteDialogReason extends DialogReason {
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
