import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TabsComponent } from '@components/tabs/tabs.component';

@Component({
    selector: 'app-tabs-nav',
    imports: [NgClass],
    templateUrl: './tabs-nav.component.html',
})
export class TabsNavComponent {
    protected readonly host = inject(TabsComponent, { host: true });
}
