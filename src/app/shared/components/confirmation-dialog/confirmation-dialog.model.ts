import { ButtonVM } from '@components/button/button.model';
import { DialogLayoutVM } from '@components/dialog-layout/dialog-layout.model';
import { DialogReason } from '@services/dialog/dialog.service';
import { isObject } from '@utils/is-object.typeguard';

export interface ConfirmationDialogVM extends DialogLayoutVM {
    type: 'confirmationDialogVM';
    confirmTextKey: string;
    confirmButtonVM: ButtonVM;
    cancelButtonVM: ButtonVM;
}

export interface SubmitReason extends DialogReason {
    reasonType: 'submit';
}
export interface CancelReason extends DialogReason {
    reasonType: 'cancel';
}

export type ConfirmationDialogReason = SubmitReason | CancelReason;

export const isConfirmationDialogVM = (
    vm: unknown
): vm is ConfirmationDialogVM =>
    isObject(vm) && 'type' in vm && vm.type === 'confirmationDialogVM';
