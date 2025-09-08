import { Component, input } from '@angular/core';
import { ButtonVM } from './button.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-button',
    imports: [NgClass],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    public readonly vm = input.required<ButtonVM>();
    public readonly disabled = input<boolean>();
    public readonly active = input<boolean>();
}
