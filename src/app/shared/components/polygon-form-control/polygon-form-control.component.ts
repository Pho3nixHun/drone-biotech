import {
    Component,
    forwardRef,
    signal,
    effect,
    HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import { isEqual } from 'lodash';

@Component({
    selector: 'app-polygon-form-control',
    standalone: true,
    template: ``,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PolygonFormControlComponent),
            multi: true,
        },
    ],
})
export class PolygonFormControlComponent implements ControlValueAccessor {
    @HostListener('blur')
    public onBlur(): void {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    private readonly onTouched = signal<(() => void) | null>(null);
    private readonly onChange = signal<
        ((value: Coordinates[] | null) => void) | null
    >(null);

    public value = signal<Coordinates[] | null>(null, {
        equal: isEqual,
    });
    public disabled = signal(false);
    public touched = false;

    public onValueChange = effect(() => {
        const value = this.value();
        const onChange = this.onChange();
        if (onChange) queueMicrotask(() => onChange(value));
    });

    writeValue(value: Coordinates[] | null): void {
        this.value.set(value);
    }

    registerOnChange(fn: (coordinates: Coordinates[] | null) => void): void {
        this.onChange.set(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched.set(fn);
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }
}
