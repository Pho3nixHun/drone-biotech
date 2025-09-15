import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';

export interface DeleteDialogVM extends DialogLayoutXVM {
    confirmTextKey: string;
}

interface DeleteDialogSubmitResponse {
    type: 'submit';
    id: string;
}
interface DeleteDialogCancelResponse {
    type: 'cancel';
}

export type DeleteDialogResponse =
    | DeleteDialogSubmitResponse
    | DeleteDialogCancelResponse;
