import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { TabsComponent } from '@components/tabs/tabs.component';
import { MatIcon } from '@interfaces/mat-icon.enum';
import { WithTextNode } from '@interfaces/with-text-node.interface';

@Component({
    selector: 'app-tab-button',
    imports: [NgClass],
    templateUrl: './tab-button.component.html',
})
export class TabButtonComponent {
    protected readonly host = inject(TabsComponent, { host: true });
    public readonly dataTabId = input.required<string>();
    public readonly active = signal<boolean | undefined>(undefined);
}

export interface TabButtonXVM extends WithTextNode {
    icon?: MatIcon;
}
