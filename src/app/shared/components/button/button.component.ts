import { Component, input } from '@angular/core';
import { ButtonVM } from './button.model';
import { NgClass } from '@angular/common';

/**
 * ButtonComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a button.
 * - Manages the overall layout.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable button layout.
 */
@Component({
    selector: 'app-button',
    imports: [NgClass],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    public readonly vm = input.required<ButtonVM>();
    public readonly disabled = input<boolean>();
}
