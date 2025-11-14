import { Directive, effect, inject, input } from '@angular/core';
import { TabsComponent } from '../../tabs.component';

@Directive({
    selector: '[appTabs]',
})
export class TabsDirective {
    private readonly component = inject(TabsComponent, { host: true });
    public readonly index = input.required<number | undefined>({
        alias: 'appTabs',
    });

    private readonly setActiveEffect = effect(() => {
        const buttons = this.component.buttons();
        const panels = this.component.panels();
        const idx = this.index() ?? 0;

        if (
            !buttons.length ||
            !panels.length ||
            buttons.length !== panels.length
        )
            return;

        const activeIndex = Math.min(Math.max(idx, 0), buttons.length - 1);

        buttons.forEach((btn, i) => btn.active.set(i === activeIndex));
        panels.forEach((panel, i) => panel.active.set(i === activeIndex));
    });
}
