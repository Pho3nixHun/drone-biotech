import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
/**
 * StackComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring the items stack via content projection.
 * - Manages the overall layout.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected components.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable stack layout.
 */
@Component({
    selector: 'app-stack',
    imports: [NgClass],
    templateUrl: './stack.component.html',
})
export class StackComponent {
    public readonly orientation = input.required<Orientation>();
    public readonly gap = input<Gap>('none');
}

export type Orientation = 'horizontal' | 'vertical';
export type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
