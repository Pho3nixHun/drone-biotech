import { WithTitle } from '@interfaces/with-title.interface';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { ButtonXVM } from '@components/button/button.model';
import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';

export interface OrdersNewPageVM extends WithTitle {
    areasDataFormControlVM: AreasDataFormControlVM;
    requiredAssistiveTextKey: string;
    internalOrderNumberInputTextXVM: InputTextXVM;
    nameInputTextXVM: InputTextXVM;
    phoneNumberInputTextXVM: InputTextXVM;
    emailInputTextXVM: InputTextXVM;
    endCustomerInputTextXVM: InputTextXVM;
    submitButtonXVM: ButtonXVM;
}
