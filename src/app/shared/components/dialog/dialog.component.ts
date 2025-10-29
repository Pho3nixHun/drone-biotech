import { Component } from '@angular/core';
import { ButtonXVM } from '@components/button/button.model';
import { WithTitle } from '@interfaces/with-title.interface';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
})
export class DialogComponent {}

export interface DialogVM extends WithTitle {
    closeButtonXVM: ButtonXVM;
    submitButtonXVM: ButtonXVM;
    cancelButtonXVM: ButtonXVM;
}
