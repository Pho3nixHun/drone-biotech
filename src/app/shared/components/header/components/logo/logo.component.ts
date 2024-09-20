import { Component, input } from '@angular/core';
import { LogoVM } from '@components/header/components/logo/logo-vm.model';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  vm = input<LogoVM | null>(null, { alias: 'vm' });
}
