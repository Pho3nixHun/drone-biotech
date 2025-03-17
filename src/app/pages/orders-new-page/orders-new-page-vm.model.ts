import { FrameVM } from '@components/frame/frame-vm';
import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';

export interface OrdersNewPageVM {
    frameXVM: FrameXVM;
}

export interface OrdersNewFrame extends FrameVM {
    areasDataFormControlVM: AreasDataFormControlVM;
    submitButtonTextKey: string;
    internalOrderNumberLabelKey: string;
    nameLabelKey: string;
    phoneNumberLabelKey: string;
    emailLabelKey: string;
    endCustomerLabelKey: string;
    areasDataLabelKey: string;
}

type FrameXVM = OrdersNewFrame;
