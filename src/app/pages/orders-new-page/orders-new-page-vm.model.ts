import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';

export interface OrdersNewPageVM {
    frameXVM: FrameXVM;
}

export interface OrdersNewFrame {
    titleKey: string;
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
