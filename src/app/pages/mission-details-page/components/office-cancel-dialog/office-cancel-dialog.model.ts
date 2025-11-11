import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';

export interface OfficeCancelDialogVM extends DialogLayoutXVM {
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
