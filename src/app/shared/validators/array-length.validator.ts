import { AbstractControl, ValidatorFn } from '@angular/forms';

export const coordinatesStringValidator = (min = 1): ValidatorFn => {
    return (control: AbstractControl) => {
        const value = control.value;

        if (typeof value !== 'string') {
            return { invalidFormat: true };
        }

        const lines = value.trim().split('\n');
        const validCoords = lines.filter((line) => {
            const parts = line.trim().split(/\s+/);
            if (parts.length !== 2) return false;

            const lat = Number(parts[0]);
            const lng = Number(parts[1]);

            return Number.isFinite(lat) && Number.isFinite(lng);
        });

        if (validCoords.length < min) {
            return {
                notEnoughCoordinates: {
                    required: min,
                    actual: validCoords.length,
                },
            };
        }

        return validCoords.length === lines.length
            ? null
            : { invalidCoordinates: true };
    };
};
