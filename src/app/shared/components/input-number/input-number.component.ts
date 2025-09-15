import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, input, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonXVM } from '@components/button/button.model';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-input-number',
    imports: [TranslocoModule, NgClass],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputNumberComponent),
            multi: true,
        },
    ],
    templateUrl: './input-number.component.html',
})
export class InputNumberComponent implements ControlValueAccessor {
    public readonly vm = input.required<InputNumberVM>();
    public readonly invalid = input<boolean>(false);
    protected readonly disabled = signal<boolean>(false);
    protected readonly onTouched = signal<(() => void) | null>(null);
    protected readonly value = signal<number | null>(null);
    protected readonly onChange = signal<
        ((value: number | null) => void) | null
    >(null);

    protected markAsTouched() {
        const onTouched = this.onTouched();
        if (onTouched) onTouched();
    }

    protected changed(event: Event) {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) return;

        this.value.set(target.valueAsNumber);
        const onChange = this.onChange();
        if (onChange) onChange(target.valueAsNumber);
    }

    writeValue(value: number | null): void {
        this.value.set(value);
    }
    registerOnChange(fn: (value: number | null) => void): void {
        this.onChange.set(fn);
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched.set(fn);
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }
}

export interface InputNumberVM {
    placeholderKey: string;
    labelKey: string;
    id: string;
    readonly: boolean;
}

export interface InputNumberXVM extends InputNumberVM {
    buttonXVM?: ButtonXVM;
    leadingIcon?: MatIcon;
    trailingIcon?: MatIcon;
}
