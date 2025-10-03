import { Component, contentChildren, input } from '@angular/core';
import { TabButtonComponent } from '@components/tabs/components/tabs-nav/components/tab-button/tab-button.component';
import { TabPanelComponent } from '@components/tabs/components/tab-panel/tab-panel.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tabs',
    imports: [NgClass],
    templateUrl: './tabs.component.html',
})
export class TabsComponent {
    public readonly vm = input.required<TabsVM>();
    public readonly buttons = contentChildren(TabButtonComponent, {
        descendants: true,
    });
    public readonly panels = contentChildren(TabPanelComponent);
}

export interface TabsVM {
    orientation: 'vertical' | 'horizontal';
    variant: 'primary' | 'secondary';
    index?: number;
}
