import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { KeyXVM } from '@components/key/key.component';
import { ValueVM } from '@components/value/value.component';

@Component({
    selector: 'app-key-value',
    imports: [NgClass],
    templateUrl: './key-value.component.html',
})
export class KeyValueComponent {
    public vm = input.required<KeyValueVM>();
}

interface KeyValueVM {
    orientation: 'horizontal' | 'vertical';
    gap: 'small' | 'medium' | 'large' | 'none';
}

export interface KeyValueXVM extends KeyValueVM {
    keyXVM: KeyXVM;
    valueVM: ValueVM;
}
