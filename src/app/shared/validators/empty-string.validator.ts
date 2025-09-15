import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emptyStringValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (typeof value === 'string' && value.trim() === '') {
            return { emptyString: true };
        }
        return null;
    };
}
