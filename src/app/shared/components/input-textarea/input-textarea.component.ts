import { NgClass } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ButtonXVM } from '@components/button/button.model';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-input-textarea',
    imports: [TranslocoModule, NgClass],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextareaComponent),
            multi: true,
        },
    ],
    templateUrl: './input-textarea.component.html',
})
export class InputTextareaComponent implements ControlValueAccessor {
    public readonly vm = input.required<InputTextareaVM>();
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
        if (!(target instanceof HTMLTextAreaElement)) return;

        const onChange = this.onChange();
        if (onChange) onChange(target.value);
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

export interface InputTextareaVM {
    placeholderKey: string;
    labelKey: string;
    id: string;
    readonly: boolean;
}

export interface InputTextareaXVM extends InputTextareaVM {
    buttonXVM?: ButtonXVM;
}
