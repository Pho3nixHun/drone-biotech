import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';

export interface ConfirmationDialogVM extends DialogLayoutXVM {
    confirmTextKey: string;
}

interface ConfirmationDialogSubmitResponse {
    type: 'submit';
}
interface ConfirmationDialogCancelResponse {
    type: 'cancel';
}

export type ConfirmationDialogResponse =
    | ConfirmationDialogSubmitResponse
    | ConfirmationDialogCancelResponse;
