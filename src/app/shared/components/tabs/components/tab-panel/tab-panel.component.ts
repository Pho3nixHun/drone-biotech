import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-tab-panel',
    imports: [NgClass],
    templateUrl: './tab-panel.component.html',
})
export class TabPanelComponent {
    public id = input.required<string>();
    public active = signal<boolean>(false);
}
