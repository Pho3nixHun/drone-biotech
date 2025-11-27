import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';

export interface CloseOrderDialogVM extends DialogLayoutXVM {
    confirmTextKey: string;
}

interface CloseOrderDialogDialogSubmitResponse {
    type: 'submit';
}
interface CloseOrderDialogDialogCancelResponse {
    type: 'cancel';
}

export type CloseOrderDialogDialogResponse =
    | CloseOrderDialogDialogSubmitResponse
    | CloseOrderDialogDialogCancelResponse;
