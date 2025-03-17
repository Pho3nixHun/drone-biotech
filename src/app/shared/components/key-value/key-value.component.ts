import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-key-value',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './key-value.component.html',
})
export class KeyValueComponent {
    public label = input<string>();
}
