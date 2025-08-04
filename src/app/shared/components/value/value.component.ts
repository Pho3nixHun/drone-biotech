import { Component, input } from '@angular/core';
import { ValueVM } from './value.model';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-value',
    imports: [TranslocoModule],
    templateUrl: './value.component.html',
})
export class ValueComponent {
    public vm = input.required<ValueVM>();
}
