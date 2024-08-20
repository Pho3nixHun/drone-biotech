import { Component, input } from '@angular/core';
import { LogoVM } from '@interfaces/logo-vm';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  vm = input<LogoVM | null>(null, { alias: 'vm' });
}
