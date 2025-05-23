import { ValidatorFn, AbstractControl } from '@angular/forms';

export const emptyStringValidator = (): ValidatorFn => {
    return (control: AbstractControl) => {
        const value = control.value;

        if (typeof value !== 'string') {
            return { invalidType: true };
        }

        const isEmpty = value.trim().length === 0;

        return isEmpty ? { emptyString: true } : null;
    };
};
