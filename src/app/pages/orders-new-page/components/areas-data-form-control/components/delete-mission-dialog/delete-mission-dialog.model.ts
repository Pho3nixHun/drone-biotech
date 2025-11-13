import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';

export interface DeleteMissionDialogVM extends DialogLayoutXVM {
    confirmTextKey: string;
}

interface DeleteMissionDialogSubmitResponse {
    type: 'submit';
    id: string;
}
interface DeleteMissionDialogCancelResponse {
    type: 'cancel';
}

export type DeleteMissionDialogResponse =
    | DeleteMissionDialogSubmitResponse
    | DeleteMissionDialogCancelResponse;
