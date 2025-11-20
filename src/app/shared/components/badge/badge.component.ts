import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-badge',
    imports: [NgClass],
    templateUrl: './badge.component.html',
})
export class BadgeComponent {
    public readonly intent = input<Intent>('accent');
    public readonly variant = input<Variant>('fill');
    public readonly shape = input<Shape>('rounded');
    public readonly size = input<Size>('md');
}

export type Intent = 'accent' | 'error' | 'warning' | 'success';
type Variant = 'fill' | 'outline';
type Shape = 'rounded' | 'pilled';
type Size = 'md' | 'sm';
