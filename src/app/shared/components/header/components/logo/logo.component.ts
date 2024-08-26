import { Component, input } from '@angular/core';
import { LogoComponentInterfaces } from '@components/header/components/logo/logo.component.interfaces';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  vm = input<LogoComponentInterfaces | null>(null, { alias: 'vm' });
}
