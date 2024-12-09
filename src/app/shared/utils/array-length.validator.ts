import { ValidatorFn, AbstractControl } from '@angular/forms';

export const minArrayLength = (min: number): ValidatorFn => {
    return (control: AbstractControl) => {
        return control.value.length >= min ? null : { MinLengthArray: true };
    };
};
