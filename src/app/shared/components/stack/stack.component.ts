import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { WithTitle } from '@interfaces/with-title.interface';

@Component({
    selector: 'app-stack',
    imports: [NgClass],
    templateUrl: './stack.component.html',
})
export class StackComponent {
    public readonly vm = input.required<StackVM>();
}

interface StackVM {
    orientation: 'horizontal' | 'vertical';
    align: 'wrap' | 'between' | 'normal';
    gap: 'none' | 'small' | 'medium' | 'large';
}

export interface StackXVM extends StackVM, Partial<WithTitle> {}
