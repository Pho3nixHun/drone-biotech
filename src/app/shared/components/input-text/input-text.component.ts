import { NgClass } from '@angular/common';
import { Component, forwardRef, signal, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ButtonXVM } from '@components/button/button.model';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-input-text',
    imports: [TranslocoModule, NgClass],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true,
        },
    ],
    templateUrl: './input-text.component.html',
})
export class InputTextComponent implements ControlValueAccessor {
    public readonly vm = input.required<InputTextVM>();
    public readonly invalid = input<boolean>(false);
    protected readonly disabled = signal<boolean>(false);
    protected readonly onTouched = signal<(() => void) | null>(null);
    protected readonly value = signal<string | null>(null);
    protected readonly onChange = signal<
        ((value: string | null) => void) | null
    >(null);

    protected markAsTouched() {
        const onTouched = this.onTouched();
        if (onTouched) onTouched();
    }

    protected changed(event: Event) {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) return;

        this.value.set(target.value);
        const onChange = this.onChange();
        if (onChange) onChange(this.value());
    }

    writeValue(value: string | null): void {
        this.value.set(value);
    }
    registerOnChange(fn: (value: string | null) => void): void {
        this.onChange.set(fn);
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched.set(fn);
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled.set(isDisabled);
    }
}
export interface InputTextVM {
    placeholderKey: string;
    labelKey: string;
    isLabelHidden?: boolean;
    id: string;
    readonly: boolean;
    autocomplete:
        | 'name'
        | 'email'
        | 'tel'
        | 'organization'
        | 'current-password'
        | 'off';
    type: 'email' | 'password' | 'text' | 'datetime-local';
}

export interface InputTextXVM extends InputTextVM {
    buttonXVM?: ButtonXVM;
    leadingIcon?: MatIcon;
    trailingIcon?: MatIcon;
}
