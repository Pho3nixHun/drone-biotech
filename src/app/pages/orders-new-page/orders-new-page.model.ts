import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';
import { FrameVM } from '@components/frame/frame.model';

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
}

type FrameXVM = OrdersNewFrame;
