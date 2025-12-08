import { Component } from '@angular/core';
import { WithTextNode } from '@interfaces/with-text-node.interface';

@Component({
    selector: 'app-key',
    imports: [],
    template:
        '<span style="color: var(--text-subtle);" class="block"><ng-content /></span>',
})
export class KeyComponent {}

export type KeyXVM = WithTextNode;
