import { WithTitle } from '@interfaces/with-title.interface';
import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';
import { ButtonXVM } from '@components/button/button.model';

export interface OrdersNewPageVM {
    frameXVM: FrameXVM;
}

export interface OrdersNewFrame extends WithTitle {
    areasDataFormControlVM: AreasDataFormControlVM;
    submitButtonXVM: ButtonXVM;
    internalOrderNumberLabelKey: string;
    nameLabelKey: string;
    phoneNumberLabelKey: string;
    emailLabelKey: string;
    endCustomerLabelKey: string;
    areasDataLabelKey: string;
}

type FrameXVM = OrdersNewFrame;
