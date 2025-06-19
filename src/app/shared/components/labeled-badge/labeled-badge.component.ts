import { Component, input } from '@angular/core';

@Component({
    selector: 'app-labeled-badge',
    imports: [],
    templateUrl: './labeled-badge.component.html',
})
export class LabeledBadgeComponent {
    public color = input.required<string>();
}
