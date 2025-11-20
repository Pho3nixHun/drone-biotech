import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { WithTextNode } from '@interfaces/with-text-node.interface';

@Component({
    selector: 'app-badge',
    imports: [NgClass],
    templateUrl: './badge.component.html',
})
export class BadgeComponent {
    public vm = input.required<BadgeVM>();
}

interface BadgeVM {
    variant?: 'soft' | 'outline';
    shape?: 'rounded';
}

export interface BadgeXVM extends BadgeVM, WithTextNode {}
