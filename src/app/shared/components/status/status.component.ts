import { Component, input } from '@angular/core';
import { StatusVM } from './status.model';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-status',
    imports: [NgClass],
    templateUrl: './status.component.html',
})
export class StatusComponent {
    public vm = input.required<StatusVM>();
}
