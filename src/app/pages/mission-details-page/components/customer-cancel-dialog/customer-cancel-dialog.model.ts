import { DialogVM } from '@components/dialog/dialog.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';

export interface CustomerCancelDialogVM extends DialogVM {
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
