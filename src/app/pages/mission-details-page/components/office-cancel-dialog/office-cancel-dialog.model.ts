import { DialogVM } from '@components/dialog/dialog.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';

export interface OfficeCancelDialogVM extends DialogVM {
    reasonInputTextareaXVM: InputTextareaXVM;
    requiredAssistiveTextKey: string;
    emptyStringAssistiveTextKey: string;
    confirmationTextKey: string;
}

interface ConfirmCancelMission {
    type: 'confirm';
    reason: string | null;
}

interface Cancel {
    type: 'cancel';
}

export type OfficeCancelDialogResult = ConfirmCancelMission | Cancel;
