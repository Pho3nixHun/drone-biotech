import { Component, computed, input, output } from '@angular/core';
import { ButtonVM, State } from './button.model';
import { NgClass } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-button',
    imports: [NgClass, TranslocoModule, MatIconModule],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    public readonly vm = input.required<ButtonVM>();
    public readonly state = input<State>();

    protected readonly resolvedState = computed<State>(() => {
        const vmState = this.vm().state;
        const state = this.state();
        return state ?? vmState ?? 'default';
    });

    public readonly clicked = output();
}
