import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function coordinatesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = (control.value || '').trim();

        if (!value) {
            return { latlng: 'Value is required' };
        }

        const parts = value.split(/\s+/);
        if (parts.length !== 2) {
            return { latlng: 'Must be in "lat lng" format' };
        }

        const [latStr, lngStr] = parts;
        const lat = Number(latStr);
        const lng = Number(lngStr);

        if (isNaN(lat) || isNaN(lng)) {
            return { latlng: 'Latitude and longitude must be numbers' };
        }

        if (lat < -90 || lat > 90) {
            return { latlng: 'Latitude must be between -90 and 90' };
        }

        if (lng < -180 || lng > 180) {
            return { latlng: 'Longitude must be between -180 and 180' };
        }

        return null; // ✅ valid
    };
}
