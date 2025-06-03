import { Component, computed, input } from '@angular/core';
import { defaultRel, defaultTarget, NavItemVM } from './nav-item-vm';
import { isWithLink } from '@interfaces/with-link.interface';

/**
 * NavItemComponent
 *
 * Type: Presentational
 *
 * Scope:
 * - Responsible for structuring a nav item
 * - Manages the overall layout and styling for the nav item.
 *
 * Out-of-Scope:
 * - Contains no logic related to the behavior or data of the projected contents.
 * - Not responsible for fetching or transforming data.
 *
 * Purpose (optional):
 * To provide a flexible and reusable nav item.
 */
@Component({
    selector: 'app-nav-item',
    imports: [],
    templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
    public vm = input.required<NavItemVM>({ alias: 'vm' });
    private VM: NavItemVM | undefined;
    protected link = computed(() => {
        this.VM = this.vm();
        if (isWithLink(this.VM)) {
            return {
                rel: defaultRel,
                target: defaultTarget,
                link: this.VM.link.href,
            };
        }
        return null;
    });
}
