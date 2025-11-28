import { Component } from '@angular/core';
import { WithTextNode } from '@interfaces/with-text-node.interface';

@Component({
    selector: 'app-key',
    imports: [],
    template: '<ng-content />',
})
export class KeyComponent {}

export type KeyXVM = WithTextNode;
