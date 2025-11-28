import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';

export interface CustomerCancelDialogVM extends DialogLayoutXVM {
    reasonInputTextareaXVM: InputTextareaXVM;
    optionalAssistiveTextKey: string;
    confirmationTextKey: string;
}

interface ConfirmCancelMission {
    type: 'confirm';
    reason: string | null;
}

interface Cancel {
    type: 'cancel';
}

export type CustomerCancelDialogResult = ConfirmCancelMission | Cancel;
