import { inject, Injectable } from '@angular/core';
import { FormGroupConfig } from './form-dialog.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormGeneratorService {
    private readonly fb = inject(FormBuilder);

    public generateForm(config: FormGroupConfig): FormGroup {
        const formGroup = this.fb.group({});
        config.forEach((control) => {
            switch (control.abstractControlType) {
                case 'control': {
                    formGroup.addControl(
                        control.controlName,
                        this.fb.control(
                            control.initialValue,
                            control.validators
                        )
                    );
                    break;
                }
                case 'group': {
                    const fbGroup = this.fb.group({});

                    switch (control.fieldType) {
                        case 'filegroup': {
                            fbGroup.addControl(
                                control.item.controlName,
                                this.fb.control(
                                    control.item.initialValue,
                                    control.item.validators
                                )
                            );
                            break;
                        }
                        case 'checklistgroup': {
                            control.items.forEach((item) =>
                                fbGroup.addControl(
                                    item.controlName,
                                    this.fb.control(
                                        item.initialValue,
                                        item.validators
                                    )
                                )
                            );
                        }
                    }
                    formGroup.addControl(control.controlName, fbGroup);
                    break;
                }
            }
        });

        return formGroup;
    }
}
