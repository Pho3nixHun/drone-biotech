import { WithTitle } from '@interfaces/with-title.interface';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { AreasDataFormControlVM } from './components/areas-data-form-control/areas-data-form-control.model';
import { ButtonXVM } from '@components/button/button.model';

interface AreasDataFormControlXVM extends AreasDataFormControlVM {
    addButtonXVM: ButtonXVM;
}

export interface OrdersNewPageVM extends WithTitle {
    areasDataFormControlXVM: AreasDataFormControlXVM;
    requiredAssistiveTextKey: string;
    internalOrderNumberInputTextXVM: InputTextXVM;
    nameInputTextXVM: InputTextXVM;
    phoneNumberInputTextXVM: InputTextXVM;
    emailInputTextXVM: InputTextXVM;
    endCustomerInputTextXVM: InputTextXVM;
    submitButtonXVM: ButtonXVM;
}
