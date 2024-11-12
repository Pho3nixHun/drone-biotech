import { Component, computed, input } from '@angular/core';
import { defaultRel, defaultTarget, NavItemVM } from './nav-item-vm';
import { isWithLink } from '@interfaces/with-link.interface';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  public vm = input.required<NavItemVM>();
  protected link = computed(() => {
    if (isWithLink(this.vm)) {
      return { rel: defaultRel, target: defaultTarget, ...this.vm.link };
    }
    return null;
  });
}
