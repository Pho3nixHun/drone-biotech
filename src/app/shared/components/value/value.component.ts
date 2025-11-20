import { Component, input } from '@angular/core';
import { HashMap, TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-value',
    imports: [TranslocoModule],
    templateUrl: './value.component.html',
})
export class ValueComponent {
    public vm = input.required<ValueVM>();
}

export type ValueVM = WithoutKey | WithKey;

interface WithoutKey {
    type: 'withoutKey';
    value: string | number | Date;
}
interface WithKey {
    type: 'withKey';
    key: string;
    params?: HashMap;
}
