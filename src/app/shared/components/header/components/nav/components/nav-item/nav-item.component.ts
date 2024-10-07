import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemVM } from 'src/app/app-vm.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  vm = input<NavItemVM | null>(null, { alias: 'vm' });
}
