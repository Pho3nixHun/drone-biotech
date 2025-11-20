import { Component, forwardRef, signal, effect } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Coordinates } from '@stores/location/location.model';
import { isEqual } from 'lodash';

@Component({
    selector: 'app-advanced-marker-form-control',
    template: '',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AdvancedMarkerFormControlComponent),
            multi: true,
        },
    ],
})
export class AdvancedMarkerFormControlComponent
    implements ControlValueAccessor
{
    private readonly value = signal<Coordinates | null>(null, {
        equal: isEqual,
    });
    protected readonly disabled = signal<boolean>(false);
    private readonly onTouched = signal<(() => void) | null>(null);
    private readonly onChange = signal<
        ((value: Coordinates | null) => void) | null
    >(null);

    private readonly onValueChangeEffect = effect(() => {
        const onChange = this.onChange();
        const value = this.value();
        if (onChange) queueMicrotask(() => onChange(value));
    });

    protected markAsTouched() {
        const onTouched = this.onTouched();
        if (onTouched) onTouched();
    }

    public writeValue(value: Coordinates | null): void {
        this.value.set(value);
    }

    public registerOnChange(fn: (value: Coordinates | null) => void): void {
        this.onChange.set(fn);
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched.set(fn);
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }
}
